import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import MarkdownIt from 'markdown-it'
import tailwindStyles from './index.css?inline'

@customElement('my-element')
export class MyElement extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)]

  @property()
  content = '# Hello world!'

  constructor() {
    super()
  }

  getMod() {
    const md = new MarkdownIt()
    const _html = md.render(this.content)
    return html`${_html}`
  }

  render() {
    return html`<div class="">${this.getMod()}</div> `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
