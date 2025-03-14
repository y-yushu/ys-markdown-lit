import { LitElement, html, css, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import katex from 'katex'
import katexcss from 'katex/dist/katex.min.css?inline'

@customElement('widget-katex')
export class WidgetKatex extends LitElement {
  @property({ type: Object }) token

  constructor(token: AstToken) {
    super()
    this.token = token
  }

  render() {
    const content = this.token.node.content || ''

    // 判断解析方式
    if (this.token.node.meta?.isline) {
      // 行内解析
      try {
        const htmlOutput = katex.renderToString(content, {
          throwOnError: false,
          displayMode: false,
          strict: 'ignore'
        })

        return html`<span>${unsafeHTML(htmlOutput)}</span>`
      } catch (error) {
        console.error('KaTeX 渲染错误1:', error)
        // 降级处理
        return html` <span class="katex-error">${content}</span> `
      }
    } else {
      // 块解析
      if (content.includes('\n')) {
        // 处理多行公式 - 使用 aligned 环境

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

          return html`<div>
            <span class="katex-display">${unsafeHTML(htmlOutput)}</span>
          </div>`
        } catch (error) {
          console.error('KaTeX 渲染错误2:', error)
          // 降级处理
          return html`<div>
            <div class="katex-error">
              <p>渲染错误</p>
              <pre>${content}</pre>
            </div>
          </div>`
        }
      } else {
        // 单行公式 - 正常渲染
        try {
          const htmlOutput = katex.renderToString(content, {
            throwOnError: false,
            displayMode: true,
            strict: 'ignore'
          })

          return html`<div>
            <span class="katex-display">${unsafeHTML(htmlOutput)}</span>
          </div>`
        } catch (error) {
          console.error('KaTeX 渲染错误3:', error)

          // 降级处理
          return html`<div>
            <div class="katex-error">
              <pre>${content}</pre>
            </div>
          </div>`
        }
      }
    }
  }

  static styles = [
    unsafeCSS(katexcss),
    css`
      .katex-display {
        display: block;
        text-align: center;
      }
      .katex .tag {
        display: none !important;
      }
      .katex-error {
        color: red;
      }
    `
  ]
}
