import { LitElement, TemplateResult, html } from 'lit'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { customElement, property } from 'lit/decorators.js'
import hljs from 'highlight.js/lib/core'
import highlightcss from 'highlight.js/styles/atom-one-dark.css?inline'
import YsMdRendering from '../../YsMdRendering'
import { AstToken } from '../../YsMdRendering/registerAllCustomRenderers'
import RegistrationLanguage from './RegistrationLanguage'

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
  // @state() isComplete = false

  // private waitForCompletion(): Promise<void> {
  //   return new Promise(resolve => {
  //     const checkStatus = () => {
  //       if (this.isComplete) {
  //         resolve()
  //       } else {
  //         setTimeout(checkStatus, 50)
  //       }
  //     }
  //     checkStatus()
  //   })
  // }

  private _onMyCustomEvent = (e: CustomEvent) => {
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

  connectedCallback() {
    super.connectedCallback()

    // 触发事件通知主组件
    this.dispatchEvent(
      new CustomEvent('child-register', {
        detail: {
          apply: (instance: YsMdRendering) => {
            instance.renderMethods['fence'] = (ask: AstToken, _chil: TemplateResult[]): TemplateResult => {
              const token = (ask as AstToken).node
              const info = LanguageDict[token.info] || token.info
              const language = info || 'plaintext'

              return html`<ys-code-highlight-render
                .language=${language}
                .info=${info}
                .content=${token.content}
                @copy-text=${this._onMyCustomEvent}
              ></ys-code-highlight-render>`
            }
          },
          feature: '代码高亮',
          styles: highlightcss
        },
        bubbles: true,
        composed: true
      })
    )
  }

  // firstUpdated() {
  //   setTimeout(() => {
  //     this.isComplete = true
  //   }, 0)
  // }

  // render() {
  //   return html`<slot></slot>`
  // }
}

@customElement('ys-code-highlight-render')
export class YsCodeHighlightRender extends LitElement {
  createRenderRoot() {
    return this
  }

  @property({ type: String }) language = 'plaintext'
  @property({ type: String }) info = ''
  @property({ type: String }) content = ''

  // 分发自定义事件
  private _handleClick() {
    const event = new CustomEvent('copy-text', {
      detail: { text: this.content, language: this.language },
      bubbles: true, // 可以冒泡
      composed: true // 允许跨 Shadow DOM
    })

    this.dispatchEvent(event)
  }

  render() {
    const highlightedCode = hljs.getLanguage(this.language) ? hljs.highlight(this.content, { language: this.language }).value : this.content

    return html`
      <div class="mb-4 rounded-lg">
        <div class="sticky top-0 flex h-8 items-center justify-between rounded-t-md bg-gray-700 px-3 text-xs select-none">
          <span class="font-bold text-gray-400">${this.info || '未知语言'}</span>
          <span class="cursor-pointer text-blue-400 active:text-blue-300" @click=${this._handleClick}>复制</span>
        </div>
        <pre class="!m-0 rounded-t-none p-0"><code class="hljs language-${this
          .language} !bg-gray-800" style="white-space: pre-wrap; word-wrap: break-word;">${unsafeHTML(highlightedCode)}</code></pre>
      </div>
    `
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'ys-code-highlight': YsCodeHighlight
    'ys-code-highlight-render': YsCodeHighlightRender
  }
}
