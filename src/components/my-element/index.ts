import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import tailwindStyles from './index.css?inline'

@customElement('my-element')
export class MyElement extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)]

  @property()
  content = 'Hello world!'

  constructor() {
    super()
  }

  getMod() {
    return html`
      <div
        class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
      >
        <div>
          <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>
          <p class="text-gray-500 dark:text-gray-400">${this.content}!</p>
        </div>
      </div>
    `
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
