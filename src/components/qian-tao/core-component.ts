import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('core-component')
export class CoreComponent extends LitElement {
  @property({ type: Array }) widgets: string[] = []

  constructor() {
    super()
    this.connectedCallback()
  }

  async connectedCallback() {
    super.connectedCallback()
    if (this.widgets) {
      for (let i = 0; i < this.widgets.length; i++) {
        await this.loadWidget(this.widgets[i])
      }
    }
  }

  async loadWidget(path: string) {
    try {
      const module = await import(/* @vite-ignore */ path)
      const WidgetClass = module.default
      customElements.define('widget-think', WidgetClass)
    } catch (error) {
      console.error('Failed to load widget:', error)
    }
  }

  render() {
    return html` <div class="widget-container">你好</div> `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'core-component': CoreComponent
  }
}
