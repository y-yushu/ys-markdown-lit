import { html, LitElement, PropertyValues, ReactiveElement, unsafeCSS } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { createRef, ref, Ref } from 'lit/directives/ref.js'
import { consume } from '@lit/context'
import tailwindcss from './index.css?inline'
import { themeContext, ThemeData } from '../../utils/context'
import mermaid from 'mermaid'
import { YsRenderUpdateDetail } from '../../types'
import { setContent } from '../../utils'

// 初始化 mermaid 只执行一次
mermaid.initialize({
  startOnLoad: false
})

type MermaidRenderType = 'code' | 'view'
type ErrorHandlingType = 'errorHandling' | 'notHandled'

@customElement('ys-mermaid')
export default class YsMermaid extends LitElement {
  private config = {
    name: 'mermaid',
    version: '0.1.1'
  }
  // 默认展开类型
  @property({ type: String, attribute: 'initial-status' }) initialStatus: MermaidRenderType = 'code'
  // 错误处理方式
  @property({ type: String, attribute: 'error-handling' }) errorHandlingType: ErrorHandlingType = 'notHandled'

  protected firstUpdated() {
    // 注册组件
    this.dataset.register = this.config.name

    if (this.parentElement) {
      this.parentElement.addEventListener(`${this.config.name}-instance`, this.handleInstance)
      this.parentElement.addEventListener(`${this.config.name}-update`, this.handleUpdate)
    }
  }

  disconnectedCallback() {
    if (this.parentElement) {
      this.parentElement.removeEventListener(`${this.config.name}-instance`, this.handleInstance)
      this.parentElement.removeEventListener(`${this.config.name}-update`, this.handleUpdate)
    }
    super.disconnectedCallback()
  }

  private handleInstance = (event: CustomEvent<YsRenderUpdateDetail>) => {
    setContent(
      event.detail.el,
      html`<ys-mermaid-render
        .content=${event.detail.content}
        .status=${this.initialStatus}
        .errorHandlingType=${this.errorHandlingType}
      ></ys-mermaid-render>`
    )
  }

  private handleUpdate = (event: CustomEvent<YsRenderUpdateDetail>) => {
    setContent(
      event.detail.el,
      html`<ys-mermaid-render
        .content=${event.detail.content}
        .status=${this.initialStatus}
        .errorHandlingType=${this.errorHandlingType}
      ></ys-mermaid-render>`
    )
  }
}

@customElement('ys-mermaid-render')
export class YsMermaidRender extends LitElement {
  static styles = [unsafeCSS(tailwindcss)]

  @property({ type: String }) content: string = ''

  @property() errorHandlingType: ErrorHandlingType = 'notHandled'

  @property() status: MermaidRenderType = 'code'

  // 使用 consume 装饰器消费主题上下文
  @consume({ context: themeContext, subscribe: true })
  @property({ attribute: false })
  themeData?: ThemeData

  // 存储当前应用的主题，用于检测变化
  @state() private currentMermaidTheme: 'dark' | 'default' = 'default'

  // 计算属性：是否为深色模式
  private get isDarkMode(): boolean {
    return this.themeData?.mode === 'dark'
  }

  // 添加一个updated生命周期方法，以处理状态变化
  protected updated(changedProperties: PropertyValues): void {
    // 处理content的变化
    if (changedProperties.has('content') && this.content) {
      // 如果当前是view模式，需要重新渲染
      if (this.status === 'view') {
        this._renderMermaid()
      }
    }

    // 主题变化时更新 mermaid 主题配置并重新渲染
    if (changedProperties.has('themeData')) {
      const newTheme = this.isDarkMode ? 'dark' : 'default'

      // 只有当主题确实变化时才更新 mermaid 配置
      if (this.currentMermaidTheme !== newTheme) {
        this.currentMermaidTheme = newTheme

        // 更新 mermaid 配置
        mermaid.initialize({
          startOnLoad: false,
          theme: newTheme
        })

        // 如果当前是view模式，重新渲染图表
        if (this.status === 'view') {
          this._renderMermaid()
        }
      }
    }
  }

  private mermaidBoxRef: Ref<HTMLDivElement> = createRef()

  _checkStatus(status: MermaidRenderType) {
    if (this.status === status) return
    this.status = status
    if (status === 'code') {
      if (this.mermaidBoxRef.value) {
        this.mermaidBoxRef.value.innerHTML = ''
      }
    } else if (status === 'view') {
      this._renderMermaid()
    }
  }

