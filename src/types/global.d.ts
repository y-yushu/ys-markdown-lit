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
