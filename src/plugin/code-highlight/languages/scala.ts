import { LitElement } from 'lit'
import hljs from 'highlight.js/lib/core'
import scala from 'highlight.js/lib/languages/scala'
import { customElement } from 'lit/decorators.js'

@customElement('languages-scala')
export default class LanguagesScala extends LitElement {
  constructor() {
    super()
    hljs.registerLanguage('scala', scala)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'languages-scala': LanguagesScala
  }
}