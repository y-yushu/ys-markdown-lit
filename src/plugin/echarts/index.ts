import { css, html, LitElement, TemplateResult } from 'lit'
import { customElement } from 'lit/decorators.js'
import YsMdRendering from '../../YsMdRendering'
import { getBlockRule } from '../../utils/getRule'
import { AstToken } from '../../YsMdRendering/registerAllCustomRenderers'
import './render'

@customElement('ys-echarts')
export default class YsEcharts extends LitElement {
  private config = {
    name: 'echarts',
    version: '0.0.1',
    logotype: 'echarts_open'
  }

  connectedCallback() {
    super.connectedCallback()

    // 触发事件通知主组件
    this.dispatchEvent(
      new CustomEvent('child-register', {
        detail: {
          apply: (instance: YsMdRendering) => {
            const startTag = '<echarts>'
            const endTag = '</echarts>'
            const startToken = this.config.logotype
            const endToken = 'echarts_close'

            // 创建块规则
            const _rule = getBlockRule({
              startTag: startTag,
              endTag: endTag,
              startToken: startToken,
              endToken: endToken,
              isClosed: false
            })
            instance.md.block.ruler.before('fence', 'echarts', _rule)

            // 注册渲染方法
            instance.customMethods[this.config.logotype] = (ask: AstToken, _chil: TemplateResult[]): TemplateResult => {
              const classNames = 'aspect-video min-h-40 rounded-lg border drop-shadow my-2 border border-dashed border-gray-500'
              const show = ask.end?.meta?.isClose

              return html`<div class="${classNames} flex items-center justify-center">
                ${show ? html`<ys-echarts-render content=${ask.node.content}></ys-echarts-render>` : html`<div class="spinner-5"></div>`}
              </div>`
            }
          },
          feature: 'Echarts图表',
          styles: css`
            .spinner-5 {
              width: 50px;
              height: 50px;
              display: grid;
              border: 4px solid #0000;
              border-radius: 50%;
              border-right-color: #25b09b;
              animation: s5 1s infinite linear;
            }
            .spinner-5::before,
            .spinner-5::after {
              content: '';
              grid-area: 1/1;
              margin: 2px;
              border: inherit;
              border-radius: 50%;
              animation: s5 2s infinite;
            }
            .spinner-5::after {
              margin: 8px;
              animation-duration: 3s;
            }
            @keyframes s5 {
              100% {
                transform: rotate(1turn);
              }
            }
          `.cssText
        },
        bubbles: true,
        composed: true
      })
    )
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ys-echarts': YsEcharts
  }
}
