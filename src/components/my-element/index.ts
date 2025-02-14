import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import MarkdownIt from 'markdown-it'
import tailwindStyles from './index.css?inline'
import { MarkdownStr } from './mock'

@customElement('my-element')
export class MyElement extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)]

  @property({ type: String })
  content = MarkdownStr

  constructor() {
    super()
  }

  getAST(): unknown[] {
    const md = new MarkdownIt()
    const ast: MarkdownIt.Token[] = md.parse(this.content, {})
    console.log('抽象语法树\n', ast)
    return this.renderAst(ast)
  }

  // 渲染AST
  renderAst(ast: MarkdownIt.Token[] | null): unknown[] {
    if (!ast) return []

    return ast.map((node: MarkdownIt.Token) => {
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
        console.log('[type类型未判断]', node.type, node)
      }

      return null
    })
  }

  render() {
    return html`<div>${this.getAST()}</div> `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
