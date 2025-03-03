import MarkdownIt from 'markdown-it'

const getRule = ({ startTag, endTag, startToken, endToken, hasChildren = false, isClosed = false }: RuleOptions) => {
  return (state: MarkdownIt.StateBlock, startLine: number, endLine: number, silent: boolean) => {
    const startPos = state.bMarks[startLine] + state.tShift[startLine]

    // 检查是否以 <thinking> 开始
    if (!state.src.startsWith(startTag, startPos)) {
      return false // 如果没有开始标签，直接返回 false
    }

    // 查找结束标签 </thinking>
    let nextLine = startLine
    let endPos = -1
    while (nextLine < endLine) {
      const lineText = state.getLines(nextLine, nextLine + 1, state.tShift[nextLine], false)
      const tagEndIndex = lineText.indexOf(endTag)
      if (tagEndIndex >= 0) {
        endPos = state.bMarks[nextLine] + state.tShift[nextLine] + tagEndIndex
        break
      }
      nextLine++
    }

    // 如果是 silent 模式，直接返回 true，表示可以匹配
    if (silent) return true

    // 创建 thinking_open Token
    let token = state.push(startToken, 'div', 1)
    token.markup = startTag
    token.block = true

    // 提取内容（不调用 inline.parse，直接作为纯文本处理）
    const content = state.src.slice(startPos + startTag.length, endPos).trim()
    token.content = content

    // 创建 thinking_close Token
    token = state.push(endToken, 'div', -1)
    token.markup = endTag
    token.block = true

    state.line = nextLine + 1
    return true
  }
}

const getRuleOld = ({ startTag, endTag, startToken, endToken, hasChildren = false, isClosed = false }: RuleOptions) => {
  return (state: MarkdownIt.StateBlock, startLine: number, endLine: number, silent: boolean) => {
    const startPos = state.bMarks[startLine] + state.tShift[startLine]

    // 检查是否以 <thinking> 开始
    if (!state.src.startsWith(startTag, startPos)) {
      return false // 如果没有开始标签，直接返回 false
    }

    // 查找结束标签 </thinking>
    let nextLine = startLine
    let endPos = -1
    while (nextLine < endLine) {
      const lineText = state.getLines(nextLine, nextLine + 1, state.tShift[nextLine], false)
      const tagEndIndex = lineText.indexOf(endTag)
      if (tagEndIndex >= 0) {
        endPos = state.bMarks[nextLine] + state.tShift[nextLine] + tagEndIndex
        break
      }
      nextLine++
    }

    // 如果是 silent 模式，直接返回 true，表示可以匹配
    if (silent) return true

    // 创建 thinking_open Token
    let token = state.push(startToken, 'div', 1)
    token.markup = startTag
    token.block = true

    // 提取内容（不调用 inline.parse，直接作为纯文本处理）
    const content = state.src.slice(startPos + startTag.length, endPos).trim()
    token.content = content

    // 创建 thinking_close Token
    token = state.push(endToken, 'div', -1)
    token.markup = endTag
    token.block = true

    state.line = nextLine + 1
    return true
  }
}

// const createThinkRule = () => {
//   return (state: MarkdownIt.StateBlock, startLine: number, endLine: number, silent: boolean) => {
//     const startPos = state.bMarks[startLine] + state.tShift[startLine]
//     const startTag = '<thinking>'
//     const endTag = '</thinking>'

//     // 检查开始标签
//     if (!state.src.startsWith(startTag, startPos)) {
//       return false // 如果没有开始标签，直接返回 false
//     }

//     // 查找结束标签
//     let nextLine = startLine
//     let found = false
//     while (nextLine < endLine) {
//       const lineText = state.getLines(nextLine, nextLine + 1, state.tShift[nextLine], false)
//       if (lineText.includes(endTag)) {
//         found = true
//         break
//       }
//       nextLine++
//     }

//     if (silent) {
//       return true // 在 silent 模式下返回 true，表示可以匹配
//     }

//     // 创建 thinking_open token
//     let token = state.push('thinking_open', 'div', 1)
//     token.markup = startTag
//     token.block = true

//     // 添加内容
//     let content = ''
//     if (found) {
//       // 如果找到结束标签，提取内容
//       content = state.src.slice(state.bMarks[startLine] + startTag.length, state.bMarks[nextLine] + state.tShift[nextLine]).replace(/^\n+/, '')
//       state.md.inline.parse(content, state.md, state.env, state.tokens)
//       // 创建 thinking_close token
//       token = state.push('thinking_close', 'div', -1)
//       token.markup = endTag
//       token.block = true
//       // 正常结束
//       token.meta = {
//         ...token.meta,
//         isNormalClose: true
//       }
//       state.line = nextLine + 1 // 更新当前行
//     } else {
//       // 如果没有找到结束标签，提取剩余内容
//       content = state.src.slice(state.bMarks[startLine] + startTag.length).replace(/^\n+/, '')
//       state.md.inline.parse(content, state.md, state.env, state.tokens)
//       // 可选：创建一个默认的 thinking_close token
//       token = state.push('thinking_close', 'div', -1)
//       token.markup = endTag
//       token.block = true
//       // 异常结束
//       token.meta = {
//         ...token.meta,
//         isNormalClose: false
//       }
//       state.line = endLine // 更新当前行到文档末尾
//     }
//     return true
//   }
// }

export default getRule
