import { LitElement } from 'lit'
import hljs from 'highlight.js/lib/core'
import rust from 'highlight.js/lib/languages/rust'
import { customElement } from 'lit/decorators.js'

@customElement('languages-rust')
export default class LanguagesRust extends LitElement {
  constructor() {
    super()
    hljs.registerLanguage('rust', rust)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'languages-rust': LanguagesRust
  }
}