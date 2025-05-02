import { css, html, LitElement, TemplateResult } from 'lit'
import { customElement } from 'lit/decorators.js'
import YsMdRendering from '../../YsMdRendering'
import { AstToken } from '../../YsMdRendering/registerAllCustomRenderers'
import { getBlockRule, getInlineRule } from '../../utils/getRule'
import katex from 'katex'
import katexcss from 'katex/dist/katex.min.css?inline'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'

@customElement('ys-katex')
export default class YsKatex extends LitElement {
  private config = {
    name: 'katex',
    version: '0.0.1',
    logotype: 'katex_open'
  }

  connectedCallback() {
    super.connectedCallback()

    // 触发事件通知主组件
    this.dispatchEvent(
      new CustomEvent('child-register', {
        detail: {
          apply: (instance: YsMdRendering) => {
            // 创建块规则
            const _rule1 = getBlockRule({
              startTag: '$$',
              endTag: '$$',
              startToken: this.config.logotype,
              endToken: 'katex_close',
              meta: {
                isline: false // 块解析
              }
            })
            instance.md.block.ruler.before('fence', 'latex_1', _rule1)

            // 创建行规则
            // 处理 `$...$`
            instance.md.inline.ruler.before(
              'escape',
              'latex_2',
              getInlineRule({
                startTag: '$',
                endTag: '$',
                startToken: this.config.logotype,
                meta: { isline: true }
              })
            )
            // 处理`(...)`
            instance.md.inline.ruler.before(
              'escape',
              'latex_3',
              getInlineRule({
                startTag: '\\(',
                endTag: '\\)',
                startToken: this.config.logotype,
                meta: { isline: true }
              })
            )
            // 处理`[]...]`
            instance.md.inline.ruler.before(
              'escape',
              'latex_4',
              getInlineRule({
                startTag: '\\[',
                endTag: '\\]',
                startToken: this.config.logotype,
                meta: { isline: false }
              })
            )

            // 注册渲染方法
            instance.customMethods[this.config.logotype] = (ask: AstToken, _chil: TemplateResult[]): TemplateResult => {
              const token = (ask as AstToken).node
              const content = token.content || ''

              // 判断解析方式
              if (token.meta?.isline) {
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
          },
          feature: '数学公式',
          styles:
            katexcss +
            css`
              .katex .tag {
                display: none;
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
    'ys-katex': YsKatex
  }
}
