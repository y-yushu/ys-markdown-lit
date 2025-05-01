import { LitElement } from 'lit'
import hljs from 'highlight.js/lib/core'
import lua from 'highlight.js/lib/languages/lua'
import { customElement } from 'lit/decorators.js'

@customElement('languages-lua')
export default class LanguagesLua extends LitElement {
  constructor() {
    super()
    hljs.registerLanguage('lua', lua)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'languages-lua': LanguagesLua
  }
}