import { css, html, LitElement, PropertyValues } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { consume } from '@lit/context'
import * as echarts from 'echarts'
import { themeContext, ThemeData } from '../../utils/context'

@customElement('ys-echarts-render')
export default class YsEchartsRender extends LitElement {
  static styles = [
    css`
      :host {
        width: 100%;
        height: 100%;
      }
      #dom-chart {
        width: 100%;
        height: 100%;
      }
      .is-error {
        width: 100%;
        height: 100%;
        font-family: system-ui, sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #f8f8f8;
      }
      .error-container {
        text-align: center;
        background: #fff;
        padding: 40px;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
      .error-icon {
        font-size: 48px;
        color: #ff4d4f;
        margin-bottom: 16px;
      }
      .error-title {
        font-size: 20px;
        margin-bottom: 8px;
        color: #333;
      }
      .error-message {
        font-size: 14px;
        color: #666;
        margin-bottom: 20px;
      }
      .retry-button {
        padding: 8px 20px;
        font-size: 14px;
        background-color: #1890ff;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
      .retry-button:hover {
        background-color: #40a9ff;
      }
    `
  ]

  @property({ type: String }) content = ''

  @state() isError: Boolean = false

  // 使用 @consume 装饰器消费 context 数据
  @consume({ context: themeContext, subscribe: true })
  themeData?: ThemeData

  resizeObserver: ResizeObserver | null = null

  protected firstUpdated(_changedProperties: PropertyValues): void {
    const chartDom = this.renderRoot.querySelector('#dom-chart') as HTMLElement
    if (chartDom) {
      try {
        // 渲染图表
        const myChart = echarts.init(chartDom, this.themeData?.mode || 'light')
        if (this.content) {
          const option = JSON.parse(this.content)
          myChart.setOption(option)
        }

        // 标志位，确保只触发一次
        let isFirstAnimation = true
        // 定义动画完成的回调函数
        const onFinished = () => {
          if (isFirstAnimation) {
            isFirstAnimation = false
            // 移除对 finished 事件的监听
            myChart.off('finished', onFinished)
            // 在这里添加 ResizeObserver 或其他逻辑
            this.resizeObserver = new ResizeObserver(() => {
              myChart.resize()
            })
            this.resizeObserver.observe(chartDom)
          }
        }
        // 监听 ECharts 动画完成事件
        myChart.on('finished', onFinished)
      } catch (err) {
        console.error('[echarts图表渲染异常]', err)
        this.isError = true
      }
    }
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback()
    this.resizeObserver?.disconnect()
  }

  render() {
    if (this.isError) {
      return html`<div class="is-error">
        <div class="error-icon">⚠️</div>
        <div class="error-title">图表渲染失败</div>
        <div class="error-message">很抱歉，ECharts 图表未能成功加载。</div>
      </div>`
    } else {
      return html`<div id="dom-chart"></div>`
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ys-echarts-render': YsEchartsRender
  }
}
