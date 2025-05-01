import { LitElement } from 'lit'
import hljs from 'highlight.js/lib/core'
import r from 'highlight.js/lib/languages/r'
import { customElement } from 'lit/decorators.js'

@customElement('languages-r')
export default class LanguagesR extends LitElement {
  constructor() {
    super()
    hljs.registerLanguage('r', r)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'languages-r': LanguagesR
  }
}