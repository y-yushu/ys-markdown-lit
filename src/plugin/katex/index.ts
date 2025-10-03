import { css, html, LitElement, unsafeCSS } from 'lit'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { customElement } from 'lit/decorators.js'
import katex from 'katex'
import katexcss from 'katex/dist/katex.min.css?inline'
import { RuleItem, YsRenderUpdateDetail } from '../../types'
import { setContent } from '../../utils'

@customElement('ys-katex')
export default class YsKatex extends LitElement {
  private config = {
    name: 'katex',
    version: '0.0.1'
  }

  static styles = [
    unsafeCSS(katexcss),
    css`
      .katex .tag {
        display: none;
      }
    `
  ]

  protected firstUpdated() {
    // 注册组件
    this.dataset.register = this.config.name

    // 注册组件规则
    const rules: RuleItem[] = [
      { name: 'katex', key: 'katex_1', type: 'block', startTag: '$$', endTag: '$$', meta: { isline: false } },
      { name: 'katex', key: 'katex_2', type: 'inline', startTag: '$', endTag: '$', meta: { isline: true } },
      { name: 'katex', key: 'katex_3', type: 'inline', startTag: '\\(', endTag: '\\)', meta: { isline: true } },
      { name: 'katex', key: 'katex_4', type: 'inline', startTag: '\\[', endTag: '\\]', meta: { isline: false } }
    ]
    const rulestr = JSON.stringify(rules)
    this.dataset.rules = rulestr

    if (this.parentElement) {
      this.parentElement.addEventListener(`${this.config.name}-instance`, this.handleUpdate)
      this.parentElement.addEventListener(`${this.config.name}-update`, this.handleUpdate)
    }
  }

  disconnectedCallback() {
    if (this.parentElement) {
      this.parentElement.removeEventListener(`${this.config.name}-instance`, this.handleUpdate)
      this.parentElement.removeEventListener(`${this.config.name}-update`, this.handleUpdate)
    }
    super.disconnectedCallback()
  }

  private handleUpdate = (event: CustomEvent<YsRenderUpdateDetail>) => {
    const meta = event.detail.meta as { isline: boolean }
    const content = event.detail.content

    // 判断解析方式
    if (meta?.isline) {
      // 行内解析
      try {
        const htmlOutput = katex.renderToString(content, {
          throwOnError: false,
          displayMode: false,
          strict: 'ignore'
        })
        setContent(event.detail.el, html`<span>${unsafeHTML(htmlOutput)}</span>`)
      } catch (error) {
        console.error('KaTeX 渲染错误1:', error)
        // 降级处理
        setContent(event.detail.el, html` <span class="katex-error">${content}</span> `)
      }
    } else {
      // 块解析
      if (content.includes('\n')) {
        // 分割并过滤空行
        const lines = content
          .split('\n')
          .map((line: string) => line.trim())
          .filter((line: string) => line !== '')

        // 检查内容是否已经有数学环境
        const hasEnvironment = /\\begin\{|\\end\{/.test(content)

        let processedContent
        if (hasEnvironment) {
          // 如果已经有环境，保持原样但替换换行
          processedContent = content.replace(/\n/g, ' \\\\ ')
        } else {
          // 如果需要，对每一行进行处理
          // 例如检查是否每行都应该对齐（含有 = 符号）
          const hasEquations = lines.some((line: string) => line.includes('='))

          if (hasEquations) {
            // 对齐方程式 - 使用 aligned 环境
            processedContent = '\\begin{aligned}\n' + lines.join(' \\\\\n') + '\n\\end{aligned}'
          } else {
            // 普通多行内容 - 使用 array 环境或简单地添加换行
            processedContent = lines.join(' \\\\ ')
          }
        }

        try {
          const htmlOutput = katex.renderToString(processedContent, {
            throwOnError: false,
            displayMode: true,
            strict: 'ignore'
          })

          setContent(
            event.detail.el,
            html`<div>
              <span class="katex-display">${unsafeHTML(htmlOutput)}</span>
            </div>`
          )
        } catch (error) {
          console.error('KaTeX 渲染错误2:', error)
          // 降级处理
          setContent(
            event.detail.el,
            html`<div>
              <div class="katex-error">
                <p>渲染错误</p>
                <pre>${content}</pre>
              </div>
            </div>`
          )
        }
      } else {
        // 单行公式 - 正常渲染
        try {
          const htmlOutput = katex.renderToString(content, {
            throwOnError: false,
            displayMode: true,
            strict: 'ignore'
          })

          setContent(
            event.detail.el,
            html`<div>
              <span class="katex-display">${unsafeHTML(htmlOutput)}</span>
            </div>`
          )
        } catch (error) {
          console.error('KaTeX 渲染错误3:', error)
          // 降级处理
          setContent(
            event.detail.el,
            html`<div>
              <div class="katex-error">
                <pre>${content}</pre>
              </div>
            </div>`
          )
        }
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ys-katex': YsKatex
  }
}
