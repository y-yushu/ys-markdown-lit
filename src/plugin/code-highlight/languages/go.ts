import { LitElement } from 'lit'
import hljs from 'highlight.js/lib/core'
import go from 'highlight.js/lib/languages/go'
import { customElement } from 'lit/decorators.js'

@customElement('languages-go')
export default class LanguagesGo extends LitElement {
  constructor() {
    super()
    hljs.registerLanguage('go', go)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'languages-go': LanguagesGo
  }
}