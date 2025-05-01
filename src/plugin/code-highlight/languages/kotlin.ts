import { LitElement } from 'lit'
import hljs from 'highlight.js/lib/core'
import kotlin from 'highlight.js/lib/languages/kotlin'
import { customElement } from 'lit/decorators.js'

@customElement('languages-kotlin')
export default class LanguagesKotlin extends LitElement {
  constructor() {
    super()
    hljs.registerLanguage('kotlin', kotlin)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'languages-kotlin': LanguagesKotlin
  }
}