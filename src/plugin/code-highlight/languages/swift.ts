import { LitElement } from 'lit'
import hljs from 'highlight.js/lib/core'
import swift from 'highlight.js/lib/languages/swift'
import { customElement } from 'lit/decorators.js'

@customElement('languages-swift')
export default class LanguagesSwift extends LitElement {
  constructor() {
    super()
    hljs.registerLanguage('swift', swift)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'languages-swift': LanguagesSwift
  }
}