import { css, html, LitElement, PropertyValues, unsafeCSS } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import hljs from 'highlight.js/lib/core'
import highlightcss from 'highlight.js/styles/atom-one-dark.css?inline'
import xml from 'highlight.js/lib/languages/xml'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { createRef, ref, Ref } from 'lit/directives/ref.js'
import tailwindcss from './index.css?inline'
import { YsRenderUpdateDetail } from '../../types'
import { setContent } from '../../utils'
import { consume } from '@lit/context'
import { themeContext, ThemeData } from '../../utils/context'
import { classMap } from 'lit/directives/class-map.js'
hljs.registerLanguage('xml', xml)

@customElement('ys-svg')
export default class YsSvg extends LitElement {
  private config = {
    name: 'svg',
    version: '0.0.1'
  }

  protected firstUpdated() {
    // 注册组件
    this.dataset.register = this.config.name

    if (this.parentElement) {
      this.parentElement.addEventListener(`${this.config.name}-update`, this.handleUpdate)
    }
  }

  disconnectedCallback() {
    if (this.parentElement) {
      this.parentElement.removeEventListener(`${this.config.name}-update`, this.handleUpdate)
    }
    super.disconnectedCallback()
  }

  private handleUpdate = (event: CustomEvent<YsRenderUpdateDetail>) => {
    setContent(event.detail.el, html`<ys-svg-render .content=${event.detail.content}></ys-svg-render>`)
  }
}

type SvgRenderType = 'code' | 'view'

@customElement('ys-svg-render')
export class YsSvgRender extends LitElement {
  static styles = [
    unsafeCSS(tailwindcss),
    unsafeCSS(highlightcss),
    css`
      /* 浅色滚动条 */
      .custom-scrollbar.light::-webkit-scrollbar {
        width: 4px;
        height: 4px;
      }
      .custom-scrollbar.light::-webkit-scrollbar-track {
        background: #f0f0f0;
        border-radius: 4px;
      }
      .custom-scrollbar.light::-webkit-scrollbar-thumb {
        background-color: #8b8b8b;
        border-radius: 4px;
      }
      .custom-scrollbar.light::-webkit-scrollbar-thumb:hover {
        background-color: #9f9c9c;
      }
      .custom-scrollbar.light {
        scrollbar-width: thin;
        scrollbar-color: #8b8b8b #f0f0f0;
      }

      /* 深色滚动条 */
      .custom-scrollbar.dark::-webkit-scrollbar {
        width: 4px;
        height: 4px;
      }
      .custom-scrollbar.dark::-webkit-scrollbar-track {
        background: #1e2939;
        border-radius: 4px;
      }
      .custom-scrollbar.dark::-webkit-scrollbar-thumb {
        background-color: #3b82f6;
        border-radius: 4px;
      }
      .custom-scrollbar.dark::-webkit-scrollbar-thumb:hover {
        background-color: #60a5fa;
      }
      .custom-scrollbar.dark {
        scrollbar-width: thin;
        scrollbar-color: #3b82f6 #1e2939;
      }
    `
  ]

  // 使用 consume 装饰器消费主题上下文
  @consume({ context: themeContext, subscribe: true })
  @property({ attribute: false })
  themeData?: ThemeData

  private get isDarkMode(): boolean {
    return this.themeData?.mode === 'dark'
  }

  @property({ type: String }) content: string = '' // SVG 内容
  @state() status: SvgRenderType = 'code'
  @state() isComplete = false
  @state() isFinish = false

  private svgBoxRef: Ref<HTMLDivElement> = createRef()
  private dragStartX = 0
  private dragStartY = 0
  @state() x = 0
  @state() y = 0
  private isDragging = false

  checkStatus(status: SvgRenderType) {
    if (!this.isFinish) return
    this.status = status
  }

  firstUpdated() {}

  updated(changedProps: PropertyValues) {
    if ((changedProps.has('status') || changedProps.has('content')) && this.status === 'view') {
      const container = this.svgBoxRef.value
      if (container) {
        // 解绑旧事件，避免重复绑定
        container.removeEventListener('mousedown', this.onMouseDown)
        window.removeEventListener('mousemove', this.onMouseMove)
        window.removeEventListener('mouseup', this.onMouseUp)

        // 绑定新事件
        container.addEventListener('mousedown', this.onMouseDown)
        window.addEventListener('mousemove', this.onMouseMove)
        window.addEventListener('mouseup', this.onMouseUp)
      }
    }
  }

  disconnectedCallback() {
    const container = this.svgBoxRef.value
    container?.removeEventListener('mousedown', this.onMouseDown)
    window.removeEventListener('mousemove', this.onMouseMove)
    window.removeEventListener('mouseup', this.onMouseUp)
    super.disconnectedCallback()
  }

  private onMouseDown = (e: MouseEvent) => {
    this.isDragging = true
    this.dragStartX = e.clientX - this.x
    this.dragStartY = e.clientY - this.y
  }

