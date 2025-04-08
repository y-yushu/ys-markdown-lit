import { LitElement, html, unsafeCSS, TemplateResult } from 'lit'
// import { until } from 'lit/directives/until.js'
import { customElement, property, state } from 'lit/decorators.js'
import MarkdownIt, { Token, Options } from 'markdown-it'
import { nanoid } from 'nanoid'
// // 异步渲染code
// import RegisteredLanguage from '../utils/RegisteredLanguage'

// 样式
import tailwindStyles from './index.css?inline'
// import highlightcss from 'highlight.js/styles/github-dark.css?inline'
import { renderMethods as RenderMethods } from './registerAllCustomRenderers'

interface MdConfig {
  widgets?: WidgetConfig[]
  content?: string
  mdConfig?: Options | null
}

@customElement('ys-md-rendering')
export class YsMdRendering extends LitElement {
  // static styles = [unsafeCSS(tailwindStyles), unsafeCSS(highlightcss)]
  static styles = [unsafeCSS(tailwindStyles)]

  // 组件公用key
  key: String = ''

  @state()
  copysuccess: Record<string, boolean> = {}

  @property({ type: String })
  content = ''

  // 添加的组件
  @property({ type: Array })
  widgets: WidgetConfig[] = []

  // 渲染工具
  md: MarkdownIt

  // 自定义渲染规则
  customRules: Record<string, (t: AstToken) => TemplateResult> = {}

  constructor() {
    super()

    // 每次创建都会有一个自己的key
    this.key = nanoid(9)

    // 初始化渲染器（使用默认配置）
    this.md = new MarkdownIt({
      html: true,
      linkify: false,
      typographer: true
    })

    // 清空其他属性
    this.widgets = []
    this.content = ''
    this.customRules = {}
  }

  // 引用规则函数
  use(ruleFn: (instance: YsMdRendering) => void) {
    ruleFn(this)
    return this
  }

  // 储存自定义解析方法
  customMethods: Map<string, RenderFunction> = new Map()

  // 存储前置解析方法
  frontMethods: Map<string, RenderFunction> = new Map()

  // 存储默认解析方法
  renderMethods: Map<string, RenderFunction> = new Map(Object.entries(RenderMethods))

  // 添加初始化方法
  initialize({ widgets = [], content = '', mdConfig = null }: MdConfig): void {
    // 如果提供了mdConfig，则重新初始化渲染器
    if (mdConfig) {
      this.md = new MarkdownIt(mdConfig)
    }

    // 设置内容
    this.content = content

    // 设置widgets并注册渲染规则
    this.widgets = widgets
    this.setupWidgets()
  }

  // 设置widgets的辅助方法
  private setupWidgets(): void {
    this.widgets.forEach(widget => {
      // 注册md解析渲染规则
      widget.rule(this.md)
      // 注册自定义组件渲染
      if (this.customRules[widget.logotype]) {
        throw new Error(`[自定义组件渲染规则重复] ${widget.logotype}`)
      }
      this.customRules[widget.logotype] = widget.render
    })
  }

  // 添加到 connectedCallback 生命周期方法中
  connectedCallback() {
    super.connectedCallback()

    if (this.shadowRoot) {
      ;(this.shadowRoot as EventTarget).addEventListener('click', this.handleLinkClick.bind(this))
    }
  }

  // 添加到 disconnectedCallback 生命周期方法中清理事件监听
  disconnectedCallback() {
    if (this.shadowRoot) {
      ;(this.shadowRoot as EventTarget).removeEventListener('click', this.handleLinkClick.bind(this))
    }
    super.disconnectedCallback()
  }

