import { LitElement, PropertyValues, ReactiveElement, TemplateResult, css, html, unsafeCSS } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { styleMap } from 'lit/directives/style-map.js'
import { provide } from '@lit/context'
import MarkdownIt from 'markdown-it'
import Token from 'markdown-it/lib/token.mjs'
import DefaultFence from 'markdown-it/lib/rules_block/fence'
import tailwindcss from './index.css?inline'
import { RenderFunction, renderMethods } from './registerAllCustomRenderers'
import { generateUUID } from '../utils'
import { BooleanConverter, ObjectConverter } from '../utils/converter'
import { themeContext, ThemeData } from '../utils/context'
import { TailwindVariables } from '../utils/dict'
import { getBlockRule, getInlineRule, RuleOptions } from '../utils/getRule'
import { AstToken, RuleItem, YsRenderUpdateDetail } from '../types'

@customElement('ys-md-rendering')
export default class YsMdRendering extends LitElement {
  @property({ type: String }) content = ''

  // 固定深色模式还是浅色模式
  @property({ type: String }) mode = ''

  // 手动开启深色模式
  @property({ type: Boolean, converter: BooleanConverter }) dark = false

  // 自定义样式属性，支持 CSS 变量覆盖
  @property({
    type: Object,
    attribute: 'custom-styles',
    converter: ObjectConverter,
    hasChanged: (newVal: any, oldVal: any) => {
      return JSON.stringify(newVal) !== JSON.stringify(oldVal)
    }
  })
  customStyles: Record<string, any> = {}

