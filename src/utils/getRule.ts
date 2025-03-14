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
const getBlockRule = ({ startTag, endTag, startToken, endToken, isClosed = true, hasChildren = false, meta = null }: RuleOptions) => {
  return (state: MarkdownIt.StateBlock, startLine: number, endLine: number, silent: boolean) => {
    const startPos = state.bMarks[startLine] + state.tShift[startLine]

    // 检查是否以 <thinking> 开始
    if (!state.src.startsWith(startTag, startPos)) {
      return false // 如果没有开始标签，直接返回 false
    }

    // 处理 startTag 和 endTag 相同的特殊情况（例如 $$）
    if (startTag === endTag) {
      // 跳过起始标记后的位置
      const contentStartPos = startPos + startTag.length

      // 检查同一行中是否有结束标记
      const firstLineEnd = state.eMarks[startLine]
      const firstLineContent = state.src.slice(contentStartPos, firstLineEnd)
      const sameLineEndIdx = firstLineContent.indexOf(endTag)

      // 如果在同一行找到了结束标记
      if (sameLineEndIdx >= 0) {
        // 找到了结束标记，计算实际结束位置
        const endPos = contentStartPos + sameLineEndIdx
        const content = state.src.slice(contentStartPos, endPos)

        if (silent) return true

        // 创建开始token
        let token = state.push(startToken, 'div', 1)
        // 补充额外参数
        if (!token.meta) token.meta = {}
        if (meta) {
          token.meta = {
            ...token.meta,
            ...meta
          }
        }
        token.markup = startTag
        token.block = true

        if (hasChildren) {
          state.md.inline.parse(content, state.md, state.env, state.tokens)
        } else {
          token.content = content
        }

        // 创建结束token
        token = state.push(endToken, 'div', -1)
        token.markup = endTag
        token.block = true

        if (!token.meta) token.meta = {}
        token.meta.isClose = true

        // 更新到结束标记后面
        state.line = startLine + 1

        return true
      }

      // 多行情况，需要寻找下一个结束标记
      let nextLine = startLine + 1
      let found = false
      // let endPos = -1

      // 记录第一行的内容（排除开始标记）
      let accumulatedContent = firstLineContent + '\n'

      // 查找后续行中的结束标记
      while (nextLine < endLine) {
        const currentLine = state.bMarks[nextLine] + state.tShift[nextLine]
        const currentLineEnd = state.eMarks[nextLine]
        const lineContent = state.src.slice(currentLine, currentLineEnd)

        // 查找当前行中的结束标记
        const endTagIndex = lineContent.indexOf(endTag)

        if (endTagIndex >= 0) {
          // 判断是否是独立的标记（即前面没有非空白字符，或者是行首）
          const beforeEndTag = lineContent.slice(0, endTagIndex).trim()

          // 如果是行首的结束标记，或者前面没有内容
          if (beforeEndTag === '') {
            // endPos = currentLine + endTagIndex
            found = true
            break
          } else {
            // 如果不是行首，需要继续检查是否是嵌套的标记
            // 这里我们简单地将这个标记看作内容的一部分
            accumulatedContent += lineContent + '\n'
          }
        } else {
          // 没有找到结束标记，将整行添加到内容中
          accumulatedContent += lineContent + '\n'
        }

        nextLine++
      }

      // 如果需要闭合但没找到结束标记
      if (isClosed && !found) {
        return false
      }

      if (silent) return true

      // 处理多行内容
      let content = accumulatedContent

      // 创建开始token
      let token = state.push(startToken, 'div', 1)
      // 补充额外参数
      if (!token.meta) token.meta = {}
      if (meta) {
        token.meta = {
          ...token.meta,
          ...meta
        }
      }
      token.markup = startTag
      token.block = true

      if (hasChildren) {
        state.md.inline.parse(content.trim(), state.md, state.env, state.tokens)
      } else {
        token.content = content.trim()
      }

      // 创建结束token
      token = state.push(endToken, 'div', -1)
      token.markup = endTag
      token.block = true

      if (!token.meta) token.meta = {}
      token.meta.isClose = found

      // 更新当前行
      state.line = found ? nextLine + 1 : endLine
      return true
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
    // 补充额外参数
    if (!token.meta) token.meta = {}
    if (meta) {
      token.meta = {
        ...token.meta,
        ...meta
      }
    }
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

/**
 * 行内规则配置
 * @param startTag 开始标识
 * @param endTag 结束标识
 * @param startToken token标识
 * @returns {Function} 行内规则函数
 */
const getInlineRule = ({ startTag, endTag, startToken, meta }: Omit<RuleOptions, 'endToken'>) => {
  return (state: MarkdownIt.StateInline, silent: boolean) => {
    const start = state.pos
    const max = state.posMax

    // 检查是否以startDelim开始
    if (!state.src.startsWith(startTag, start)) {
      return false
    }

    // 移动位置到开始定界符之后
    let pos = start + startTag.length

    // 寻找结束定界符
    let found = false
    while (pos <= max - endTag.length) {
      // 检查是否找到结束定界符
      if (state.src.startsWith(endTag, pos)) {
        found = true
        break
      }
      pos++
    }

    // 如果没找到结束定界符，返回false
    if (!found) return false

    // 提取公式内容
    const formula = state.src.slice(start + startTag.length, pos).trim()

    // 如果不是silent模式，创建token
    if (!silent) {
      const token = state.push(startToken, '', 0)
      // 补充额外参数
      if (!token.meta) token.meta = {}
      if (meta) {
        token.meta = {
          ...token.meta,
          ...meta
        }
      }

      token.content = formula
      token.markup = startToken
    }

    // 更新位置到结束定界符之后
    state.pos = pos + endTag.length

    return true
  }
}

export { getBlockRule, getInlineRule }
