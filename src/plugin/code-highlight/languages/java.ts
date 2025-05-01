import { LitElement } from 'lit'
import hljs from 'highlight.js/lib/core'
import java from 'highlight.js/lib/languages/java'
import { customElement } from 'lit/decorators.js'

@customElement('languages-java')
export default class LanguagesJava extends LitElement {
  constructor() {
    super()
    hljs.registerLanguage('java', java)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'languages-java': LanguagesJava
  }
}
