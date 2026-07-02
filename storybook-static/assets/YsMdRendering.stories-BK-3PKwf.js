import{i as e}from"./preload-helper-CT_b8DTk.js";import{U as t,Y as n}from"./iframe-D4NKHDCX.js";import{t as r}from"./YsMdRendering-Db6tAK7z.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{t(),r(),{fn:i}=__STORYBOOK_MODULE_TEST__,a=[`# Markdown 样式总览`,``,"这是一份用于测试 `ys-md-rendering` 主组件样式的 Markdown 内容，尽量覆盖日常文档里会出现的大部分语法。你可以用它快速检查标题、段落、链接、列表、引用、表格、代码、图片和 HTML 混排的视觉效果。",``,"普通文本中可以包含 **加粗**、*斜体*、~~删除线~~、==高亮标记==、`行内代码`、颜色值 #0969da，以及一个 [外部链接](https://github.com/y-yushu/ys-markdown-lit)。",``,`自动换行测试：这一行后面紧跟一个软换行，`,"如果 `breaks` 为 true，应该能看到这里被渲染成换行。",``,`---`,``,`## 1. 标题层级`,``,`### 三级标题：章节标题`,``,`#### 四级标题：小节标题`,``,`##### 五级标题：提示说明`,``,`###### 六级标题：辅助信息`,``,`## 2. 段落与引用`,``,`段落应该保持舒服的行高和间距。中文和 English words 混排时，文字不应该显得拥挤，长内容也应该自然换行，不撑破容器。`,``,`> 这是一段引用内容，用于观察左侧强调线、背景色、文字颜色和段落间距。`,`>`,`> 引用内也可以包含 **加粗文本** 和 [链接](https://example.com)。`,``,`## 3. 列表`,``,`无序列表：`,``,`- 第一项内容`,"- 第二项内容，包含 `inline code`",`- 第三项内容`,`  - 嵌套列表 A`,`  - 嵌套列表 B`,``,`有序列表：`,``,`1. 安装依赖`,`2. 编写组件`,`3. 构建并测试 dist`,``,`任务项 HTML 混排：`,``,`<p><input type="checkbox" checked disabled> 已完成：主组件样式调整</p>`,`<p><input type="checkbox" disabled> 待完成：插件视觉统一</p>`,``,`## 4. 表格`,``,`| 语法 | 状态 | 说明 |`,`| --- | :---: | ---: |`,`| 标题 | 已覆盖 | h1 到 h6 |`,`| 表格 | 已覆盖 | 含对齐符号 |`,`| 代码 | 已覆盖 | 行内与块级 |`,`| 图片 | 已覆盖 | 自适应宽度 |`,``,`## 5. 代码`,``,'行内代码示例：`const mode = "dark"`。',``,"```ts",`type MarkdownMode = "light" | "dark" | ""`,``,`const renderMarkdown = (content: string, mode: MarkdownMode) => {`,`  return {`,`    content,`,`    mode,`,`    renderedAt: new Date().toISOString()`,`  }`,`}`,``,`console.log(renderMarkdown("# Hello", "light"))`,"```",``,"```json",`{`,`  "name": "ys-md-rendering",`,`  "style": "github-like",`,`  "storybook": true`,`}`,"```",``,`## 6. 图片`,``,`![Markdown 示例图片](https://picsum.photos/600/240)`,``,`## 7. HTML 扩展内容`,``,`<details open>`,`<summary>展开区域 summary</summary>`,`<p>这里用于测试 details、summary、kbd、sup、sub 等 HTML 元素样式。</p>`,`<p>快捷键：<kbd>Ctrl</kbd> + <kbd>K</kbd>，上标 x<sup>2</sup>，下标 H<sub>2</sub>O。</p>`,`</details>`,``,`<dl>`,`<dt>定义标题</dt>`,`<dd>定义描述内容，用于观察 dt / dd 的缩进和粗细。</dd>`,`</dl>`,``,`<section class="footnotes">`,`<p>脚注区域示例：这里用于检查 .footnotes 的边框、字号和辅助文本颜色。</p>`,`</section>`].join(`
`),o=[`# 台湾海峡`,``,`台湾海峡位于中国大陆东南沿海与台湾岛之间，是连接东海与南海的重要海上通道。`,``,`## 地理特点`,``,`- 南北走向`,`- 航运繁忙`,`- 季风影响明显`,`- 台风活动频繁`,``,`> 台湾海峡是东亚地区重要的国际航运通道之一。`,``,`相关资料：[维基百科](https://zh.wikipedia.org/wiki/台湾海峡)`].join(`
`),s=[`## 表格与代码块`,``,`| 区域 | 宽度 | 说明 |`,`| --- | ---: | --- |`,`| 最窄处 | 130 km | 北部海域 |`,`| 平均宽度 | 180 km | 常见参考值 |`,``,"```js",`function getStraitName() {`,`  return "台湾海峡"`,`}`,``,`console.log(getStraitName())`,"```"].join(`
`),c=`
.ys-markdown-body table tr:hover {
  background: rgba(37, 99, 235, 0.08);
}

.ys-markdown-body a::after {
  content: "↗";
  margin-left: 0.25em;
  font-size: 0.85em;
}
`,l=e=>n`
  <div style="max-width: 880px; padding: 16px;">
    <ys-md-rendering
      .content=${e.content}
      .theme=${e.theme}
      .unitSize=${e.unitSize}
      .breaks=${e.breaks}
      .customStyles=${e.customStyles}
      mode=${e.mode}
      custom-css=${e.customCss}
      md-html=${String(e.html)}
      md-linkify=${String(e.linkify)}
      @link-click=${e.onLinkClick}
    ></ys-md-rendering>
  </div>
`,u={title:`Components/YsMdRendering`,tags:[`autodocs`],render:l,parameters:{layout:`padded`},argTypes:{mode:{control:{type:`select`},options:[``,`light`,`dark`]},theme:{control:{type:`select`},options:[`github`,`chatgpt`]},unitSize:{control:{type:`number`,min:2,max:8,step:.5}},content:{control:`text`},customCss:{control:`text`},customStyles:{control:`object`}},args:{content:a,theme:`github`,unitSize:4,mode:``,breaks:!0,html:!0,linkify:!1,customStyles:{},customCss:``,onLinkClick:i()}},d={},f={args:{content:a}},p={args:{content:s}},m={args:{mode:`dark`,content:a}},h={args:{theme:`chatgpt`,content:a}},g={args:{unitSize:5,content:a}},_={args:{customStyles:{h1:{color:`#2563eb`,fontSize:`30px`},p:{lineHeight:`1.9`}}}},v={args:{content:`${o}\n\n${s}`,customCss:c}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    content: markdownShowcaseContent
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    content: tableContent
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'dark',
    content: markdownShowcaseContent
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'chatgpt',
    content: markdownShowcaseContent
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    unitSize: 5,
    content: markdownShowcaseContent
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    customStyles: {
      h1: {
        color: '#2563eb',
        fontSize: '30px'
      },
      p: {
        lineHeight: '1.9'
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    content: \`\${baseContent}\\n\\n\${tableContent}\`,
    customCss
  }
}`,...v.parameters?.docs?.source}}},y=[`Basic`,`MarkdownShowcase`,`TableAndCode`,`DarkMode`,`ChatGPTTheme`,`LargeUnit`,`CustomStyles`,`CustomCss`]}))();export{d as Basic,h as ChatGPTTheme,v as CustomCss,_ as CustomStyles,m as DarkMode,g as LargeUnit,f as MarkdownShowcase,p as TableAndCode,y as __namedExportsOrder,u as default};