  private onMouseMove = (e: MouseEvent) => {
    if (!this.isDragging) return
    this.x = e.clientX - this.dragStartX
    this.y = e.clientY - this.dragStartY
  }

  private onMouseUp = () => {
    this.isDragging = false
  }

  private isSvgComplete(content: string): boolean {
    const trimmed = content.trim()
    const withoutComments = trimmed.replace(/<!--.*?-->/gs, '').trim()
    return (
      (withoutComments.startsWith('<svg') && withoutComments.endsWith('</svg>')) ||
      (withoutComments.startsWith('<?xml') && withoutComments.includes('<!DOCTYPE svg') && withoutComments.endsWith('</svg>'))
    )
  }

  private filterTrailingFence(content: string): string {
    return content.trimEnd().replace(/(`{1,2})$/g, '')
  }

  render() {
    const isDark = this.isDarkMode
    const filteredContent = this.filterTrailingFence(this.content)
    const isSvgComplete = this.isSvgComplete(filteredContent)
    this.isComplete = isSvgComplete

    if (isSvgComplete && !this.isFinish) {
      this.isFinish = true
      this.status = 'view'
    }

    const highlightedCode = hljs.highlight(filteredContent, { language: 'xml' }).value

    const svgContainerStyle = `transform: translate(${this.x}px, ${this.y}px); cursor: grab;`

    const baseButtonClasses = {
      flex: true,
      'min-w-16': true,
      'cursor-pointer': true,
      'items-center': true,
      'justify-center': true,
      'rounded-md': true,
      'px-3': true,
      'py-1': true,
      'text-sm': true,
      'font-medium': true,
      'transition-all': true,
      'duration-200': true,
      'ease-in-out': true
    }

    const codeButtonClasses = {
      ...baseButtonClasses,
      'bg-white': !isDark && this.status === 'code',
      'text-blue-600': !isDark && this.status === 'code',
      'shadow-sm': this.status === 'code',
      'bg-gray-700': isDark && this.status === 'code',
      'text-blue-400': isDark && this.status === 'code',
      'bg-transparent': this.status !== 'code',
      'text-gray-600': !isDark && this.status !== 'code',
      'text-gray-400': isDark && this.status !== 'code',
      'hover:bg-gray-200': !isDark && this.status !== 'code',
      'hover:bg-gray-800': isDark && this.status !== 'code',
      'hover:text-gray-800': !isDark && this.status !== 'code',
      'hover:text-gray-200': isDark && this.status !== 'code'
    }

    const viewButtonClasses = {
      ...baseButtonClasses,
      'bg-white': !isDark && this.status === 'view',
      'text-blue-600': !isDark && this.status === 'view',
      'shadow-sm': this.status === 'view',
      'bg-gray-700': isDark && this.status === 'view',
      'text-blue-400': isDark && this.status === 'view',
      'bg-transparent': this.status !== 'view',
      'text-gray-600': !isDark && this.status !== 'view',
      'text-gray-400': isDark && this.status !== 'view',
      'hover:bg-gray-200': !isDark && this.status !== 'view',
      'hover:bg-gray-800': isDark && this.status !== 'view',
      'hover:text-gray-800': !isDark && this.status !== 'view',
      'hover:text-gray-200': isDark && this.status !== 'view'
    }

    return html`<div class="mb-4">
      <div class="${isDark ? 'border-gray-700' : 'border-gray-300'} overflow-hidden rounded-md border border-solid">
        <!-- 顶部工具栏 -->
        <div class="${isDark ? 'bg-gray-900' : ''} flex h-10 items-center justify-between gap-2 py-2 pr-2 pl-3 select-none">
          <div class="${isDark ? 'bg-gray-800' : 'bg-gray-100'} inline-flex h-8 rounded-md p-1">
            <button class=${classMap(codeButtonClasses)} @click=${() => this.checkStatus('code')}>
              <span>代码</span>
            </button>
            <button class=${classMap(viewButtonClasses)} @click=${() => this.checkStatus('view')}>
              <span>图标</span>
            </button>
          </div>
        </div>

        <!-- 内容区域 -->
        <div class="max-h-60 overflow-hidden">
          ${this.status === 'code'
            ? html`<div class="max-w-full overflow-x-auto">
                <pre
                  class="${isDark ? 'bg-[#1e2939] dark' : 'bg-white light'} custom-scrollbar max-h-60 max-w-full overflow-y-auto rounded-t-none p-0"
                ><code  class="hljs language-xml" style="background: transparent;">${unsafeHTML(highlightedCode)}</code></pre>
              </div>`
            : html`<div class="${isDark ? 'bg-[#1e2939]' : 'bg-white'} flex h-60 w-full items-center justify-center p-4" ${ref(this.svgBoxRef)}>
                <div style=${svgContainerStyle}>${unsafeHTML(filteredContent)}</div>
              </div>`}
        </div>
      </div>
    </div>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ys-svg': YsSvg
    'ys-svg-render': YsSvgRender
  }
}
