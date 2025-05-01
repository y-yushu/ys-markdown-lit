import { LitElement } from 'lit'
import hljs from 'highlight.js/lib/core'
import dart from 'highlight.js/lib/languages/dart'
import { customElement } from 'lit/decorators.js'

@customElement('languages-dart')
export default class LanguagesDart extends LitElement {
  constructor() {
    super()
    hljs.registerLanguage('dart', dart)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'languages-dart': LanguagesDart
  }
}