import MarkdownIt from 'markdown-it'

/**
 * 规则配置
 * @param startTag 开始标识
 * @param endTag 结束标识
 * @param startToken token开始标识
 * @param endToken token结束标识
 * @param isClosed 是否需要闭合标签 默认为 true
 * @param hasChildren 是否内部进行md解析 默认为 false
 * @returns {Function} 规则函数
 */
const getBlockRule = ({ startTag, endTag, startToken, endToken, isClosed = true, hasChildren = false }: RuleOptions) => {
  return (state: MarkdownIt.StateBlock, startLine: number, endLine: number, silent: boolean) => {
    const startPos = state.bMarks[startLine] + state.tShift[startLine]

    // 检查是否以 <thinking> 开始
    if (!state.src.startsWith(startTag, startPos)) {
      return false // 如果没有开始标签，直接返回 false
    }

    // 查找结束标签 </thinking>
    let nextLine = startLine
    let endPos = -1
    let found = false
    while (nextLine < endLine) {
      const lineText = state.getLines(nextLine, nextLine + 1, state.tShift[nextLine], false)
      const tagEndIndex = lineText.indexOf(endTag)
      if (tagEndIndex >= 0) {
        endPos = state.bMarks[nextLine] + state.tShift[nextLine] + tagEndIndex
        found = true
        break
      }
      nextLine++
    }

    // 如果 isClosed 为 true，必须同时存在 startTag 和 endTag 才能解析
    if (isClosed && endPos === -1) {
      return false // 如果没有结束标签，直接返回 false
    }

    // 如果是 silent 模式，直接返回 true，表示可以匹配
    if (silent) return true

    // 创建 thinking_open Token
    let token = state.push(startToken, 'div', 1)
    token.markup = startTag
    token.block = true

    let content = ''
    let isClose = false
    if (found) {
      // 如果找到结束标签，提取内容
      content = state.src.slice(startPos + startTag.length, endPos).trim()
      isClose = true
    } else {
      // 如果没有找到结束标签，提取剩余内容
      content = state.src.slice(startPos + startTag.length).trim()
    }

    if (hasChildren) {
      // 如果 hasChildren 为 true，走 markdown-it 的解析逻辑
      state.md.inline.parse(content, state.md, state.env, state.tokens)
    } else {
      // 如果 hasChildren 为 false，直接作为纯文本处理
      token.content = content
    }

    // 创建 thinking_close Token
    token = state.push(endToken, 'div', -1)
    token.markup = endTag
    token.block = true

    // 补充额外参数
    if (!token.meta) token.meta = {}
    token.meta.isClose = isClose

    // 更新当前行
    state.line = found ? nextLine + 1 : endLine
    return true
  }
}

export default getBlockRule
