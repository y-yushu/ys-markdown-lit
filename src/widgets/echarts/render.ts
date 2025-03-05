import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import tailwindStyles from '../tailwind.css?inline'

@customElement('widget-echarts')
export class WidgetEcharts extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)]

  render() {
    return html`<div class="min-h-12 min-w-12 bg-blue-500 p-4">
      <button>测试===</button>
    </div>`
  }
}
