// 基于markdown-it的token封装
interface AstToken {
  key: string
  node: Token | null
  end: Token | null
  children: AstToken[]
  meta?: unknown
}

// 组件配置
interface WidgetConfig {
  name: string
  version: string
  logotype: string
  rule: (MarkdownIt) => void
  render: (token: AstToken) => TemplateResult
}

// 规则配置
interface RuleOptions {
  startTag: string
  endTag: string
  startToken: string
  endToken: string
  isClosed?: boolean // 是否需要闭合标签
  hasChildren?: boolean // 是否内部进行md解析
  meta?: unknown // 额外携带参数
}

// 链接点击事件的详情接口
interface LinkClickEventDetail {
  // 链接的href属性
  href: string
  // 链接的文本内容（这里是TemplateResult类型，因为chil是TemplateResult[]）
  text: TemplateResult[] | any
  // 原始事件对象
  originalEvent: MouseEvent
}

// md渲染可支持的token
type MethodType =
  | 'inline'
  | 'heading_open'
  | 'paragraph_open'
  | 'blockquote_open'
  | 'strong_open'
  | 'em_open'
  | 's_open'
  | 'ordered_list_open'
  | 'bullet_list_open'
  | 'list_item_open'
  | 'table_open'
  | 'thead_open'
  | 'tbody_open'
  | 'tr_open'
  | 'th_open'
  | 'td_open'
  | 'link_open'
  | 'fence'
  | 'code_inline'
  | 'hr'
  | 'softbreak'
  | 'hardbreak'
  | 'image'
  | 'text'
  | 'html_block'
  | 'html_inline'

// 自定义渲染方法
type CustomMethodFn<T extends any[], R> = (...args: T) => R
