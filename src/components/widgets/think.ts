import { LitElement, html, unsafeCSS, TemplateResult } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import tailwindStyles from '../my-element/index.css?inline'



@customElement('widget-think')
export class WidgetThink extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)]

  @property({ type: String }) widgetId = ''
  @property({ type: String }) widgetVersion = '1.0.0'
  @property({ type: Number }) index = 0

  addIndex() {
    this.index++
  }

  render(): TemplateResult {
    return html`<div class="min-h-12 min-w-12 bg-blue-500 p-4">
      <button @click=${this.addIndex}>测试${this.index}</button>
    </div>`
  }
}
