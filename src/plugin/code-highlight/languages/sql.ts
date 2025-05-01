import { LitElement } from 'lit'
import hljs from 'highlight.js/lib/core'
import sql from 'highlight.js/lib/languages/sql'
import { customElement } from 'lit/decorators.js'

@customElement('languages-sql')
export default class LanguagesSQL extends LitElement {
  constructor() {
    super()
    hljs.registerLanguage('sql', sql)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'languages-sql': LanguagesSQL
  }
}