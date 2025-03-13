import { LitElement, html, css, unsafeCSS, PropertyValues } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import tailwindStyles from '../tailwind.css?inline'
import * as echarts from 'echarts'

@customElement('widget-echarts')
export class WidgetEcharts extends LitElement {
  @property({ type: Object }) token

  // 是否加载loading
  isloading: boolean = false

  private myChart: echarts.ECharts | null = null
  private resizeObserver: ResizeObserver | null = null

  constructor(token: AstToken) {
    super()
    this.token = token
  }

  // 当 token 变化时触发更新图表
  protected updated(changedProperties: PropertyValues) {
    super.updated(changedProperties)
    if (changedProperties.has('token')) {
      const token = changedProperties.get('token')
      if (!token) return
      const _isClose = token?.end?.meta?.isClose
      if (_isClose) {
        this.initChat()
      }
    }
  }

  render() {
    const classNames = 'aspect-video min-h-40 rounded-lg border border-green-300 drop-shadow'

    const show = this.token?.end?.meta?.isClose

    return html`<div class="${classNames} flex items-center justify-center">
      ${show ? html`<div id="dom-chart" class="h-full w-full"></div>` : html`<div class="spinner-5"></div>`}
    </div>`
  }

  protected firstUpdated() {
    this.initChat()
  }

  private initChat() {
    // 判断元素是否存在
    const dom = this.shadowRoot?.getElementById('dom-chart')
    if (!dom) return

    // 如果已加载，则不重复加载
    if (this.isloading) return
    this.isloading = true

    // 进行chart渲染
    this.myChart = echarts.init(dom)
    if (!this.myChart) return
    const content = this.token.node?.content || '{}'
    const json = JSON.parse(content)
    this.myChart.setOption(json)
    console.log('首次渲染')

    // 创建完成监听
    const finished = () => {
      console.log('创建监听宽度监听')

      this.myChart?.off('finished', finished)
      // 初始化 ResizeObserver
      this.resizeObserver = new ResizeObserver(() => {
        if (this.myChart) {
          this.myChart.resize()
        }
      })

      // 开始监听 dom 元素的尺寸变化
      this.resizeObserver.observe(dom)
    }

    this.myChart.on('finished', finished)
  }

  /**
   * 组件销毁
   */
  disconnectedCallback() {
    super.disconnectedCallback()
    // 断开 ResizeObserver 的监听
    if (this.resizeObserver) {
      this.resizeObserver.disconnect()
    }
  }

  static styles = [
    unsafeCSS(tailwindStyles),
    css`
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
    `
  ]
}