  /**
   * 渲染方法
   */
  private _renderMermaid() {
    if (!this.content.trim()) return

    mermaid
      .parse(this.content)
      .then(() => {
        const id = `mermaid_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`
        mermaid
          .render(id, this.content)
          .then(res => {
            if (this.mermaidBoxRef.value) {
              this.mermaidBoxRef.value.innerHTML = res.svg
            }
          })
          .catch(_err1 => {
            // 特别捕获 render 阶段的错误
            const isDevMode = !!ReactiveElement.disableWarning
            if (isDevMode) {
              console.error('[Mermaid render error]', _err1)
            }
            if (this.mermaidBoxRef.value) {
              this.mermaidBoxRef.value.innerHTML = `<div class="text-red-500 p-2">❌ 图表渲染失败</div>`
            }

            // 清理可能的错误元素
            this._cleanupErrorElements()
          })
      })
      .catch(_err2 => {
        const isDevMode = !!ReactiveElement.disableWarning
        if (isDevMode) {
          console.error('[Mermaid parse error] 语法校验错误')
        }
        if (this.errorHandlingType === 'errorHandling') {
          this.mermaidBoxRef.value!.innerHTML = `<div class="text-red-500 p-2">❌ 图表渲染失败</div>`
        }
        // 添加清理
        this._cleanupErrorElements()
      })
  }

  // 添加一个清理方法
  private _cleanupErrorElements() {
    // 清理body中的错误元素
    setTimeout(() => {
      document.querySelectorAll('[id^="dmermaid_"]').forEach(el => {
        el.remove()
      })
    }, 0)
  }

  render() {
    // 判断是否为深色模式
    const isDark = this.isDarkMode

    // 定义基础样式类
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

    // 创建完整的按钮类对象
    const codeButtonClasses = {
      ...baseButtonClasses,
      // 激活状态
      'bg-white': !isDark && this.status === 'code',
      'text-blue-600': !isDark && this.status === 'code',
      'shadow-sm': this.status === 'code',
      'bg-gray-700': isDark && this.status === 'code',
      'text-blue-400': isDark && this.status === 'code',
      // 非激活状态
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
      // 激活状态
      'bg-white': !isDark && this.status === 'view',
      'text-blue-600': !isDark && this.status === 'view',
      'shadow-sm': this.status === 'view',
      'bg-gray-700': isDark && this.status === 'view',
      'text-blue-400': isDark && this.status === 'view',
      // 非激活状态
      'bg-transparent': this.status !== 'view',
      'text-gray-600': !isDark && this.status !== 'view',
      'text-gray-400': isDark && this.status !== 'view',
      'hover:bg-gray-200': !isDark && this.status !== 'view',
      'hover:bg-gray-800': isDark && this.status !== 'view',
      'hover:text-gray-800': !isDark && this.status !== 'view',
      'hover:text-gray-200': isDark && this.status !== 'view'
    }

    return html`<div class="mb-4">
      <!-- 甘特图卡片 -->
      <div class="${isDark ? 'border-gray-700' : 'border-gray-300'} overflow-hidden rounded-md border border-solid">
        <!-- 顶部工具栏 -->
        <div class="${isDark ? 'bg-gray-900' : ''} flex h-10 items-center justify-between gap-2 py-2 pr-2 pl-3 select-none">
          <div class="${isDark ? 'bg-gray-800' : 'bg-gray-100'} inline-flex h-8 rounded-md p-1">
            <button class=${classMap(codeButtonClasses)} @click=${() => this._checkStatus('code')}>
              <span>代码</span>
            </button>
            <button class=${classMap(viewButtonClasses)} @click=${() => this._checkStatus('view')}>
              <span>图表</span>
            </button>
          </div>
        </div>

        <!-- 内容区域 - 代码视图 -->
        ${this.status === 'code'
          ? html`<div class="max-w-full overflow-x-auto">
              <pre class="${isDark ? 'bg-[#1e2939]' : ''} !m-0 max-w-full rounded-t-none p-4"><code>${this.content}</code></pre>
            </div>`
          : html`<div class="${isDark ? 'bg-[#1e2939]' : 'bg-white'} min-h-20 w-full p-4">
              <div ${ref(this.mermaidBoxRef)} class="flex justify-center">
                <div class="p-2 text-red-500">❌ 图表渲染失败</div>
              </div>
            </div>`}
      </div>
    </div>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ys-mermaid': YsMermaid
    'ys-mermaid-render': YsMermaidRender
  }
}
