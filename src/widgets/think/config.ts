import { html } from 'lit'
import MarkdownIt from 'markdown-it'
import getRule from '../utils/getRule'
import './render'

const config: WidgetConfig = {
  name: 'thinking',
  version: '0.0.1',
  startTag: '<thinking>',
  endTag: '</thinking>',
  startToken: 'thinking_open',
  endToken: 'thinking_close',

  // 渲染规则
  rule: (md: MarkdownIt) => {
    const _rule = getRule({
      startTag: config.startTag,
      endTag: config.endTag,
      startToken: config.startToken,
      endToken: config.endTag
    })
    md.block.ruler.before('fence', 'thinking', _rule)
  },

  // 渲染函数
  render: () => {
    console.log('render')
    const renderSue = () => {
      console.log('123123123')
    }
    return html`<widget-think .rendesue=${renderSue}></widget-think>`
  }
}

export default config
