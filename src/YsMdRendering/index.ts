import { LitElement, ReactiveElement, TemplateResult, css, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import MarkdownIt from 'markdown-it'
import tailwindcss from './index.css?inline'
import { AstToken, RenderFunction, renderMethods } from './registerAllCustomRenderers'
import Token from 'markdown-it/lib/token.mjs'
import { generateUUID } from '../utils/generateUUID'
import { BooleanConverter } from '../utils/converter'

@customElement('ys-md-rendering')
export default class YsMdRendering extends LitElement {
  // 手动开启深色模式
  @property({ type: Boolean, converter: BooleanConverter }) dark = false

  static styles = [
    unsafeCSS(tailwindcss),
    css`
      :host {
        --rem-size: 1rem;
        display: block;
        max-width: 100%;
      }
      .prose {
        font-size: var(--rem-size);
      }
    `
  ]

  key = generateUUID()
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

  @property({ type: String }) content = ''

  connectedCallback() {
    super.connectedCallback()
    this.setMarkdownIt()
    // 监听 child-register 事件
    this.addEventListener('child-register', this._handleChildRegister)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.removeEventListener('child-register', this._handleChildRegister)
  }

  // 修改markdown-it渲染器的配置
  setMarkdownIt() {
    Array.from(this.attributes as ArrayLike<Attr>).forEach((attr: Attr) => {
      if (attr.name.startsWith('md-')) {
        // 移除 md- 前缀并转换为配置键
        const key: string = attr.name.substring(3)

        // 获取原始值
        let value: string | boolean | number = attr.value

        // 首先检查是否为布尔值
        if (value === 'true') {
          value = true
        } else if (value === 'false') {
          value = false
        }
        // 只有当值不是布尔值时才尝试转换为数字
        else if (!isNaN(Number(value)) && value !== '') {
          value = Number(value)
        }

        // 改变markdown的渲染属性
        this.md.set({ [key]: value })
      }
    })
  }

  // 存储默认解析方法
  renderMethods = Object.assign({}, renderMethods)

  // 自定义渲染规则
  customMethods: Record<string, RenderFunction> = {}

  private _handleChildRegister(e: CustomEvent) {
    const isDevMode = !!ReactiveElement.disableWarning
    if (isDevMode) {
      const feature = e.detail.feature
      console.log('注册功能:', feature)
    }
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
        const customMethod = this.customMethods[token.type]
        if (customMethod) {
          return customMethod(ast, this.renderAst4(ast.children))
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

  getAST(): unknown[] {
    const ast: Token[] = this.md.parse(this.content, {})
    const list3 = this.buildNestedAST2(ast, this.key)
    const list4 = this.renderAst4(list3)
    return list4
  }

  render() {
    const cssMap = {
      prose: true,
      'dark:prose-invert': false,
      'prose-invert': false,
      'max-w-full': true
    }

    // 手动开启深色模式
    if (this.dark) {
      cssMap['prose-invert'] = true
    }
    // 自动开始深色模式
    else {
      cssMap['dark:prose-invert'] = true
    }

    return html`
      <div class=${classMap(cssMap)}>${this.getAST()}</div>
      <slot></slot>
    `
  }
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
