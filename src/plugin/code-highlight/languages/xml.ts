import { LitElement } from 'lit'
import hljs from 'highlight.js/lib/core'
import xml from 'highlight.js/lib/languages/xml' // HTML is handled by the XML language in highlight.js
import { customElement } from 'lit/decorators.js'

@customElement('languages-xml')
export default class LanguagesXml extends LitElement {
  constructor() {
    super()
    hljs.registerLanguage('xml', xml)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'languages-xml': LanguagesXml
  }
}