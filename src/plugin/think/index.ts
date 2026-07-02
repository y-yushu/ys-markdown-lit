import { html, LitElement, unsafeCSS } from 'lit'
import { customElement } from 'lit/decorators.js'
import componentStyles from './index.css?inline'
import type { RuleItem, YsRenderUpdateDetail } from '../../types'
import { setContent } from '../../utils'

@customElement('ys-think')
export default class YsThink extends LitElement {
  private config = {
    name: 'thinking',
    version: '0.1.1'
  }

  static styles = [unsafeCSS(componentStyles)]

  protected firstUpdated() {
    // 注册组件
    this.dataset.register = this.config.name

    // 注册自定义规则
    const rules: RuleItem[] = [
      { name: this.config.name, key: 'think', type: 'fence', startTag: '', endTag: '' },
      { name: this.config.name, key: this.config.name, type: 'fence', startTag: '', endTag: '' },
      { name: this.config.name, key: 'think_1', type: 'block', startTag: '<thinking>', endTag: '</thinking>' },
      { name: this.config.name, key: 'think_2', type: 'block', startTag: '<think>', endTag: '</think>' }
    ]
    const rulestr = JSON.stringify(rules)
    this.dataset.rules = rulestr

    if (this.parentElement) {
      this.parentElement.addEventListener(`${this.config.name}-instance`, this.handleInstance)
      this.parentElement.addEventListener(`${this.config.name}-update`, this.handleUpdate)
    }
  }

  disconnectedCallback() {
    if (this.parentElement) {
      this.parentElement.removeEventListener(`${this.config.name}-instance`, this.handleInstance)
      this.parentElement.removeEventListener(`${this.config.name}-update`, this.handleUpdate)
    }
    super.disconnectedCallback()
  }

  private handleInstance = (event: CustomEvent<YsRenderUpdateDetail>) => {
    setContent(
      event.detail.el,
      html`<div class="ys-think-block">
        <span class="ys-think-content">${event.detail.content}</span>
      </div>`
    )
  }

  private handleUpdate = (event: CustomEvent<YsRenderUpdateDetail>) => {
    setContent(
      event.detail.el,
      html`<div class="ys-think-block">
        <span class="ys-think-content">${event.detail.content}</span>
      </div>`
    )
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ys-think': YsThink
  }
}
