import { LitElement } from 'lit'
import hljs from 'highlight.js/lib/core'
import php from 'highlight.js/lib/languages/php'
import { customElement } from 'lit/decorators.js'

@customElement('languages-php')
export default class LanguagesPHP extends LitElement {
  constructor() {
    super()
    hljs.registerLanguage('php', php)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'languages-php': LanguagesPHP
  }
}