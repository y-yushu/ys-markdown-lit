import { LitElement, html, unsafeCSS, TemplateResult } from 'lit'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { customElement, property } from 'lit/decorators.js'
import MarkdownIt, { Token } from 'markdown-it'
import tailwindStyles from './index.css?inline'
import { MarkdownStr4 as mstr } from './mock'

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
    const oldl = this.renderAst(ast).filter(e => e)
    console.log('oldl', oldl)
    return list4
    // return oldl
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
    // if (asts.length) return [html``]
    const tempList: TemplateResult[] = asts
      .map(ast => {
        const token = ast.node!
        switch (token.type) {
          case 'inline':
            return html`${this.rederInline(token.children!)}`
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
          // case 'heading_open':
          // case 'table_open':
          // case 'thead_open':
          // case 'tbody_open':
          // case 'tr_open':
          // case 'th_open':
          // case 'td_open':
          // return this.renderByTag(ast.node!, this.renderAst3(ast.children))
          case 'link_open':
            return this.renderLink(token, this.renderAst3(ast.children))
          case 'code_inline':
            return this.renderCodeInline(token)
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

  renderLink(token: Token, chil: TemplateResult[]): TemplateResult {
    const attrs: Array<[string, string]> | null = token.attrs || []
    const href = attrs.find(attr => attr[0] === 'href')?.[1] || ''
    const target = attrs.find(attr => attr[0] === 'target')?.[1] || '_blank'
    console.log('target---', target)
    return html`<a href="${href}" target="${target}">${chil}</a>`
  }

  // 渲染行内标签
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
      <hr />
      <div class="prose lg:prose-xl">
        <h1>AST渲染</h1>
        ${this.getAST()}
      </div>
      <hr />
      <div class="prose lg:prose-xl">
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
