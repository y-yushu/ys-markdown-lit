import { LitElement } from 'lit'
import hljs from 'highlight.js/lib/core'
import json from 'highlight.js/lib/languages/json'
import { customElement } from 'lit/decorators.js'

@customElement('languages-json')
export default class LanguagesJSON extends LitElement {
  constructor() {
    super()
    hljs.registerLanguage('json', json)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'languages-json': LanguagesJSON
  }
}