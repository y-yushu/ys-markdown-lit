import { LitElement, html, render, unsafeCSS, TemplateResult } from 'lit'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { until } from 'lit/directives/until.js'
import { customElement, property, state } from 'lit/decorators.js'
import MarkdownIt, { Token, Options } from 'markdown-it'
import { nanoid } from 'nanoid'
// 异步渲染code
import RegisteredLanguage from '../../utils/RegisteredLanguage'

// 样式
import tailwindStyles from './index.css?inline'
import highlightcss from 'highlight.js/styles/github-dark.css?inline'

interface MdConfig {
  widgets: WidgetConfig[]
  content: string
  mdConfig?: Options
}

@customElement('my-element')
export class MyElement extends LitElement {
  static styles = [unsafeCSS(tailwindStyles), unsafeCSS(highlightcss)]

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

  constructor({ widgets = [], content = '', mdConfig }: MdConfig) {
    super()

    // this.attachShadow({ mode: 'open' })

    // 每次创建都会有一个自己的key
    this.key = nanoid(9)

    // 初始化渲染器
    if (mdConfig) {
      this.md = new MarkdownIt(mdConfig)
    } else {
      this.md = new MarkdownIt({
        html: true
      })
    }

    // 自定义插件
    this.widgets = widgets
    this.widgets.forEach(widget => {
      // 注册md解析渲染规则
      widget.rule(this.md)
      // 注册自定义组件渲染
      if (this.customRules[widget.logotype]) {
        throw new Error(`[自定义组件渲染规则重复] ${widget.logotype}`)
      }
      this.customRules[widget.logotype] = widget.render
    })

    // 渲染内容
    this.content = content
  }

  // 组件首次渲染完成
  protected firstUpdated() {
    console.log('触发firstUpdated')
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

  getHtml() {
    const _html = this.md.render(this.content)
    return html`${unsafeHTML(_html)}`
  }

  getAST(): unknown[] {
    const ast: Token[] = this.md.parse(this.content, {})
    // console.log('抽象树\n', ast)
    const list3 = this.buildNestedAST2(ast, this.key)
    // console.log('渲染树\n', list3)
    const list4 = this.renderAst3(list3)
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
            return this.renderFence(token, ast.key)
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
          default:
            // 判断自定义解析方式
            const _render = this.customRules[token.type]
            if (_render) {
              return _render(ast)
            } else {
              console.error('[未匹配类型]', token.type)
              return html``
            }
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

    return html`<a class="text-blue-500 no-underline active:text-blue-400" href="${href}" target="_blank" rel="noreferrer nofollow noopener">${chil}</a>`
  }

  // 渲染 块代码
  renderFence(token: Token, key: string): TemplateResult {
    // 如果不存在，则创建
    if (!this.copysuccess.hasOwnProperty(key)) {
      this.copysuccess = { ...this.copysuccess, [key]: false }
    }
    // 复制方法
    const copy = () => {
      if (navigator?.clipboard) {
        navigator.clipboard
          .writeText(token.content)
          .then(() => {
            this.copysuccess = { ...this.copysuccess, [key]: true }
            setTimeout(() => {
              this.copysuccess = { ...this.copysuccess, [key]: false }
            }, 1500)
          })
          .catch(err => {
            console.error('复制失败', err)
          })
      } else {
        console.error('[navigator.clipboard.writeText 未匹配]')
      }
    }

    // 3.0
    const language = token.info || 'plaintext'
    return html`
      <div class="rounded-md">
        <div class="sticky top-0 flex h-8 select-none items-center justify-between rounded-t-md bg-gray-700 px-3 text-xs">
          <span class="font-bold text-gray-400">${language}</span>
          ${this.copysuccess[key]
            ? html`<span class="cursor-pointer text-white">复制成功</span>`
            : html`<span class="cursor-pointer text-blue-400 active:text-blue-300" @click=${copy}>复制</span>`}
        </div>
        <div>${until(RegisteredLanguage(language, token.content), html`<pre><code class="language-${token.info}">${token.content}</code></pre>`)}</div>
      </div>
    `
  }

  // 渲染 行代码
  renderCodeInline(token: Token): TemplateResult {
    return html`<span class="mx-1 rounded-md bg-gray-700 px-2 py-0.5 text-white">${token.content}</span>`
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
    return html`<div class="grid grid-cols-2 space-x-4">
      <div class="prose">
        <h1>AST渲染</h1>
        ${this.getAST()}
      </div>
      <div class="prose">
        <h1>默认渲染</h1>
        ${this.getHtml()}
      </div>
    </div> `
    // <widget-think></widget-think>
    // <div class="children-container">${this.childComponents.map(child => html`${child}`)}</div>
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
    'link-click': CustomEvent<LinkClickEventDetail>
  }
}