  // 是否识别软换行为换行
  @property({ type: Boolean, converter: BooleanConverter }) breaks = true

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
    this.rewriteRules()
    const mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    this.themeData = { mode }
  }

  // 全部主题风格
  @provide({ context: themeContext })
  @state()
  themeData: ThemeData = {
    mode: 'light'
  }

  // 计算最终的样式对象
  @state()
  private _computedStyles: Record<string, string> = {}

  // 注册模板
  private templates = new Map<string, HTMLElement>()
  // 自动注册代码块
  private autoKey = new Map<string, string>()
  // 缓存 clone 元素
  private cloneMap = new Map<string, HTMLElement>()

  @state()
  private isReady = false

  protected firstUpdated() {
    // 注册子组件
    const slot = this.shadowRoot?.querySelector('slot')
    slot?.addEventListener('slotchange', () => {
      const nodes = slot.assignedElements()
      nodes.forEach(el => {
        const type = el.getAttribute('data-register') || null
        if (type) {
          // 注册模板
          this.templates.set(type, el.cloneNode(true) as HTMLElement)
          // 注册规则
          const rulestr = el.getAttribute('data-rules') || ''
          if (rulestr) {
            // 自定义注册
            this.registrationCustomize(rulestr)
          } else {
            // 快捷注册
            this.registrationQuick(type)
          }
        }
      })
    })

    // 更新 markdown-it 渲染器
    this.setMarkdownIt()
    // 监听 child-register 事件
    this.addEventListener('child-register', this._handleChildRegister)

    // 注册完成 → 开启渲染
    this.isReady = true
  }

  // 方法1：使用 willUpdate 生命周期方法（推荐）
  willUpdate(changedProperties: PropertyValues) {
    if (changedProperties.has('mode')) {
      if (this.mode) {
        this.themeData = {
          mode: this.mode
        }
      }
    }

    // 覆盖prose的css变量
    this.setProseVariables()
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

  // 快捷规则注册
  registrationQuick(type: string) {
    const option: RuleOptions = {
      startTag: `<${type}>`,
      endTag: `</${type}>`,
      startToken: `${type}`,
      endToken: `${type}_end`
    }
    this.registrationRulesByMulti(option)
    // 自动注册代码块
    this.autoKey.set(type, type)
  }

  // 自定义规则注册
  registrationCustomize(rulestr: string) {
    try {
      const rules: RuleItem[] = JSON.parse(rulestr)
      rules.forEach(rule => {
        if (rule.type === 'block') {
          // 注册代码块规则
          this.registrationRulesByMulti({
            key: rule.key,
            startTag: rule.startTag,
            endTag: rule.endTag,
            startToken: rule.name,
            endToken: `${rule.name}_end`,
            meta: rule.meta || null
          })
        } else if (rule.type === 'inline') {
          // 注册转义规则
          this.registrationRulesBySingle({
            key: rule.key,
            startTag: rule.startTag,
            endTag: rule.endTag,
            startToken: rule.name,
            meta: rule.meta || null
          })
        } else if (rule.type === 'fence') {
          // 自动注册代码块
          this.autoKey.set(rule.key, rule.name)
        }
      })
    } catch (err) {
      console.error('自定义规则注册失败:', err)
    }
  }

  // 单行规则注册
  registrationRulesBySingle(option: Omit<RuleOptions, 'endToken'>) {
    const _rule = getInlineRule(option)
    this.md.inline.ruler.before('escape', option.key || option.startToken, _rule)
  }

  // 多行规则注册
  registrationRulesByMulti(option: RuleOptions) {
    const _rule = getBlockRule(option)
    this.md.block.ruler.before('fence', option.key || option.startToken, _rule)
  }

  // 重写markdown-it规则
  rewriteRules() {
    this.md.block.ruler.at('fence', (state, startLine, endLine, silent) => {
      const result = DefaultFence(state, startLine, endLine, silent)
      if (!result) return false

      const token = state.tokens[state.tokens.length - 1]
      if (token.type === 'fence' && token.map) {
        const lastLineIndex = token.map[1] - 1
        const lineText = state.src.slice(state.bMarks[lastLineIndex], state.eMarks[lastLineIndex])
        token.meta = { ...token.meta, isClose: lineText.trim() === '```' }
      }

      return true
    })
  }

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
   * 覆盖tailwindcss变量
   * 识别符合`--tw-prose`开头的那些css变量
   */
  private setProseVariables() {
    const computedStyles = getComputedStyle(this)
    TailwindVariables.forEach(key => {
      if (computedStyles.getPropertyValue(key)) {
        if (this._computedStyles[key] !== computedStyles.getPropertyValue(key)) {
          this._computedStyles[key] = computedStyles.getPropertyValue(key)
        }
      }
    })
  }

  /**
   * 一维结构转树状结构
   * @param flatAST 抽象树
   * @param prefix_id id前缀
   * @returns 渲染树
   */
  _buildNestedAST2(flatAST: Token[], prefix_key: String = ''): AstToken[] {
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
          children: this._buildNestedAST2(node.children || [], key)
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

  // 渲染AST v5
  protected _renderAst5(asts: AstToken[]): TemplateResult[] {
    const tempList: TemplateResult[] = asts
      .map((ast, i) => {
        const token = ast.node

        const customRender = (type: string) => {
          const key = `${ast.key}_${i}`
          let clone: HTMLElement
          if (this.cloneMap.has(key)) {
            // 已缓存 clone
            clone = this.cloneMap.get(key)!
            clone.dataset.content = token.content

            const wasDispatched = clone.dataset.completeDispatched === 'true'
            // 🔹 每次内容变化，触发更新
            if (!wasDispatched) {
              this.dispatchEvent(
                new CustomEvent(`${type}-update`, {
                  detail: {
                    key,
                    el: clone,
                    content: token.content,
                    type: type,
                    iscomplete: ast?.end?.meta?.isClose || false,
                    meta: token.meta || null
                  },
                  bubbles: true,
                  composed: true
                })
              )
            }

            // 完成标识
            let isComplete = false
            // 自定义标签判断标识
            if (ast?.end?.meta?.isClose) isComplete = true
            // fence判断标识
            if (ast.node.type === 'fence' && ast.node.meta?.isClose) isComplete = true
            // 关闭后续监听
            if (isComplete) clone.dataset.completeDispatched = 'true'
          } else {
            const proto = this.templates.get(type)
            // 第一次创建 clone
            clone = proto!.cloneNode(true) as HTMLElement
            clone.dataset.ysInstance = ''
            clone.dataset.ysIndex = String(i)
            clone.dataset.register = type
            clone.dataset.content = token.content

            const styleContent = clone.dataset.style || ''
            if (styleContent) {
              const htmlContent = clone.innerHTML
              const shadow = clone.attachShadow({ mode: 'open' })
              shadow.innerHTML = `<style>${styleContent || ''}</style>${htmlContent}`
              clone.innerHTML = ''
            }

            this.cloneMap.set(key, clone)

            // 🔹 触发创建事件
            setTimeout(() => {
              // 执行创建方法
              this.dispatchEvent(
                new CustomEvent(`${type}-instance`, {
                  detail: {
                    key,
                    el: clone,
                    content: token.content,
                    type: type,
                    iscomplete: false,
                    meta: token.meta || null
                  },
                  bubbles: true,
                  composed: true
                })
              )
              // 完成标识
              let isComplete = false
              // 自定义标签判断标识
              if (ast?.end?.meta?.isClose) {
                isComplete = true
              }
              // fence判断标识
              if (ast.node.type === 'fence' && ast.node.meta?.isClose) {
                isComplete = true
              }
              // 如果已经是完成状态，则直接触发更新事件
              if (isComplete) {
                setTimeout(() => {
                  this.dispatchEvent(
                    new CustomEvent(`${type}-update`, {
                      detail: {
                        key,
                        el: clone,
                        content: token.content,
                        type: type,
                        iscomplete: isComplete,
                        meta: token.meta || null
                      },
                      bubbles: true,
                      composed: true
                    })
                  )
                  clone.dataset.completeDispatched = 'true'
                })
              }
            })
          }

          return clone
        }

        // 1.1 使用外部的渲染方式
        if (this.templates.has(token.type)) {
          return customRender(token.type)
        }

        // 1.2 对代码块渲染做特殊处理
        if (token.type === 'fence' && this.autoKey.has(token.info)) {
          const type = this.autoKey.get(token.info)!
          return customRender(type)
        }

        // 2. 自定义渲染步骤
        const customMethod = this.customMethods[token.type]
        if (customMethod) {
          return customMethod(ast, this._renderAst5(ast.children), {})
        }

        // 3. 标准渲染步骤
        const renderMethod = renderMethods[token.type]
        if (renderMethod) {
          return renderMethod(ast, this._renderAst5(ast.children), {
            style: this.customStyles,
            breaks: this.breaks
          })
        }

        console.warn('未找到渲染方法:', token.type)
        return null
      })
      // 过滤空字符和空html标签
      .filter((e): e is TemplateResult => e !== undefined && e !== html``)
    return tempList
  }

  _getAST(): unknown[] {
    const ast: Token[] = this.md.parse(this.content, {})
    const list3 = this._buildNestedAST2(ast, this.key)
    const list4 = this._renderAst5(list3)
    return list4
  }

  render() {
    if (!this.isReady) {
      return html`<slot></slot>` // 只显示 slot 占位
    }

    const cssMap = {
      prose: true,
      'dark:prose-invert': true, // 默认自动检测
      'prose-invert': false,
      'max-w-full': true
    }

    // 深色模式
    if (this.mode === 'dark') {
      cssMap['dark:prose-invert'] = false // 关闭环境自动判断
      cssMap['prose-invert'] = true // 开启深色模式
    }
    // 浅色模式
    if (this.mode === 'light') {
      cssMap['dark:prose-invert'] = false // 关闭环境自动判断
      cssMap['prose-invert'] = false // 关闭深色模式
    }

    return html`
      <div class=${classMap(cssMap)} style=${styleMap(this._computedStyles)}>${this._getAST()}</div>
      <slot></slot>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ys-md-rendering': YsMdRendering
  }
  interface HTMLElementEventMap {
    'link-click': CustomEvent<{ href: string }>
    'child-register': CustomEvent<{ feature: string }>
    // 组件载入
    [key: `${string}-instance`]: CustomEvent<YsRenderUpdateDetail>
    // 组件更新
    [key: `${string}-update`]: CustomEvent<YsRenderUpdateDetail>
  }
}
