// import { LitElement, TemplateResult, css, html, unsafeCSS } from 'lit'
import { LitElement, TemplateResult, html } from 'lit'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
// import { customElement, property, state } from 'lit/decorators.js'
import { customElement, property, state } from 'lit/decorators.js'
import hljs from 'highlight.js/lib/core'
import highlightcss from 'highlight.js/styles/atom-one-dark.css?inline'
// 不执行任何语法高亮
import plaintext from 'highlight.js/lib/languages/plaintext'
// 默认语法支持
import './languages/bash'
import './languages/cpp'
import './languages/csharp'
import './languages/css'
import './languages/dart'
import './languages/go'
import './languages/java'
import './languages/javascript'
import './languages/json'
import './languages/kotlin'
import './languages/lua'
import './languages/markdown'
import './languages/perl'
import './languages/php'
import './languages/powershell'
import './languages/python'
import './languages/r'
import './languages/ruby'
import './languages/rust'
import './languages/scala'
import './languages/sql'
import './languages/swift'
import './languages/typescript'
import './languages/xml'
import './languages/yaml'
import YsMdRendering from '../../YsMdRendering'
import { AstToken } from '../../YsMdRendering/registerAllCustomRenderers'

hljs.registerLanguage('plaintext', plaintext)

// 额外语言字典
const LanguageDict: Record<string, string> = {
  js: 'javascript',
  ts: 'typescript',
  py: 'python',
  html: 'xml',
  'c++': 'cpp',
  'c#': 'csharp',
  SQL: 'sql'
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

  render() {
    return html`<slot name="default-language">
        <languages-bash></languages-bash>
        <languages-cpp></languages-cpp>
        <languages-csharp></languages-csharp>
        <languages-css></languages-css>
        <languages-dart></languages-dart>
        <languages-go></languages-go>
        <languages-java></languages-java>
        <languages-javascript></languages-javascript>
        <languages-json></languages-json>
        <languages-kotlin></languages-kotlin>
        <languages-lua></languages-lua>
        <languages-markdown></languages-markdown>
        <languages-perl></languages-perl>
        <languages-php></languages-php>
        <languages-powershell></languages-powershell>
        <languages-python></languages-python>
        <languages-r></languages-r>
        <languages-ruby></languages-ruby>
        <languages-rust></languages-rust>
        <languages-scala></languages-scala>
        <languages-sql></languages-sql>
        <languages-swift></languages-swift>
        <languages-typescript></languages-typescript>
        <languages-xml></languages-xml>
        <languages-yaml></languages-yaml>
      </slot>
      <slot></slot>`
  }
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
