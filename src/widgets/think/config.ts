import { html } from 'lit'
import MarkdownIt from 'markdown-it'
import getBlockRule from '../../utils/getRule'
import './render'

const config: WidgetConfig = {
  name: 'thinking',
  version: '0.0.1',
  logotype: 'thinking_open',

  // 渲染规则
  rule: (md: MarkdownIt) => {
    const startTag = '<thinking>'
    const endTag = '</thinking>'
    const startToken = config.logotype
    const endToken = 'thinking_close'

    // 创建块规则
    const _rule = getBlockRule({
      startTag: startTag,
      endTag: endTag,
      startToken: startToken,
      endToken: endToken,
      isClosed: false
    })
    md.block.ruler.before('fence', 'thinking', _rule)
  },

  // 渲染函数
  render: (token: AstToken) => {
    console.log('render', token)
    const renderSue = () => {
      console.log('123123123')
    }
    return html`<widget-think .rendesue=${renderSue}></widget-think>`
  }
}

export default config
