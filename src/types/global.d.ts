// 组件配置
interface WidgetConfig {
  name: string
  version: string
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
  hasChildren?: boolean
  isClosed?: boolean
}
