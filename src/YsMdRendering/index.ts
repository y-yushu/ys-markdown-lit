import { LitElement, ReactiveElement, css, html, unsafeCSS } from 'lit'
import type { PropertyValues, TemplateResult } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { provide } from '@lit/context'
import MarkdownIt from 'markdown-it'
import { mark } from '@mdit/plugin-mark'
import Token from 'markdown-it/lib/token.mjs'
import componentStyles from './index.css?inline'
import { renderMethods } from './registerAllCustomRenderers'
import type { RenderFunction } from './registerAllCustomRenderers'
import { generateUUID } from '../utils'
import { BooleanConverter, ObjectConverter } from '../utils/converter'
import { themeContext } from '../utils/context'
import type { ThemeData } from '../utils/context'
import { getBlockRule, getInlineRule } from '../utils/getRule'
import type { RuleOptions } from '../utils/getRule'
import type { AstToken, RuleItem, YsRenderUpdateDetail } from '../types'

type MarkdownDensity = 'streaming' | 'compact'
type MarkdownAppearance = 'blue'

type ThemeStyleModule = {
  default: string
}

const densityStyleLoaders: Record<MarkdownDensity, () => Promise<ThemeStyleModule>> = {
  streaming: () => import('./themes/density/streaming.css?inline'),
  compact: () => import('./themes/density/compact.css?inline')
}

const appearanceStyleLoaders: Record<MarkdownAppearance, () => Promise<ThemeStyleModule>> = {
  blue: () => import('./themes/appearance/blue.css?inline')
}

const densityStyleCache: Partial<Record<MarkdownDensity, string>> = {}
const appearanceStyleCache: Partial<Record<MarkdownAppearance, string>> = {}

@customElement('ys-md-rendering')
export default class YsMdRendering extends LitElement {
  @property({ type: String }) content = ''

  // 排版密度：streaming 流式阅读 / compact 紧凑均匀
  @property({ type: String }) density: MarkdownDensity = 'streaming'

  // 外观色板：当前仅保留 blue
  @property({ type: String }) appearance: MarkdownAppearance = 'blue'

  // 基础字号大小，默认 16 表示 16px
  @property({ type: Number }) size = 16

  // 固定深色模式还是浅色模式
  @property({ type: String }) mode = ''

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

  // 自定义 CSS 文本，注入当前组件的 Shadow Root
  @property({ type: String, attribute: 'custom-css' })
  customCss = ''

  // 是否识别软换行为换行
  @property({ type: Boolean, converter: BooleanConverter }) breaks = true

  static styles = [
    unsafeCSS(componentStyles),
    css`
      :host {
        --rem-size: 1rem;
        display: block;
        max-width: 100%;
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
    }).use(mark)
    this.rewriteRules()
  }

  // 全部主题风格
  @provide({ context: themeContext })
  @state()
  themeData: ThemeData = {
    mode: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  // 注册模板
  private templates = new Map<string, HTMLElement>()
  // 自动注册代码块
  private autoKey = new Map<string, string>()
  // 缓存 clone 元素
  private cloneMap = new Map<string, HTMLElement>()
  private densityStyleRequestId = 0
  private appearanceStyleRequestId = 0

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
      const nextMode = this.resolvedMode
      if (this.themeData.mode !== nextMode) {
        this.themeData = { mode: nextMode }
      }
    }
  }

  protected updated() {
    this.syncSizeStyle()
    this.syncThemeStyle()
    this.syncCustomCssStyle()
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
    // 插入一个规则到 inline 阶段
    const colorPattern = /^#([0-9a-fA-F]{3,8})\b/
    this.md.inline.ruler.push('color', (state, silent) => {
      const src = state.src.slice(state.pos)
      const match = src.match(colorPattern)
      if (!match) return false

      const color = match[0]

      // 防止误判：确认这是合法颜色字符串（#fff 或 #ffffff 等）
      if (!/^#[0-9a-fA-F]{3,8}$/.test(color)) return false

      if (!silent) {
        const token = state.push('color', 'span', 0)
        token.attrPush(['style', `color: ${color};`])
        token.content = color
      }

      state.pos += color.length
      return true
    })

    const taskMarkerPattern = /^\[(x|X| |)\](?:[ \t]+|$)/
    this.md.core.ruler.after('inline', 'task_list', state => {
      let activeListItem: Token | null = null
      let shouldCheckInline = false

      for (const token of state.tokens) {
        if (token.type === 'list_item_open') {
          activeListItem = token
          shouldCheckInline = true
          continue
        }

        if (token.type === 'list_item_close') {
          activeListItem = null
          shouldCheckInline = false
          continue
        }

        if (!activeListItem || !shouldCheckInline || token.type !== 'inline' || !token.children?.length) {
          continue
        }

        shouldCheckInline = false
        const firstChild = token.children[0]
        if (firstChild.type !== 'text') continue

        const match = firstChild.content.match(taskMarkerPattern)
        if (!match) continue

        const checked = match[1].toLowerCase() === 'x'
        const checkbox = new Token('task_checkbox', 'input', 0)
        checkbox.meta = { checked }

        firstChild.content = firstChild.content.slice(match[0].length)
        if (firstChild.content) {
          token.children.unshift(checkbox)
        } else {
          token.children.splice(0, 1, checkbox)
        }

        activeListItem.meta = {
          ...activeListItem.meta,
          taskList: true,
          checked
        }
      }
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
      this.syncCustomCssStyle()
    }
    e.detail.apply(this)
  }

  // 同步应用侧传入的完整 CSS，固定复用同一个 style 节点
  private syncCustomCssStyle() {
    const root = this.shadowRoot
    if (!root) return

    const styleId = 'ys-md-rendering-custom-css'
    let styleElement = root.querySelector<HTMLStyleElement>(`#${styleId}`)

    if (!this.customCss.trim()) {
      styleElement?.remove()
      return
    }

    if (!styleElement) {
      styleElement = document.createElement('style')
      styleElement.id = styleId
    }

    styleElement.textContent = this.customCss
    root.appendChild(styleElement)
  }

