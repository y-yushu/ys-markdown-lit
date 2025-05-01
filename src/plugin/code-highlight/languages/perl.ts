import { LitElement } from 'lit'
import hljs from 'highlight.js/lib/core'
import perl from 'highlight.js/lib/languages/perl'
import { customElement } from 'lit/decorators.js'

@customElement('languages-perl')
export default class LanguagesPerl extends LitElement {
  constructor() {
    super()
    hljs.registerLanguage('perl', perl)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'languages-perl': LanguagesPerl
  }
}