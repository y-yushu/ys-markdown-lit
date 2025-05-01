import { LitElement } from 'lit'
import hljs from 'highlight.js/lib/core'
import typeScript from 'highlight.js/lib/languages/typeScript'
import { customElement } from 'lit/decorators.js'

@customElement('language-typescript')
export default class LanguageItem extends LitElement {
  constructor() {
    super()
    hljs.registerLanguage('typeScript', typeScript)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'language-typescript': LanguageItem
  }
}
