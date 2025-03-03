import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import tailwindStyles from '../tailwind.css?inline'

@customElement('widget-think')
export class WidgetThink extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)]

  @property({ type: String }) widgetId = ''
  @property({ type: String }) widgetVersion = '1.0.0'
  @property({ type: Number }) index = 0

  @property({ type: Function })
  rendesue?: () => void

  addIndex() {
    if (typeof this.rendesue === 'function') {
      console.log('5555')
      this.rendesue()
    }
    this.index++
  }

  render() {
    return html`<div class="min-h-12 min-w-12 bg-blue-500 p-4">
      <button @click=${this.addIndex}>测试${this.index}</button>
    </div>`
  }
}
