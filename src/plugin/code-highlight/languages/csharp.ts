import { LitElement } from 'lit'
import hljs from 'highlight.js/lib/core'
import csharp from 'highlight.js/lib/languages/csharp'
import { customElement } from 'lit/decorators.js'

@customElement('languages-csharp')
export default class LanguagesCSharp extends LitElement {
  constructor() {
    super()
    hljs.registerLanguage('csharp', csharp)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'languages-csharp': LanguagesCSharp
  }
}