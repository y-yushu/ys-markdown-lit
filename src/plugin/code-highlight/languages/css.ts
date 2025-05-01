import { LitElement } from 'lit'
import hljs from 'highlight.js/lib/core'
import css from 'highlight.js/lib/languages/css'
import { customElement } from 'lit/decorators.js'

@customElement('languages-css')
export default class LanguagesCSS extends LitElement {
  constructor() {
    super()
    hljs.registerLanguage('css', css)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'languages-css': LanguagesCSS
  }
}