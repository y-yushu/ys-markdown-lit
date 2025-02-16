import { LitElement, html, unsafeCSS, TemplateResult } from 'lit'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { customElement, property } from 'lit/decorators.js'
import MarkdownIt, { Token } from 'markdown-it'
import tailwindStyles from './index.css?inline'
import { MarkdownStr2 as mstr } from './mock'

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
    console.log('抽象语法树\n', ast)
    const list2 = this.buildNestedAST(ast)
    console.log('list2', list2)
    return this.renderAst(ast)
  }

  // ast转树状结构
  buildNestedAST(flatAST: Token[]): Token[] {
    const root = { type: 'root', children: [] }
    const stack: any[] = [root]

    for (const node of flatAST) {
      const currentLevel = stack.length - 1 // 当前层级

      if (node.nesting === 0) {
        stack[currentLevel].children.push(node)
      } else if (node.nesting === 1) {
        stack[currentLevel].children.push(node)
        node.children = node.children || []
        stack.push(node)
      } else if (node.nesting === -1) {
        node.children = node.children || []
        stack.pop()
        stack[currentLevel - 1].children.push(node)
      }
    }
    console.log('root.children', root.children)
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

  // 开始尝试制作渲染
  renderAst2(ast: Token[]): TemplateResult[] {
    const temps = ast
      .map(node => {
        if (node.type === 'text') {
          return this.rederText(node)
        }
        return html``
      })
      .filter(e => e !== html``)
    return temps
  }

  // 渲染行元素
  rederInline(ast: Token[]): TemplateResult[] {
    return ast
      .map(node => {
        if (node.type === 'text') return this.rederText(node)
        return html``
      })
      .filter(e => e !== html``)
  }

  // 渲染文本标签
  rederText(token: Token): TemplateResult {
    return html`${token.content}`
  }

  render() {
    return html`<div>
      <hr />
      <h1>AST渲染</h1>
      ${this.getAST()}
      <hr />
      <h1>默认渲染</h1>
      ${this.getHtml()}
    </div> `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
