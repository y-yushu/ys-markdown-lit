import { html, LitElement, PropertyValues, TemplateResult } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import YsMdRendering from '../../YsMdRendering'
import { AstToken } from '../../YsMdRendering/registerAllCustomRenderers'
import mermaid from 'mermaid'
import { createRef, ref, Ref } from 'lit/directives/ref.js'

@customElement('ys-mermaid')
export default class YsMermaid extends LitElement {
  connectedCallback() {
    super.connectedCallback()

    // 触发事件通知主组件
    this.dispatchEvent(
      new CustomEvent('child-register', {
        detail: {
          apply: (instance: YsMdRendering) => {
            // 保存原始的 fence 规则
            const originalFenceRule = instance.renderMethods['fence']

            instance.renderMethods['fence'] = (ask: AstToken, _chil: TemplateResult[]): TemplateResult => {
              if (ask.node.info === 'mermaid') {
                return html`<ys-mermaid-render .content=${ask.node.content}></ys-mermaid-render>`
              } else {
                return originalFenceRule(ask, _chil)
              }
            }
          },
          feature: 'Mermaid渲染'
          //   styles: ''
        },
        bubbles: true,
        composed: true
      })
    )
  }
}

type MermaidRenderType = 'code' | 'view'

@customElement('ys-mermaid-render')
export class YsMermaidRender extends LitElement {
  createRenderRoot() {
    return this
  }

  @property({ type: String }) content: string = ''

  @state() status: MermaidRenderType = 'code'

  protected firstUpdated(_changedProperties: PropertyValues): void {
    mermaid.initialize({
      startOnLoad: false
    })
  }

  private mermaidBoxRef: Ref<HTMLDivElement> = createRef()

  _checkStatus(status: MermaidRenderType) {
    this.status = status
    if (status === 'code') {
      if (this.mermaidBoxRef.value) {
        this.mermaidBoxRef.value.innerHTML = ''
      }
    } else if (status === 'view') {
      this._renderMermaid()
    }
  }

  private _renderMermaid() {
    if (!this.content.trim()) return

    mermaid
      .parse(this.content)
      .then(() => {
        const id = `mermaid_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`

        mermaid.render(id, this.content).then(res => {
          if (this.mermaidBoxRef.value) {
            this.mermaidBoxRef.value.innerHTML = res.svg
          }
        })
      })
      .catch(err => {
        console.error('[Mermaid 渲染失败]', err)
        this.mermaidBoxRef.value!.innerHTML = `<div class="text-red-500 p-2">❌ 图表渲染失败</div>`
      })
  }

  render() {
    return html`
      <div class="mx-auto mb-4 max-w-4xl">
        <!-- 甘特图卡片 -->
        <div class="overflow-hidden border border-solid border-gray-300 shadow-xl">
          <!-- 顶部工具栏 -->
          <div class="flex h-8 items-center justify-between gap-2 py-2 pr-2 pl-3 select-none">
            <div class="flex flex-1 items-center gap-2">
              <div class="inline-flex h-8 cursor-pointer p-0.5">
                <button
                  class=${classMap({
                    'flex min-w-7 cursor-pointer items-center justify-center transition active:text-blue-300': true,
                    'text-blue-500': this.status === 'code'
                  })}
                  @click=${() => this._checkStatus('code')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"
                    ></path>
                  </svg>
                </button>
                <button
                  class=${classMap({
                    'flex min-w-7 cursor-pointer items-center justify-center transition active:text-blue-300': true,
                    'text-blue-500': this.status === 'view'
                  })}
                  @click=${() => this._checkStatus('view')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- 内容区域 - 代码视图 -->
          ${this.status === 'code'
            ? html`
                <div>
                  <pre class="!my-0 bg-white leading-relaxed text-blue-600"><code>${this.content}</code></pre>
                </div>
              `
            : html`
                <div class="min-h-20 w-full bg-white p-4">
                  <div ${ref(this.mermaidBoxRef)} class="flex justify-center"></div>
                </div>
              `}
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ys-mermaid': YsMermaid
    'ys-mermaid-render': YsMermaidRender
  }
}
