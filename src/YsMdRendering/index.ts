import { LitElement, TemplateResult, html, unsafeCSS } from 'lit'
// import { customElement, property, state } from 'lit/decorators.js'
import { customElement, property } from 'lit/decorators.js'
// import MarkdownIt, { Options } from 'markdown-it'
import MarkdownIt from 'markdown-it'
import tailwindcss from './index.css?inline'

import { AstToken, RenderFunction, renderMethods } from './registerAllCustomRenderers'
import Token from 'markdown-it/lib/token.mjs'

@customElement('ys-md-rendering')
export default class YsMdRendering extends LitElement {
  static styles = [unsafeCSS(tailwindcss)]

  @property({ type: String })
  content = ''

  connectedCallback() {
    super.connectedCallback()
    // 监听 child-register 事件
    this.addEventListener('child-register', this._handleChildRegister)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.removeEventListener('child-register', this._handleChildRegister)
  }

  // 存储前置解析方法
  frontMethods: Record<string, RenderFunction> = {}

  // 存储默认解析方法
  renderMethods: Record<string, RenderFunction> = renderMethods

  // 自定义渲染规则
  customMethods: Record<string, RenderFunction> = {}

  private _handleChildRegister(e: CustomEvent) {
    const feature = e.detail.feature
    console.log('注册功能:', feature)
    const styles = e.detail.styles
    if (styles) {
      const styleElement = document.createElement('style')
      styleElement.textContent = styles
      this.shadowRoot?.appendChild(styleElement)
    }
    e.detail.apply(this)
  }

  /**
   * 一维结构转树状结构
   * @param flatAST 抽象树
   * @param prefix_id id前缀
   * @returns 渲染树
   */
  buildNestedAST2(flatAST: Token[], prefix_key: String = ''): AstToken[] {
    const emptyToken = new Token('', '', 0)
    const root: AstToken = {
      key: 'root',
      node: emptyToken,
      end: null,
      children: []
    }
    const stack: AstToken[] = [root]
    let htmlInline = true // 行标签解析
    for (const [index, node] of flatAST.entries()) {
      const last = stack.length - 1
      // 行元素特殊处理
      if (node.type === 'inline') {
        const key = `${prefix_key}_${index}`
        stack[last].children.push({
          key: key,
          node: node,
          end: null,
          children: this.buildNestedAST2(node.children || [], key)
        })
      } else if (node.type === 'html_inline') {
        // 单行html特殊解析
        if (htmlInline) {
          htmlInline = false
          const st = {
            key: `${prefix_key}_${index}`,
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
          key: `${prefix_key}_${index}`,
          node: node,
          end: null,
          children: []
        })
      } else if (node.nesting === 1) {
        const st = {
          key: `${prefix_key}_${index}`,
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

  // 渲染AST v4
  renderAst4(asts: AstToken[]): TemplateResult[] {
    const tempList: TemplateResult[] = asts
      .map(ast => {
        const token = ast.node

        // 自定义渲染步骤
        // const customMethod = this.customMethods.get(token.type)
        const customMethod = this.customMethods[token.type]
        if (customMethod) {
          return customMethod(ast, this.renderAst4(ast.children))
        }

        // 前置渲染步骤
        const frontMethod = this.frontMethods[token.type]
        if (frontMethod) {
          return frontMethod(ast, this.renderAst4(ast.children))
        }

        // 标准渲染步骤
        const renderMethod = this.renderMethods[token.type]
        if (renderMethod) {
          return renderMethod(ast, this.renderAst4(ast.children))
        }
      })
      // 过滤空字符和空html标签
      .filter((e): e is TemplateResult => e !== undefined && e !== html``)
    return tempList
  }

  key = '123456'
  // 渲染工具
  md: MarkdownIt

  constructor() {
    super()
    this.md = new MarkdownIt({
      html: true,
      linkify: false,
      typographer: true
    })
  }

  getAST(): unknown[] {
    const ast: Token[] = this.md.parse(this.content, {})
    const list3 = this.buildNestedAST2(ast, this.key)
    const list4 = this.renderAst4(list3)
    return list4
  }

  render() {
    return html`
      <div class="prose max-w-full">${this.getAST()}</div>
      <slot></slot>
    `
  }

  //   updated() {
  //     console.log('触发更新')
  //   }
}

declare global {
  interface HTMLElementTagNameMap {
    'ys-md-rendering': YsMdRendering
  }
  interface HTMLElementEventMap {
    // 'count-changed': CustomEvent<{ count: number }>
    'child-register': CustomEvent<{ feature: string }>
  }
}
