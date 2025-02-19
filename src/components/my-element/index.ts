import { LitElement, html, unsafeCSS, TemplateResult } from 'lit'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { customElement, property } from 'lit/decorators.js'
import MarkdownIt, { Token } from 'markdown-it'
import tailwindStyles from './index.css?inline'
import { MarkdownStr8 as mstr } from './mock'

@customElement('my-element')
export class MyElement extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)]

  @property({ type: String })
  content = mstr

  // 渲染工具
  md: MarkdownIt

  constructor() {
    super()
    // 初始化渲染器
    this.md = new MarkdownIt()
    this.md.block.ruler.before('fence', 'thinking', this.createThinkRule())
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

      // 检查开始标签
      if (!state.src.startsWith(startTag, startPos)) {
        return false // 如果没有开始标签，直接返回 false
      }

      // 查找结束标签
      let nextLine = startLine
      let found = false
      while (nextLine < endLine) {
        const lineText = state.getLines(nextLine, nextLine + 1, state.tShift[nextLine], false)
        if (lineText.includes(endTag)) {
          found = true
          break
        }
        nextLine++
      }

      if (silent) {
        return true // 在 silent 模式下返回 true，表示可以匹配
      }

      // 创建 thinking_open token
      let token = state.push('thinking_open', 'div', 1)
      token.markup = startTag
      token.block = true

      // 添加内容
      let content = ''
      if (found) {
        // 如果找到结束标签，提取内容
        content = state.src.slice(state.bMarks[startLine] + startTag.length, state.bMarks[nextLine] + state.tShift[nextLine]).replace(/^\n+/, '')
        state.md.inline.parse(content, state.md, state.env, state.tokens)
        // 创建 thinking_close token
        token = state.push('thinking_close', 'div', -1)
        token.markup = endTag
        token.block = true
        // 正常结束
        token.meta = {
          ...token.meta,
          isNormalClose: true
        }
        state.line = nextLine + 1 // 更新当前行
      } else {
        // 如果没有找到结束标签，提取剩余内容
        content = state.src.slice(state.bMarks[startLine] + startTag.length).replace(/^\n+/, '')
        state.md.inline.parse(content, state.md, state.env, state.tokens)
        // 可选：创建一个默认的 thinking_close token
        token = state.push('thinking_close', 'div', -1)
        token.markup = endTag
        token.block = true
        // 异常结束
        token.meta = {
          ...token.meta,
          isNormalClose: false
        }
        state.line = endLine // 更新当前行到文档末尾
      }
      return true
    }
  }

  getAST(): unknown[] {
    const ast: Token[] = this.md.parse(this.content, {})
    // console.log('抽象语法树\n', ast)
    // const htmlOutput = this.md.renderer.render(ast, this.md.options, {})
    // console.log('htmlOutput', htmlOutput)
    const list3 = this.buildNestedAST2(ast)
    console.log('list3333', list3)
    const list4 = this.renderAst3(list3)
    console.log('list4', list4)
    // const oldl = this.renderAst(ast).filter(e => e)
    // console.log('oldl', oldl)
    // return oldl
    return list4
  }

  buildNestedAST2(flatAST: Token[]): AstToken[] {
    const root = {
      node: null,
      end: null,
      children: []
    }
    const stack: AstToken[] = [root]
    for (const node of flatAST) {
      const last = stack.length - 1
      if (node.nesting === 0) {
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

  // 渲染AST
  renderAst(ast: Token[] | null): unknown[] {
    if (!ast) return []

    return ast.map((node: Token) => {
      if (node.type === 'text') {
        return node.content
      } else if (node.type === 'inline') {
        return this.renderAst(node.children)
      } else if (node.type === 'heading_open') {
        return html`<h${node.tag}>${this.renderAst(node.children)}</h${node.tag}>`
      } else if (node.type === 'paragraph_open') {
        return html`<p>${this.renderAst(node.children)}</p>`
      } else if (node.type === 'link_open') {
        const hrefAttr = node.attrs?.find((attr: [string, string]) => attr[0] === 'href')
        if (!hrefAttr) return null
        return html`<a href=${hrefAttr[1]}>${this.renderAst(node.children)}</a>`
      } else {
        // console.log('[type类型未判断]', node.type, node)
      }

      return null
    })
  }

  // 渲染AST3
  renderAst3(asts: AstToken[]): TemplateResult[] {
    const tempList: TemplateResult[] = asts
      .map(ast => {
        const token = ast.node!
        switch (token.type) {
          // 行元素递归解析
          case 'inline':
            return html`${this.rederInline(token.children!)}`
          // 块级元素解析
          case 'heading_open':
            return this.renderHeading(token, this.renderAst3(ast.children))
          case 'paragraph_open':
            return this.renderParagraph(this.renderAst3(ast.children))
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
          // 文字解析
          case 'text':
            return this.renderText(token)
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
  rederInline(ast: Token[]): TemplateResult[] {
    const astToken = this.buildNestedAST2(ast)
    return this.renderAst3(astToken)
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

  renderParagraph(chil: TemplateResult[]): TemplateResult {
    return html`<p>${chil}</p>`
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

  // 渲染文本
  renderText(token: Token): TemplateResult {
    return html`${token.content}`
  }

  // 通过Tag渲染
  renderByTag(token: Token, chil: TemplateResult[]): TemplateResult {
    console.log('token.tag', token.tag)
    return html`<${token.tag}>${chil}</${token.tag}>`
  }

  // 渲染文本标签
  rederText(token: Token): TemplateResult {
    return html`${token.content}`
  }

  render() {
    return html`<div>
      <div class="prose">
        <h1>AST渲染</h1>
        ${this.getAST()}
      </div>
      <hr />
      <div class="prose">
        <h1>默认渲染</h1>
        ${this.getHtml()}
      </div>
    </div> `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}

interface AstToken {
  node: Token | null
  end: Token | null
  children: AstToken[]
  meta?: any
}