  private get resolvedDensity(): MarkdownDensity {
    return this.density === 'compact' ? 'compact' : 'streaming'
  }

  private get resolvedAppearance(): MarkdownAppearance {
    return 'blue'
  }

  private get resolvedMode(): ThemeData['mode'] {
    if (this.mode === 'dark' || this.mode === 'light') return this.mode
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  private get resolvedSize() {
    return Number.isFinite(this.size) && this.size > 0 ? this.size : 16
  }

  private getSizeCss() {
    const size = this.resolvedSize
    const unit = size / 4
    return `.ys-md-content {
      --ys-md-unit: ${unit}px;
      --rem-size: ${size}px;
      --ys-md-space-0-5: ${unit * 0.5}px;
      --ys-md-space-1: ${unit}px;
      --ys-md-space-1-5: ${unit * 1.5}px;
      --ys-md-space-2: ${unit * 2}px;
      --ys-md-space-3: ${unit * 3}px;
      --ys-md-space-4: ${unit * 4}px;
      --ys-md-space-5: ${unit * 5}px;
      --ys-md-space-6: ${unit * 6}px;
      --ys-md-space-8: ${unit * 8}px;
      --ys-md-radius-sm: ${unit}px;
      --ys-md-radius-md: ${unit * 1.5}px;
      --ys-md-radius-lg: ${unit * 2}px;
      --ys-md-radius-xl: ${unit * 2.5}px;
      --ys-md-scrollbar-size: ${unit * 2}px;
    }`
  }

  private syncSizeStyle() {
    const root = this.shadowRoot
    if (!root) return

    const styleId = 'ys-md-rendering-size'
    let styleElement = root.querySelector<HTMLStyleElement>(`#${styleId}`)

    if (!styleElement) {
      styleElement = document.createElement('style')
      styleElement.id = styleId
    }

    styleElement.textContent = this.getSizeCss()
    root.appendChild(styleElement)
  }

  private async syncDensityStyle() {
    const root = this.shadowRoot
    if (!root) return

    const density = this.resolvedDensity
    const requestId = ++this.densityStyleRequestId
    const styleId = 'ys-md-rendering-density'
    let styleElement = root.querySelector<HTMLStyleElement>(`#${styleId}`)

    if (!styleElement) {
      styleElement = document.createElement('style')
      styleElement.id = styleId
    }

    let densityStyle = densityStyleCache[density]
    if (!densityStyle) {
      const module = await densityStyleLoaders[density]()
      densityStyle = module.default
      densityStyleCache[density] = densityStyle
    }

    if (requestId !== this.densityStyleRequestId || density !== this.resolvedDensity || !this.shadowRoot) return

    styleElement.textContent = densityStyle
    root.appendChild(styleElement)
  }

  private async syncAppearanceStyle() {
    const root = this.shadowRoot
    if (!root) return

    const appearance = this.resolvedAppearance
    const requestId = ++this.appearanceStyleRequestId
    const styleId = 'ys-md-rendering-appearance'
    let styleElement = root.querySelector<HTMLStyleElement>(`#${styleId}`)

    if (!styleElement) {
      styleElement = document.createElement('style')
      styleElement.id = styleId
    }

    let appearanceStyle = appearanceStyleCache[appearance]
    if (!appearanceStyle) {
      const module = await appearanceStyleLoaders[appearance]()
      appearanceStyle = module.default
      appearanceStyleCache[appearance] = appearanceStyle
    }

    if (requestId !== this.appearanceStyleRequestId || appearance !== this.resolvedAppearance || !this.shadowRoot) return

    styleElement.textContent = appearanceStyle
    root.appendChild(styleElement)
    this.syncCustomCssStyle()
  }

  private syncThemeStyle() {
    void this.syncDensityStyle()
    void this.syncAppearanceStyle()
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

            // 完成标识
            let isComplete = false
            // 自定义标签判断标识
            if (ast?.end?.meta?.isClose) isComplete = true
            // fence判断标识
            if (ast.node.type === 'fence' && ast.node.meta?.isClose) isComplete = true

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
                    iscomplete: isComplete,
                    meta: token.meta || null
                  },
                  bubbles: true,
                  composed: true
                })
              )
            }

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
            queueMicrotask(() => {
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
                queueMicrotask(() => {
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
    // fix: 解决通过 block.ruler.at 修改导致的fence判断失败问题
    ast.forEach(e => {
      if (e.type === 'fence') {
        e.meta = {
          ...e.meta,
          isClose: true
        }
      }
    })
    const last = ast[ast.length - 1]
    if (last && last.type === 'fence') {
      last.meta.isClose = false
      const _content = this.content.trimEnd()
      if (last.content && _content.endsWith('```')) {
        last.meta.isClose = true
      }
    }
    const list3 = this._buildNestedAST2(ast, this.key)
    const list4 = this._renderAst5(list3)
    return list4
  }

  render() {
    if (!this.isReady) {
      return html`<slot></slot>` // 只显示 slot 占位
    }

    const cssMap = {
      'ys-md-content': true,
      'ys-markdown-body': true,
      'ys-markdown-dark': this.mode === 'dark',
      'ys-markdown-light': this.mode === 'light',
      [`markdown-density-${this.resolvedDensity}`]: true,
      [`markdown-appearance-${this.resolvedAppearance}`]: true
    }

    return html`
      <div class=${classMap(cssMap)} part="container">${this._getAST()}</div>
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
