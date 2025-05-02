import { css, html, LitElement, PropertyValues } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import * as echarts from 'echarts'

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
    `
  ]

  @property({ type: String })
  content = ''

  resizeObserver: ResizeObserver | null = null

  protected firstUpdated(_changedProperties: PropertyValues): void {
    const chartDom = this.renderRoot.querySelector('#dom-chart') as HTMLElement
    if (chartDom) {
      // 渲染图表
      const myChart = echarts.init(chartDom)
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
    }
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback()
    this.resizeObserver?.disconnect()
  }

  render() {
    return html`<div id="dom-chart"></div> `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ys-echarts-render': YsEchartsRender
  }
}
