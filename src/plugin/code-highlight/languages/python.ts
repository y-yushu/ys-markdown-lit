import { LitElement } from 'lit'
import hljs from 'highlight.js/lib/core'
import python from 'highlight.js/lib/languages/python'
import { customElement } from 'lit/decorators.js'

@customElement('languages-python')
export default class LanguagesPython extends LitElement {
  constructor() {
    super()
    hljs.registerLanguage('python', python)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'languages-python': LanguagesPython
  }
}
