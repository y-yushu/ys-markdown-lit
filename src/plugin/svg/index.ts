import { html, LitElement, TemplateResult, unsafeCSS } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import YsMdRendering from '../../YsMdRendering'
import { AstToken } from '../../YsMdRendering/registerAllCustomRenderers'
import hljs from 'highlight.js/lib/core'
import highlightcss from 'highlight.js/styles/atom-one-dark.css?inline'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { createRef, ref, Ref } from 'lit/directives/ref.js'

import xml from 'highlight.js/lib/languages/xml'
hljs.registerLanguage('xml', xml)

@customElement('ys-svg')
export default class YsSvg extends LitElement {
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
              if (ask.node.info === 'svg') {
                return html`<ys-svg-render .content=${ask.node.content}></ys-svg-render>`
              } else {
                return originalFenceRule(ask, _chil)
              }
            }
          },
          feature: 'Svg渲染'
          //   styles: ''
        },
        bubbles: true,
        composed: true
      })
    )
  }
}

type SvgRenderType = 'code' | 'view'

@customElement('ys-svg-render')
export class YsSvgRender extends LitElement {
  createRenderRoot() {
    return this
  }

  static styles = [unsafeCSS(highlightcss)]

  @property({ type: String }) content: string = '' // 接收 SVG 内容

  @state() status: SvgRenderType = 'code'

  @state() isComplete = false

  // 判断是否首次完成
  @state() isFinish = false

  private svgBoxRef: Ref<HTMLDivElement> = createRef()
  private svgHeaderRef: Ref<HTMLDivElement> = createRef()

  @state() x = 0

  @state() y = 0

  checkStatus() {
    if (this.status === 'code') {
      this.status = 'view'
    } else {
      this.status = 'code'
    }
  }

  firstUpdated() {
    // 使用 ref 获取元素
    const container = this.svgBoxRef.value
    if (container) {
      this.x = container.clientWidth / 2
      const header = this.svgHeaderRef.value
      if (header) {
        this.y = (container.clientHeight - header.clientHeight) / 2
      } else {
        this.y = container.clientHeight / 2
      }
    }
  }

  render() {
    const filteredContent = this.filterTrailingFence(this.content)
    const isSvgComplete = this.isSvgComplete(filteredContent)
    this.isComplete = isSvgComplete

    // 首次加载完成 自动切换到视图
    if (isSvgComplete && !this.isFinish) {
      this.isFinish = true
      this.status = 'view'
    }

    const highlightedCode = hljs.highlight(filteredContent, { language: 'xml' }).value

    // 如果 SVG 不完整，显示占位内容
    return html`
      <div ${ref(this.svgBoxRef)} class="overflow-hidden rounded-lg">
        <div ${ref(this.svgHeaderRef)} class="sticky top-0 flex h-8 items-center justify-between rounded-t-md bg-gray-700 px-3 text-xs select-none">
          <span class="font-bold text-gray-400">svg</span>
          <span class="cursor-pointer text-blue-400 active:text-blue-300" @click=${this.checkStatus}>${this.status === 'code' ? '视图' : '代码'}</span>
        </div>
        ${this.status === 'code'
          ? html`<div class="relative aspect-[5/2] w-full overflow-auto">
              <div class="absolute inset-0 overflow-auto bg-gray-800">
                <pre class="!m-0 w-fit !p-0"><code class="hljs language-xml !bg-gray-800">${unsafeHTML(highlightedCode)}</code></pre>
              </div>
            </div>`
          : html`<div class="relative aspect-[5/2] w-full overflow-auto bg-gray-300">
              <div class="absolute -translate-x-1/2 -translate-y-1/2 transform cursor-pointer" style="top:${this.y}px;left:${this.x}px;">
                ${unsafeHTML(filteredContent)}
              </div>
            </div>`}
      </div>
    `
  }

  /**
   * 检查 SVG 是否完整
   * @param content SVG 字符串内容
   * @returns 是否完整
   */
  private isSvgComplete(content: string): boolean {
    const trimmedContent = content.trim()
    const withoutComments = trimmedContent.replace(/<!--.*?-->/gs, '').trim() // 移除注释
    return (
      (withoutComments.startsWith('<svg') && withoutComments.endsWith('</svg>')) ||
      (withoutComments.startsWith('<?xml') && withoutComments.includes('<!DOCTYPE svg') && withoutComments.endsWith('</svg>'))
    )
  }

  /**
   * 过滤掉内容末尾的半个围栏
   * @param content SVG 字符串内容
   * @returns 过滤后的内容
   */
  private filterTrailingFence(content: string): string {
    const trimmedContent = content.trimEnd()
    const fencePattern = /(`{1,2})$/ // 匹配末尾的一个或两个反引号
    return trimmedContent.replace(fencePattern, '') // 移除末尾的半个围栏
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ys-svg': YsSvg
    'ys-svg-render': YsSvgRender
  }
}
