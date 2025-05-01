import { LitElement } from 'lit'
import hljs from 'highlight.js/lib/core'
import markdown from 'highlight.js/lib/languages/markdown'
import { customElement } from 'lit/decorators.js'

@customElement('languages-markdown')
export default class LanguagesMarkdown extends LitElement {
  constructor() {
    super()
    hljs.registerLanguage('markdown', markdown)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'languages-markdown': LanguagesMarkdown
  }
}