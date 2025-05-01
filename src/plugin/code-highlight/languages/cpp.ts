import { LitElement } from 'lit'
import hljs from 'highlight.js/lib/core'
import cpp from 'highlight.js/lib/languages/cpp'
import { customElement } from 'lit/decorators.js'

@customElement('languages-cpp')
export default class LanguagesCpp extends LitElement {
  constructor() {
    super()
    hljs.registerLanguage('cpp', cpp)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'languages-cpp': LanguagesCpp
  }
}