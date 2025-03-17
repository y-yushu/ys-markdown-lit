import { LitElement, html, unsafeCSS } from 'lit'
// import { customElement, property, state } from 'lit/decorators.js'
import { customElement, property } from 'lit/decorators.js'
import tailwindStyles from '../tailwind.css?inline'

@customElement('widget-think')
export class WidgetThink extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)]
  @property({ type: Object }) token

  // @state()
  // isHide: boolean = false

  constructor(token: AstToken) {
    super()
    this.token = token
  }

  render() {
    const content = this.token.node?.content || ''

    return html`
      <div class="border-l-2 border-gray-300 px-4">
        <span class="whitespace-pre-wrap text-sm text-gray-500">${content}</span>
      </div>
    `

    // return html`
    //   <div class="${this.isHide ? 'hidden' : ''}">
    //     <div class="border-l-2 border-gray-300 px-4 py-0">
    //       <span class="whitespace-pre-wrap text-sm text-gray-500">${content}</span>
    //     </div>
    //   </div>
    // `
  }
}
