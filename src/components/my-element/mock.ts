export const MarkdownStr4: string = `<span style="color:red">kkk</span>

> 引用模块

这是一个复杂的锻炼，有**加粗**，也有*倾斜*，还可以___两者都有___，然后还有~~删除线~~，\`多种格式\`，再有个百度[~~baidu~~](http://baidu.com)

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

*斜体*

---

|名称|属性|
|--|--|
|code|\`hello worde\`|
|加粗|*12|

<thinking>
这是半个思考内容
`

export const MarkdownStr2: string = `
<thinking>
这个是思考的内容
</thinking>
`

export const MarkdownStr3: string = `
<thinking>
这是半个思考内容
`

// 嵌套列表与代码块
export const MarkdownStr7: string = `# 复杂的嵌套列表与代码块测试

这是一个包含嵌套列表和代码块的测试内容。

## 列表部分
1. 第一层列表项
    - 第二层列表项
        - 第三层列表项
            * 第四层列表项
              * 第五层列表项
2. 第一层列表项
    - 第二层列表项
      \`\`\`python
      def hello_world():
          print("Hello, world!")
      \`\`\`
3. 第一层列表项
    - 第二层列表项
        - 第三层列表项
          \`\`\`bash
          echo "这是一个bash代码块"
          \`\`\``

// 表格与图片混合
export const MarkdownStr8: string = `# 表格与图片混合测试

这是一个包含表格和图片的测试内容。

## 表格部分
| 表头1 | 表头2 | 表头3 |
|-------|-------|-------|
| 单元格1 | 单元格2 | 单元格3 |
| 单元格4 | 单元格5 | 单元格6 |
| 单元格7 | 单元格8 | 单元格9 |

## 图片部分
![示例图片](https://t7.baidu.com/it/u=1951548898,3927145&fm=193&f=GIF "图片标题")

## 表格与图片混合
| 表头1 | 表头2 | 表头3 |
|-------|-------|-------|
| 单元格1 | ![图片](https://t7.baidu.com/it/u=1951548898,3927145&fm=193&f=GIF "图片标题") | 单元格3 |
| 单元格4 | 单元格5 | 单元格6 |`
