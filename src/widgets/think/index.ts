import MarkdownIt from 'markdown-it'
import { getBlockRule } from '../../utils/getRule'
import { WidgetThink } from './render'

const config: WidgetConfig = {
  name: 'thinking',
  version: '0.0.1',
  logotype: 'thinking_open',

  // 渲染规则
  rule: (md: MarkdownIt) => {
    // 创建块规则 1
    md.block.ruler.before(
      'fence',
      'thinking',
      getBlockRule({
        startTag: '<thinking>',
        endTag: '</thinking>',
        startToken: config.logotype,
        endToken: 'thinking_close',
        isClosed: false
      })
    )

    // 创建块规则 2
    md.block.ruler.before(
      'fence',
      'thinking',
      getBlockRule({
        startTag: '<think>',
        endTag: '</think>',
        startToken: config.logotype,
        endToken: 'thinking_close',
        isClosed: false
      })
    )
  },

  // 渲染函数
  render: (token: AstToken) => {
    return new WidgetThink(token)
  }
}

export default config
