import { LitElement } from 'lit'
import hljs from 'highlight.js/lib/core'
import powershell from 'highlight.js/lib/languages/powershell'
import { customElement } from 'lit/decorators.js'

@customElement('languages-powershell')
export default class LanguagesPowerShell extends LitElement {
  constructor() {
    super()
    hljs.registerLanguage('powershell', powershell)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'languages-powershell': LanguagesPowerShell
  }
}