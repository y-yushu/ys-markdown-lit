import { css, html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { consume } from '@lit/context'
import * as echarts from 'echarts'
import { setContent } from '../../utils'
import { themeContext, ThemeData } from '../../utils/context'
// import './render'

@customElement('ys-echarts')
export default class YsEcharts extends LitElement {
  private config = {
    name: 'echarts',
    version: '0.1.1'
  }

  static styles = [
    css`
      .container {
        aspect-ratio: 16 / 9;
        min-height: 10rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.5rem;
        border: 1px dashed #6b7280;
        filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.06));
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
      }

      #dom-chart {
        width: 100%;
        height: 100%;
      }

      .spinner {
        width: 60px;
        height: 60px;
        --clr: rgb(43, 127, 255);
        --clr-alpha: rgb(43, 127, 255, 0.1);
        animation: spinner 1.6s infinite ease;
        transform-style: preserve-3d;
      }

      .spinner > div {
        background-color: var(--clr-alpha);
        height: 100%;
        position: absolute;
        width: 100%;
        border: 3.5px solid var(--clr);
      }

      .spinner div:nth-of-type(1) {
        transform: translateZ(-30px) rotateY(180deg);
      }

      .spinner div:nth-of-type(2) {
        transform: rotateY(-270deg) translateX(50%);
        transform-origin: top right;
      }

      .spinner div:nth-of-type(3) {
        transform: rotateY(270deg) translateX(-50%);
        transform-origin: center left;
      }

      .spinner div:nth-of-type(4) {
        transform: rotateX(90deg) translateY(-50%);
        transform-origin: top center;
      }

      .spinner div:nth-of-type(5) {
        transform: rotateX(-90deg) translateY(50%);
        transform-origin: bottom center;
      }

      .spinner div:nth-of-type(6) {
        transform: translateZ(30px);
      }

      @keyframes spinner {
        0% {
          transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
        }

        50% {
          transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
        }

        100% {
          transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
        }
      }
    `
  ]

  // 使用 @consume 装饰器消费 context 数据
  @consume({ context: themeContext, subscribe: true })
  themeData?: ThemeData

  // 用 Map 存多个实例
  private charts = new Map<string, echarts.ECharts>()
  private observers = new Map<string, ResizeObserver>()

  protected firstUpdated() {
    // 注册组件
    this.dataset.register = this.config.name

    if (this.parentElement) {
      this.parentElement.addEventListener(`${this.config.name}-instance`, this.handleInstance)
      this.parentElement.addEventListener(`${this.config.name}-update`, this.handleUpdate)
    }
  }

  disconnectedCallback() {
    // 清理所有图表和 observer
    this.charts.forEach(chart => chart.dispose())
    this.charts.clear()

    this.observers.forEach(observer => observer.disconnect())
    this.observers.clear()

    if (this.parentElement) {
      this.parentElement.removeEventListener(`${this.config.name}-instance`, this.handleInstance)
      this.parentElement.removeEventListener(`${this.config.name}-update`, this.handleUpdate)
    }
    super.disconnectedCallback()
  }

  private handleInstance(event: CustomEvent) {
    setContent(
      event.detail.el,
      html`
        <div class="container">
          <div class="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      `
    )
  }

  private handleUpdate = (event: CustomEvent) => {
    const key: string = event.detail.key
    try {
      if (event.detail.iscomplete) {
        setContent(
          event.detail.el,
          html`
            <div class="container">
              <div id="dom-chart"></div>
            </div>
          `
        )

        // 查找 shadow 下的容器
        const shadow = (event.detail.el as HTMLElement & { shadowRoot?: ShadowRoot }).shadowRoot
        if (!shadow) throw new Error('shadowRoot not found')
        const dom = shadow.querySelector('#dom-chart') as HTMLDivElement | null
        if (!dom) throw new Error('chart container not found')

        // 如果有旧的，销毁并清理 observer
        if (this.charts.has(key)) {
          this.charts.get(key)!.dispose()
          this.charts.delete(key)
        }
        if (this.observers.has(key)) {
          this.observers.get(key)!.disconnect()
          this.observers.delete(key)
        }

        // 初始化新的 ECharts 实例
        const chart = echarts.init(dom, this.themeData?.mode || 'light')
        this.charts.set(key, chart)

        if (event.detail.content) {
          const option = JSON.parse(event.detail.content)
          chart.setOption(option)

          const onFinished = () => {
            chart.off('finished', onFinished)

            const observer = new ResizeObserver(() => {
              chart.resize()
            })
            observer.observe(dom)
            this.observers.set(key, observer)
          }
          chart.on('finished', onFinished)
        }
      }
    } catch (err) {
      console.error('Echarts 渲染失败:', err)
      setContent(
        event.detail.el,
        html`
          <div class="container">
            <div style="color: #ef4444; font-size: 14px; text-align: center;">图表渲染失败，请检查数据或配置</div>
          </div>
        `
      )
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ys-echarts': YsEcharts
  }
}
