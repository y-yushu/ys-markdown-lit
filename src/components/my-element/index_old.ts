import { LitElement, html, render, unsafeCSS, TemplateResult } from 'lit'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { customElement, property } from 'lit/decorators.js'
import MarkdownIt, { Token } from 'markdown-it'
import tailwindStyles from './index.css?inline'
// import { MarkdownStr1 as mstr } from './mock'
// 组件引入
// import '../../widgets/think'

@customElement('my-element')
export class MyElement extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)]

  // 通过参数构建组件
  static createWithData({ widgets }: { widgets: WidgetConfig[] }) {
    const element = document.createElement('my-element') as MyElement
    element.widgets = widgets
    return element
  }

  @property({ type: String })
  content = ''

  // 添加的组件
  @property({ type: Array })
  widgets: WidgetConfig[] = []

  // 渲染工具
  md: MarkdownIt

  // registerWidget(cls: WidgetConfig) {
  //   console.log('cls', cls)
  //   if (cls) {
  //     this.widgets.push(cls)
  //   }
  // }

  constructor() {
    super()
    // 初始化渲染器
    this.md = new MarkdownIt({
      html: true
    })
    this.md.block.ruler.before('fence', 'thinking', this.createThinkRule())
    console.log('this.widgets', this.widgets)
  }

  getHtml() {
    const _html = this.md.render(this.content)
    return html`${unsafeHTML(_html)}`
  }

  // 创建自定义模板
  createThinkRule() {
    return (state: MarkdownIt.StateBlock, startLine: number, endLine: number, silent: boolean) => {
      const startPos = state.bMarks[startLine] + state.tShift[startLine]
      const startTag = '<thinking>'
      const endTag = '</thinking>'

      // 检查是否以 <thinking> 开始
      if (!state.src.startsWith(startTag, startPos)) {
        return false // 如果没有开始标签，直接返回 false
      }

      // 查找结束标签 </thinking>
      let nextLine = startLine
      let endPos = -1
      while (nextLine < endLine) {
        const lineText = state.getLines(nextLine, nextLine + 1, state.tShift[nextLine], false)
        const tagEndIndex = lineText.indexOf(endTag)
        if (tagEndIndex >= 0) {
          endPos = state.bMarks[nextLine] + state.tShift[nextLine] + tagEndIndex
          break
        }
        nextLine++
      }

      // 如果是 silent 模式，直接返回 true，表示可以匹配
      if (silent) return true

      // 创建 thinking_open Token
      let token = state.push('thinking_open', 'div', 1)
      token.markup = startTag
      token.block = true

      // 提取内容（不调用 inline.parse，直接作为纯文本处理）
      const content = state.src.slice(startPos + startTag.length, endPos).trim()
      token.content = content

      // 创建 thinking_close Token
      token = state.push('thinking_close', 'div', -1)
      token.markup = endTag
      token.block = true

      state.line = nextLine + 1
      return true
    }
  }

  getAST(): unknown[] {
    const ast: Token[] = this.md.parse(this.content, {})
    // console.log('抽象语法树\n', ast)
    const list3 = this.buildNestedAST2(ast)
    // console.log('渲染结构', list3)
    const list4 = this.renderAst3(list3)
    // console.log('渲染结果', list4)
    return list4
  }

  buildNestedAST2(flatAST: Token[]): AstToken[] {
    const root = {
      node: null,
      end: null,
      children: []
    }
    const stack: AstToken[] = [root]
    let htmlInline = true // 行标签解析
    for (const node of flatAST) {
      const last = stack.length - 1
      // 行元素特殊处理
      if (node.type === 'inline') {
        stack[last].children.push({
          node: node,
          end: null,
          children: this.buildNestedAST2(node.children || [])
        })
      } else if (node.type === 'html_inline') {
        // 单行html特殊解析
        if (htmlInline) {
          htmlInline = false
          const st = {
            node: node,
            end: null,
            children: []
          }
          stack[last].children.push(st)
          stack.push(st)
        } else {
          htmlInline = true
          stack[last].end = node
          stack.pop()
        }
      } else if (node.nesting === 0) {
        stack[last].children.push({
          node: node,
          end: null,
          children: []
        })
      } else if (node.nesting === 1) {
        const st = {
          node: node,
          end: null,
          children: []
        }
        stack[last].children.push(st)
        stack.push(st)
      } else if (node.nesting === -1) {
        stack[last].end = node
        stack.pop()
      }
    }
    return root.children
  }

  // 渲染AST3
  renderAst3(asts: AstToken[]): TemplateResult[] {
    const tempList: TemplateResult[] = asts
      .map(ast => {
        const token = ast.node!
        switch (token.type) {
          // 行元素递归解析
          case 'inline':
            return this.rederInline(this.renderAst3(ast.children))
          // 块级元素解析
          case 'heading_open':
            return this.renderHeading(token, this.renderAst3(ast.children))
          case 'paragraph_open':
            return this.renderParagraph(token, this.renderAst3(ast.children))
          case 'blockquote_open':
            return this.renderBlockquote(this.renderAst3(ast.children))
          case 'strong_open':
            return this.renderStrong(this.renderAst3(ast.children))
          case 'em_open':
            return this.renderEm(this.renderAst3(ast.children))
          case 's_open':
            return this.renderS(this.renderAst3(ast.children))
          case 'ordered_list_open':
            return this.renderOrderedList(this.renderAst3(ast.children))
          case 'bullet_list_open':
            return this.renderBulletList(this.renderAst3(ast.children))
          case 'list_item_open':
            return this.renderListItem(this.renderAst3(ast.children))
          // table相关解析
          case 'table_open':
            return this.renderTable(this.renderAst3(ast.children))
          case 'thead_open':
            return this.renderThead(this.renderAst3(ast.children))
          case 'tbody_open':
            return this.renderTbody(this.renderAst3(ast.children))
          case 'tr_open':
            return this.renderTr(this.renderAst3(ast.children))
          case 'th_open':
            return this.renderTh(this.renderAst3(ast.children))
          case 'td_open':
            return this.renderTd(this.renderAst3(ast.children))
          // 链接解析
          case 'link_open':
            return this.renderLink(token, this.renderAst3(ast.children))
          // 代码块
          case 'fence':
            return this.renderFence(token)
          case 'code_inline':
            return this.renderCodeInline(token)
          // 水平分隔线
          case 'hr':
            return html`<hr />`
          // 换行
          case 'softbreak':
            return html`<br />`
          // 图片
          case 'image':
            return this.renderImage(token)
          // 文字解析
          case 'text':
            return this.renderText(token)
          // 解析html代码
          case 'html_block':
            return this.renderHtmlBlock(token)
          case 'html_inline':
            return this.renderHtmlInline(token, ast.end!, this.renderAst3(ast.children))
          case 'thinking_open':
            return html`<widget-think></widget-think>`
          default:
            console.error('[未匹配类型]', token.type)
            return html``
        }
      })
      // 过滤空字符
      .filter(e => e !== html``)
    return tempList
  }

  // 渲染行元素
  rederInline(chil: TemplateResult[]): TemplateResult {
    return html`${chil}`
  }

  // 渲染包裹标签
  renderHeading(token: Token, chil: TemplateResult[]): TemplateResult {
    switch (token.tag) {
      case 'h1':
        return html`<h1>${chil}</h1>`
      case 'h2':
        return html`<h2>${chil}</h2>`
      case 'h3':
        return html`<h3>${chil}</h3>`
      case 'h4':
        return html`<h4>${chil}</h4>`
      case 'h5':
        return html`<h5>${chil}</h5>`
      case 'h6':
        return html`<h6>${chil}</h6>`
    }
    console.error('[heading标签解析异常]', token)
    return html``
  }

  renderParagraph(token: Token, chil: TemplateResult[]): TemplateResult {
    if (token.hidden) {
      return html`${chil}`
    } else {
      return html`<p>${chil}</p>`
    }
  }

  renderBlockquote(chil: TemplateResult[]): TemplateResult {
    return html`<blockquote>${chil}</blockquote>`
  }

  renderStrong(chil: TemplateResult[]): TemplateResult {
    return html`<strong>${chil}</strong>`
  }

  renderEm(chil: TemplateResult[]): TemplateResult {
    return html`<em>${chil}</em>`
  }

  renderS(chil: TemplateResult[]): TemplateResult {
    return html`<s>${chil}</s>`
  }

  renderOrderedList(chil: TemplateResult[]): TemplateResult {
    return html`<ol>
      ${chil}
    </ol>`
  }

  renderBulletList(chil: TemplateResult[]): TemplateResult {
    return html`<ul>
      ${chil}
    </ul>`
  }

  renderListItem(chil: TemplateResult[]): TemplateResult {
    return html`<li>${chil}</li>`
  }

  renderTable(chil: TemplateResult[]): TemplateResult {
    return html`<table>
      ${chil}
    </table>`
  }

  renderThead(chil: TemplateResult[]): TemplateResult {
    return html`<thead>
      ${chil}
    </thead>`
  }

  renderTbody(chil: TemplateResult[]): TemplateResult {
    return html`<tbody>
      ${chil}
    </tbody>`
  }

  renderTr(chil: TemplateResult[]): TemplateResult {
    return html`<tr>
      ${chil}
    </tr>`
  }

  renderTh(chil: TemplateResult[]): TemplateResult {
    return html`<th>${chil}</th>`
  }

  renderTd(chil: TemplateResult[]): TemplateResult {
    return html`<td>${chil}</td>`
  }

  // 渲染链接
  renderLink(token: Token, chil: TemplateResult[]): TemplateResult {
    const attrs: Array<[string, string]> | null = token.attrs || []
    const href = attrs.find(attr => attr[0] === 'href')?.[1] || ''
    return html`<a href="${href}" target="_blank" rel="noreferrer nofollow noopener">${chil}</a>`
  }

  // 渲染代码块
  renderFence(token: Token): TemplateResult {
    return html`<pre><code>${token.content}</code></pre>`
  }

  renderCodeInline(token: Token): TemplateResult {
    return html`<code>${token.content}</code>`
  }

  // 渲染图片
  renderImage(token: Token): TemplateResult {
    const attrs: Array<[string, string]> | null = token.attrs || []
    const src = attrs.find(attr => attr[0] === 'src')?.[1] || ''
    const alt = attrs.find(attr => attr[0] === 'alt')?.[1] || ''
    const title = attrs.find(attr => attr[0] === 'title')?.[1] || ''

    // 返回图片的 HTML 模板
    return html`<img src="${src}" alt="${alt}" title="${title}" />`
  }

  // 渲染文本
  renderText(token: Token): TemplateResult {
    return html`${token.content}`
  }

  // 解析html本身
  renderHtmlBlock(token: Token): TemplateResult {
    return html`${unsafeHTML(token.content)}`
  }

  renderHtmlInline(token: Token, end: Token, chil: TemplateResult[]): TemplateResult {
    const middleContent = html`${chil}`
    const container = document.createElement('div')
    render(middleContent, container)
    const middleContentHTML = container.innerHTML
    return html`${unsafeHTML(token.content + middleContentHTML + end?.content)}`
  }

  render() {
    console.log('this.widgets[0]', this.widgets[0].render())
    return html`<div class="grid grid-cols-2 space-x-4">
        <div class="prose">
          <h1>AST渲染</h1>
          ${this.getAST()}
        </div>
        <div class="prose">
          <h1>默认渲染</h1>
          ${this.getHtml()}
        </div>
      </div>
      ${this.widgets[0].render()} `
    // <widget-think></widget-think>
    // <div class="children-container">${this.childComponents.map(child => html`${child}`)}</div>
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element-old': MyElement
  }
}

interface AstToken {
  node: Token | null
  end: Token | null
  children: AstToken[]
  meta?: any
}
