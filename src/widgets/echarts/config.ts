import { html } from 'lit'
import MarkdownIt, { Token } from 'markdown-it'
import getRule from '../../utils/getRule'
import './render'

const config: WidgetConfig = {
  name: 'echarts',
  version: '0.0.1',
  logotype: 'thinking_open',
  startTag: '<echarts>',
  endTag: '</echarts>',
  startToken: 'echarts_open',
  endToken: 'echarts_close',

  // 渲染规则
  rule: (md: MarkdownIt) => {
    const _rule = getRule({
      startTag: config.startTag,
      endTag: config.endTag,
      startToken: config.startToken,
      endToken: config.endToken,
      isClosed: false
    })
    md.block.ruler.before('fence', 'thinking', _rule)
  },

  // 渲染函数
  render: (token: AstToken) => {
    return html`<widget-think></widget-think>`
  }
}

export default config
