import { LitElement } from 'lit'
import hljs from 'highlight.js/lib/core'
import yaml from 'highlight.js/lib/languages/yaml'
import { customElement } from 'lit/decorators.js'

@customElement('languages-yaml')
export default class LanguagesYAML extends LitElement {
  constructor() {
    super()
    hljs.registerLanguage('yaml', yaml)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'languages-yaml': LanguagesYAML
  }
}