import { LitElement } from 'lit'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import { customElement } from 'lit/decorators.js'

@customElement('languages-javascript')
export default class LanguageJavascript extends LitElement {
  constructor() {
    super()
    hljs.registerLanguage('javascript', javascript)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'languages-javascript': LanguageJavascript
  }
}
