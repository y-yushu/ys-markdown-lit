export const MarkdownStr12: string = `# 特殊字符与转义测试

这是一个包含特殊字符和转义的测试内容。

## 特殊字符
以下是一些特殊字符：
- 斜杠 \`/\`
- 反斜杠 \`\\\`
- 星号 \`*\`
- 下划线 \`_\`
- 方括号 \`[]\`
- 大括号 \`{}\`
- 圆括号 \`()\`
- 加号 \`+\`
- 减号 \`-\`
- 等号 \`=\`
- 竖线 \`|\`
- 反引号 \`\` \` \`\`

## 转义字符
以下是一些转义字符的示例：
- 转义星号 \`\\*\` 显示为：\*
- 转义下划线 \`\\_\` 显示为：\_
- 转义方括号 \`\\[\` 和 \`\\]\` 显示为：\[
- 转义反斜杠 \`\\\\\` 显示为：\\

## 代码块中的特殊字符
\`\`\`markdown
# 这是一个代码块
- 代码块中包含特殊字符：* _ [] {} () + - = | \`

- 代码块中的特殊字符不会被转义。`

export const MarkdownStr_echart: string = `# 测试echarts

[doccano](https://github.com/doccano/doccano/tree/v1.8.4/frontend)

<echarts>
{"xAxis":{"type":"category","data":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},"yAxis":{"type":"value"},"series":[{"data":[150,230,224,218,135,147,260],"type":"line"}]}
</echarts>

<echarts>
{"xAxis":{"type":"category","data":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},"yAxis":{"type":"value"},"series":[{"data":[150,230,224,218,135,147,260],"type":"line"}]}
</echarts>

> 渲染完成了
`

export const MarkdownStr_katex: string = `# 测试Katex

- 单行

$$\\sqrt{a^2 + b^2} = c$$

- 多行

$$
\\begin{equation}
  x = a_0 + \\cfrac{1}{a_1 
          + \\cfrac{1}{a_2 
          + \\cfrac{1}{a_3 + \\cfrac{1}{a_4} } } }
\\end{equation}
$$

- 单标签

这个是$\\Pi$符号，这个是\\( 
\\tanh^{-3} 
\\)符号，这个是\\[
\\tanh^{-4}
\\]符号
`

export const MarkdownStr_think: string = `# 测试Think

<thinking>
暗藏灯带
这个==是思==考的内容这个==是思==考的内容这个==是思==考的内容这个==是思==考的内容这个==是思==考的内容这个==是思==考的内容
151515
</thinking>

> 你好啊

<think>
暗藏灯带，这个。
</think>

这个==是思==考的内容这个==是思==考的内容这个==是思==考的内容这个==是思==考的内容这个==是思==考的内容这个==是思==考的内容
`