  // 添加链接点击处理方法
  private handleLinkClick(e: Event) {
    // 使用类型断言将Event转换为MouseEvent
    const mouseEvent = e as MouseEvent

    // 获取事件路径
    const path = mouseEvent.composedPath()
    const linkElement = path.find(
      element => element instanceof HTMLAnchorElement || (element instanceof HTMLElement && element.tagName === 'A')
    ) as HTMLAnchorElement | null

    if (linkElement) {
      const href = linkElement.getAttribute('href') || ''
      const text = linkElement.textContent || ''

      this.dispatchEvent(
        new CustomEvent('link-click', {
          detail: {
            href,
            text,
            linkElement,
            originalEvent: mouseEvent
          },
          bubbles: true,
          composed: true
        })
      )
    }
  }

  getAST(): unknown[] {
    const ast: Token[] = this.md.parse(this.content, {})
    // console.log('抽象树\n', ast)
    const list3 = this.buildNestedAST2(ast, this.key)
    // console.log('渲染树\n', list3)
    const list4 = this.renderAst4(list3)
    return list4
  }

  /**
   * 一维结构转树状结构
   * @param flatAST 抽象树
   * @param prefix_id id前缀
   * @returns 渲染树
   */
  buildNestedAST2(flatAST: Token[], prefix_key: String = ''): AstToken[] {
    const root = {
      key: 'root',
      node: null,
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
        const customMethod = this.customMethods.get(token.type)
        if (customMethod) {
          return customMethod(ast, this.renderAst4(ast.children))
        }

        // 前置渲染步骤
        const frontMethod = this.frontMethods.get(token.type)
        if (frontMethod) {
          return frontMethod(ast, this.renderAst4(ast.children))
        }

        // 标准渲染步骤
        const renderMethod = this.renderMethods.get(token.type)
        if (renderMethod) {
          return renderMethod(ast, this.renderAst4(ast.children))
        }
      })
      // 过滤空字符
      .filter(e => e !== html``)
    return tempList
  }

  // 渲染 块代码
  // renderFence(token: Token, key: string): TemplateResult {
  //   // 如果不存在，则创建
  //   if (!this.copysuccess.hasOwnProperty(key)) {
  //     this.copysuccess = { ...this.copysuccess, [key]: false }
  //   }
  //   // 复制方法
  //   const copy = () => {
  //     if (navigator?.clipboard) {
  //       navigator.clipboard
  //         .writeText(token.content)
  //         .then(() => {
  //           this.copysuccess = { ...this.copysuccess, [key]: true }
  //           setTimeout(() => {
  //             this.copysuccess = { ...this.copysuccess, [key]: false }
  //           }, 1500)
  //         })
  //         .catch(err => {
  //           console.error('复制失败', err)
  //         })
  //     } else {
  //       console.error('[navigator.clipboard.writeText 未匹配]')
  //     }
  //   }

  //   // 3.0
  //   const language = token.info || 'plaintext'
  //   return html`
  //     <div class="rounded-md">
  //       <div class="sticky top-0 flex h-8 select-none items-center justify-between rounded-t-md bg-gray-700 px-3 text-xs">
  //         <span class="font-bold text-gray-400">${language}</span>
  //         ${this.copysuccess[key]
  //           ? html`<span class="cursor-pointer text-white">复制成功</span>`
  //           : html`<span class="cursor-pointer text-blue-400 active:text-blue-300" @click=${copy}>复制</span>`}
  //       </div>
  //       <div>${until(RegisteredLanguage(language, token.content), html`<pre><code class="language-${token.info}">${token.content}</code></pre>`)}</div>
  //     </div>
  //   `
  // }

  render() {
    return html`<div class="prose">${this.getAST()}</div>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ys-md-rendering': YsMdRendering
    'link-click': CustomEvent<LinkClickEventDetail>
  }
}

// 添加工厂函数，用于创建并初始化 YsMdRendering 实例
export function createMdRendering(config: MdConfig): YsMdRendering {
  // 创建元素实例
  const element = document.createElement('ys-md-rendering') as YsMdRendering

  // 初始化配置
  element.initialize(config)

  // 返回初始化后的实例
  return element
}
