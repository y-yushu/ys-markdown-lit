import MarkdownIt from 'markdown-it'
import { getBlockRule } from '../../utils/getRule'
import { WidgetEcharts } from './render'

const widgetCache = new Map<string, WidgetEcharts>()

const config: WidgetConfig = {
  name: 'echarts',
  version: '0.0.1',
  logotype: 'echarts_open',

  // 渲染规则
  rule: (md: MarkdownIt) => {
    const startTag = '<echarts>'
    const endTag = '</echarts>'
    const startToken = config.logotype
    const endToken = 'echarts_close'

    // 创建块规则
    const _rule = getBlockRule({
      startTag: startTag,
      endTag: endTag,
      startToken: startToken,
      endToken: endToken,
      isClosed: false
    })
    md.block.ruler.before('fence', 'echarts', _rule)
  },

  // 渲染函数
  render: (token: AstToken) => {
    const key = token.key
    if (widgetCache.has(key)) {
      const cachedWidget = widgetCache.get(key)
      if (cachedWidget) {
        cachedWidget.token = token
      }
      return cachedWidget
    }
    const we = new WidgetEcharts(token)
    widgetCache.set(key, we)
    return we
  }
}

export default config
