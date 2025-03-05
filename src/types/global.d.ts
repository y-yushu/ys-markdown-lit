// 组件配置
interface WidgetConfig {
  name: string
  version: string
  logotype: string
  startTag: string
  endTag: string
  startToken: string
  endToken: string
  rule: (MarkdownIt) => void
  render: () => TemplateResult
}

// 规则配置
interface RuleOptions {
  startTag: string
  endTag: string
  startToken: string
  endToken: string
  isClosed?: boolean // 是否需要闭合标签
  hasChildren?: boolean // 是否内部进行md解析
}
