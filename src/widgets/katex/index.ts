import MarkdownIt from 'markdown-it'
import { getBlockRule, getInlineRule } from '../../utils/getRule'
import { WidgetKatex } from './render'

const config: WidgetConfig = {
  name: 'katex',
  version: '0.0.1',
  logotype: 'katex_open',

  // 渲染规则
  rule: (md: MarkdownIt) => {
    // 创建块规则
    const _rule1 = getBlockRule({
      startTag: '$$',
      endTag: '$$',
      startToken: config.logotype,
      endToken: 'katex_close',
      meta: {
        isline: false // 块解析
      }
    })
    md.block.ruler.before('fence', 'latex_1', _rule1)

    // 创建行规则
    // 处理 `$...$`
    md.inline.ruler.before(
      'escape',
      'latex_2',
      getInlineRule({
        startTag: '$',
        endTag: '$',
        startToken: config.logotype,
        meta: { isline: true }
      })
    )
    // 处理`(...)`
    md.inline.ruler.before(
      'escape',
      'latex_3',
      getInlineRule({
        startTag: '\\(',
        endTag: '\\)',
        startToken: config.logotype,
        meta: { isline: true }
      })
    )
    // 处理`[]...]`
    md.inline.ruler.before(
      'escape',
      'latex_4',
      getInlineRule({
        startTag: '\\[',
        endTag: '\\]',
        startToken: config.logotype,
        meta: { isline: false }
      })
    )
  },

  // 渲染函数
  render: (token: AstToken) => {
    return new WidgetKatex(token)
  }
}

export default config
