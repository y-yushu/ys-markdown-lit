import { html, LitElement, ReactiveElement, unsafeCSS } from 'lit'
import type { PropertyValues } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { createRef, ref } from 'lit/directives/ref.js'
import type { Ref } from 'lit/directives/ref.js'
import { consume } from '@lit/context'
import componentStyles from './index.css?inline'
import { themeContext } from '../../utils/context'
import type { ThemeData } from '../../utils/context'
import mermaid from 'mermaid'
import type { YsRenderUpdateDetail } from '../../types'
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
  static styles = [unsafeCSS(componentStyles)]

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
              this.mermaidBoxRef.value.innerHTML = `<div class="ys-mermaid-error">❌ 图表渲染失败</div>`
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
          this.mermaidBoxRef.value!.innerHTML = `<div class="ys-mermaid-error">❌ 图表渲染失败</div>`
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

    const baseButtonClasses = {
      'ys-mermaid-tab': true
    }

    const codeButtonClasses = {
      ...baseButtonClasses,
      'ys-mermaid-tab-active': this.status === 'code',
      'ys-mermaid-tab-idle': this.status !== 'code'
    }

    const viewButtonClasses = {
      ...baseButtonClasses,
      'ys-mermaid-tab-active': this.status === 'view',
      'ys-mermaid-tab-idle': this.status !== 'view'
    }

    return html`<div class="ys-mermaid-root">
      <!-- 甘特图卡片 -->
      <div class=${isDark ? 'ys-mermaid-card ys-mermaid-card-dark' : 'ys-mermaid-card'}>
        <!-- 顶部工具栏 -->
        <div class="ys-mermaid-toolbar">
          <div class="ys-mermaid-tabs">
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
          ? html`<div class="ys-mermaid-scroll">
              <pre class="ys-mermaid-code"><code>${this.content}</code></pre>
            </div>`
          : html`<div class="ys-mermaid-view">
              <div ${ref(this.mermaidBoxRef)} class="ys-mermaid-graph">
                <div class="ys-mermaid-error">❌ 图表渲染失败</div>
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
