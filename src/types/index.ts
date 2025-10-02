import Token from 'markdown-it/lib/token.mjs'

// 最终渲染树结构
export interface AstToken {
  key: string
  node: Token
  end: Token | null
  children: AstToken[]
  meta?: unknown
}

// 渲染更新详情
export interface YsRenderUpdateDetail {
  key: string
  type: string
  el: HTMLElement
  content: string
  iscomplete?: boolean
  meta?: unknown
}

// 规则选项
export interface RuleOptions {
  key?: string // 规则的key，如果为空，则使用startTag
  startTag: string
  endTag: string
  startToken: string
  endToken: string
  hasChildren?: boolean // 是否内部进行md解析
  meta?: unknown // 额外携带参数
}

// 自定义规则项
export interface RuleItem {
  key?: string // 规则的key，如果为空，则使用startTag
  name: string
  type: 'fence' | 'escape' | 'auto'
  startTag: string
  endTag: string
  meta?: unknown
}
