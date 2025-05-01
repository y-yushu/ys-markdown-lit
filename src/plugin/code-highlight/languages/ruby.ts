import { LitElement } from 'lit'
import hljs from 'highlight.js/lib/core'
import ruby from 'highlight.js/lib/languages/ruby'
import { customElement } from 'lit/decorators.js'

@customElement('languages-ruby')
export default class LanguagesRuby extends LitElement {
  constructor() {
    super()
    hljs.registerLanguage('ruby', ruby)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'languages-ruby': LanguagesRuby
  }
}