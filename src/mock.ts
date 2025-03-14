export const MarkdownStr0: string = `<span style="color:red">*123*</span>`

export const MarkdownStr1: string = `# 测试标1

<echarts>
{"xAxis":{"type":"category","data":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},"yAxis":{"type":"value"},"series":[{"data":[150,230,224,218,135,147,260],"type":"line"}]}
</echarts>

> 渲染完成了渲染完成了渲染完成了渲染完成了渲染完成了渲染完成了渲染完成了渲染完成了渲染完成了渲染完成了渲染完成了渲染完成了渲染完成了渲染完成了渲染完成了渲染完成了渲染完成了渲染完成了渲染完成了渲染完成了渲染完成了渲染完成了渲染完成了渲染完成了
`

export const MarkdownStr2: string = `# 测试标2

<span style="color:red">这个考的内容</span>

<thinking>
暗藏灯带
这个==是思==考的内容
151515
</thinking>

> nice
`

export const MarkdownStr3: string = `
<thinking>
这是半个思考内容
`

// 嵌套列表与代码块
export const MarkdownStr7: string = `# 复杂的嵌套列表与代码块测试

\`\`\`python
def hello_world():
    print("Hello, world!")
def hello_world():
    print("Hello, world!")
def hello_world():
    print("Hello, world!")
\`\`\`

先输入\`const arr = []\`然后打印

3. 第一层列表项
    - 第二层列表项
        - 第三层列表项
          \`\`\`bash
          echo "这是一个bash代码块"
          \`\`\`
1. 第一层列表项
    - 第二层列表项

> 渲染结束
`

// 表格与图片混合
export const MarkdownStr8: string = `# 表格与图片混合测试

这是一个包含表格和图片的测试内容。

<img src="https://t7.baidu.com/it/u=1951548898,3927145&fm=193&f=GIF" align = "right" width="600" height="600"/>

## 表格部分
| 表头1 | 表头2 | 表头3 |
|-------|-------|-------|
| 单元格1 | 单元格2 | 单元格3 |
| 单元格4 | 单元格5 | 单元格6 |
| 单元格7 | 单元格8 | 单元格9 |

## 图片部分456
![示例图片11](https://t7.baidu.com/it/u=1951548898,3927145&fm=193&f=GIF "图片标题222")

## 表格与图片混合
| 表头1 | 表头2 | 表头3 |
|-------|-------|-------|
| 单元格1 | ![图片22](https://t7.baidu.com/it/u=1951548898,3927145&fm=193&f=GIF "图片标题") | 单元格3 |
| 单元格4 | 单元格5 | 单元格6 |`

export const MarkdownStr9: string = `# 表格与图片混合测试

这是一个包含表格和图片的测试内容。

<img src="https://t7.baidu.com/it/u=1951548898,3927145&fm=193&f=GIF" align = "right" width="600" height="600"/>`

export const MarkdownStr10: string = `# HTML 混合 Markdown 测试

这是一个包含 HTML 和 Markdown 的测试内容。

## HTML 段落
<p style="color: red; font-size: 20px;">这是一个HTML段落，带有样式。</p>

## Markdown 段落
这是一个 Markdown 段落，带有 **加粗** 和 *斜体*。

## HTML 表格
<table border="1">
    <tr>
        <th>HTML 表头1</th>
        <th>HTML 表头2</th>
    </tr>
    <tr>
        <td>HTML 单元格1</td>
        <td>HTML 单元格2</td>
    </tr>
</table>

## Markdown 表格
| Markdown 表头1 | Markdown 表头2 |
|-----------------|----------------|
| Markdown 单元格1 | Markdown 单元格2 |`

export const MarkdownStr11: string = `# 多级标题与引用测试

这是一个包含多级标题和引用的测试内容。

## 第二级标题
这是一个第二级标题的内容。

### 第三级标题
这是一个第三级标题的内容。

#### 第四级标题
这是一个第四级标题的内容。

##### 第五级标题
这是一个第五级标题的内容。

###### 第六级标题
这是一个第六级标题的内容。

## 引用部分
> 这是一个引用块。
>
> 引用块可以包含多段内容。
>
> 每一段都以 \` >
  \` 开头。

## 引用与列表混合
> 这是一个引用块。
>
> - 引用块中包含列表项
>   - 第二层列表项
>     - 第三层列表项
>
> 这是引用块的最后一段。`

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

export const MarkdownStr13: string = `# 代码块与特殊字符混合测试

这是一个包含多级标题和引用的测试内容。

<thinking>
这个是测试啊啊啊
</thinking>

## 第二级标题
这是一个第二级标题的内容。

### 第三级标题
这是一个第三级标题的内容。

#### 第四级标题
这是一个第四级标题的内容。

##### 第五级标题
这是一个第五级标题的内容。

###### 第六级标题
这是一个第六级标题的内容。

## 引用部分
> 这是一个引用块。
>
> 引用块可以包含多段内容。
`

export const MarkdownStr_echart: string = `# 测试echarts

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
