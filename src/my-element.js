import { LitElement, html, unsafeCSS } from 'lit'
import tailwindStyles from './index.css?inline'

export class MyElement extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)]

  static get properties() {
    return {}
  }

  constructor() {
    super()
    this.docsHint = 'Click on the Vite and Lit logos to learn more'
    this.count = 0
  }

  getMod() {
    return html`
      <div
        class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
      >
        <div>
          <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>
          <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>
        </div>
      </div>
    `
  }

  render() {
    return html`<h1 class="text-3xl font-bold text-red-400 underline">Hello world!</h1>
      ${this.getMod()} `
  }
}

window.customElements.define('my-element', MyElement)
