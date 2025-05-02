import { html, LitElement, TemplateResult } from 'lit'
import { customElement } from 'lit/decorators.js'
import YsMdRendering from '../../YsMdRendering'
import { getBlockRule } from '../../utils/getRule'
import { AstToken } from '../../YsMdRendering/registerAllCustomRenderers'

@customElement('ys-think')
export default class YsThink extends LitElement {
  private config = {
    name: 'thinking',
    version: '0.0.1',
    logotype: 'thinking_open'
  }

  connectedCallback() {
    super.connectedCallback()

    // 触发事件通知主组件
    this.dispatchEvent(
      new CustomEvent('child-register', {
        detail: {
          apply: (instance: YsMdRendering) => {
            // 创建块规则 1
            instance.md.block.ruler.before(
              'fence',
              'thinking',
              getBlockRule({
                startTag: '<thinking>',
                endTag: '</thinking>',
                startToken: this.config.logotype,
                endToken: 'thinking_close',
                isClosed: false
              })
            )

            // 创建块规则 2
            instance.md.block.ruler.before(
              'fence',
              'thinking',
              getBlockRule({
                startTag: '<think>',
                endTag: '</think>',
                startToken: this.config.logotype,
                endToken: 'thinking_close',
                isClosed: false
              })
            )

            // 注册渲染方法
            instance.customMethods[this.config.logotype] = (ask: AstToken, _chil: TemplateResult[]): TemplateResult => {
              const content = ask.node?.content || ''

              return html`
                <div class="border-l-2 border-solid border-gray-300 px-4">
                  <span class="text-sm whitespace-pre-wrap text-gray-500">${content}</span>
                </div>
              `
            }
          },
          feature: 'Think'
          //   styles: ''
        },
        bubbles: true,
        composed: true
      })
    )
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ys-think': YsThink
  }
}
