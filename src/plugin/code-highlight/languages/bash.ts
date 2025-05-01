import { LitElement } from 'lit'
import hljs from 'highlight.js/lib/core'
import bash from 'highlight.js/lib/languages/bash'
import { customElement } from 'lit/decorators.js'

@customElement('languages-bash')
export default class LanguagesBash extends LitElement {
  constructor() {
    super()
    hljs.registerLanguage('bash', bash)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'languages-bash': LanguagesBash
  }
}