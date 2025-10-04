import { LitElement, TemplateResult, css, html, unsafeCSS } from 'lit'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { customElement, property } from 'lit/decorators.js'
import hljs from 'highlight.js/lib/core'
import highlightcss from 'highlight.js/styles/atom-one-dark.css?inline'
import YsMdRendering from '../../YsMdRendering'
import RegistrationLanguage from './RegistrationLanguage'
import { AstToken } from '../../types'
import { BooleanConverter } from '../../utils/converter'

// 注册语法高亮
RegistrationLanguage()

// 额外语言字典
const LanguageDict: Record<string, string> = {
  js: 'javascript',
  ts: 'typescript',
  py: 'python',
  rb: 'ruby',
  html: 'xml',
  yml: 'yaml',
  md: 'markdown',
  'c++': 'cpp',
  cc: 'cpp',
  hpp: 'cpp',
  'c#': 'csharp',
  golang: 'go',
  rs: ' rust',
  SQL: 'sql',
  mysql: 'sql',
  postgres: 'sql',
  pgsql: 'sql',
  sh: 'bash',
  zsh: 'bash'
}

@customElement('ys-code-highlight')
export default class YsCodeHighlight extends LitElement {
  // 是否启用自动换行
  @property({ type: Boolean, attribute: 'no-word-wrap', converter: BooleanConverter }) noWordWrap = false

  private onMyCustomEvent = (e: CustomEvent) => {
    // 阻止事件继续冒泡，防止重复触发（视具体需求）
    e.stopPropagation()

    // 可根据需要加工事件 detail
    const forwardedEvent = new CustomEvent('copy-text', {
      detail: e.detail,
      bubbles: true,
      composed: true
    })

    this.dispatchEvent(forwardedEvent)
  }

  firstUpdated() {
    // 触发事件通知主组件
    this.dispatchEvent(
      new CustomEvent('child-register', {
        detail: {
          apply: (instance: YsMdRendering) => {
            instance.customMethods['fence'] = (ask: AstToken, _chil: TemplateResult[]): TemplateResult => {
              const token = (ask as AstToken).node
              const info = LanguageDict[token.info] || token.info
              const language = info || 'plaintext'

              return html`<ys-code-highlight-render
                .language=${language}
                .info=${info}
                .content=${token.content}
                .wordWrap=${!this.noWordWrap}
                @copy-text=${this.onMyCustomEvent}
              ></ys-code-highlight-render>`
            }
          },
          feature: '代码高亮'
        },
        bubbles: true,
        composed: true
      })
    )
  }
}

@customElement('ys-code-highlight-render')
export class YsCodeHighlightRender extends LitElement {
  static styles = [
    unsafeCSS(highlightcss),
    css`
      .code-block {
        margin-bottom: 1rem;
        border-radius: 0.5rem;
        line-height: 1.5;
      }
      .code-header {
        position: sticky;
        top: 0;
        display: flex;
        height: 2rem;
        align-items: center;
        justify-content: space-between;
        padding: 0 0.75rem;
        background: #374151;
        font-size: 0.75rem;
        user-select: none;
        border-top-left-radius: 0.375rem;
        border-top-right-radius: 0.375rem;
      }
      .code-lang {
        font-weight: 700;
        color: #9ca3af;
      }
      .code-copy {
        cursor: pointer;
        color: #60a5fa;
      }
      .code-copy:active {
        color: #93c5fd;
      }
      .code-pre {
        margin: 0;
        padding: 0;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
      .code-body {
        display: block;
        background: #1f2937;
      }
      .word-wrap {
        white-space: pre-wrap;
        word-wrap: break-word;
      }
    `
  ]

  @property({ type: String }) language = 'plaintext'
  @property({ type: String }) info = ''
  @property({ type: String }) content = ''
  @property({ type: Boolean }) wordWrap = true

  // 分发自定义事件
  private clickCopy() {
    this.dispatchEvent(
      new CustomEvent('copy-text', {
        detail: { text: this.content, language: this.language },
        bubbles: true, // 可以冒泡
        composed: true // 允许跨 Shadow DOM
      })
    )
  }

  render() {
    const highlightedCode = hljs.getLanguage(this.language) ? hljs.highlight(this.content, { language: this.language }).value : this.content

    return html`<div class="code-block">
      <div class="code-header">
        <span class="code-lang">${this.info || '未知语言'}</span>
        <span class="code-copy" @click=${this.clickCopy}>复制</span>
      </div>
      <pre class="code-pre"><code class="code-body hljs language-${this.language} ${this.wordWrap ? 'word-wrap' : ''}">${unsafeHTML(
        highlightedCode
      )}</code></pre>
    </div>`
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'ys-code-highlight': YsCodeHighlight
    'ys-code-highlight-render': YsCodeHighlightRender
  }
}
