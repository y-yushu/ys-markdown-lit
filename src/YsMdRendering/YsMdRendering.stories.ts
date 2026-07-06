import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import { keyed } from 'lit/directives/keyed.js'
import { fn } from 'storybook/test'

import './index'

type MarkdownDensity = 'streaming' | 'compact'
type MarkdownAppearance = 'blue'
type MarkdownMode = '' | 'light' | 'dark'

interface YsMdRenderingArgs {
  content: string
  density: MarkdownDensity
  appearance: MarkdownAppearance
  size: number
  mode: MarkdownMode
  breaks: boolean
  html: boolean
  linkify: boolean
  customStyles: Record<string, Record<string, string>>
  customCss: string
  onLinkClick?: (event: CustomEvent) => void
}

const markdownShowcaseContent = [
  '# Markdown 样式总览',
  '',
  '这是一份用于测试 `ys-md-rendering` 主组件样式的 Markdown 内容，尽量覆盖日常文档里会出现的大部分语法。你可以用它快速检查标题、段落、链接、列表、引用、表格、代码、图片和 HTML 混排的视觉效果。',
  '',
  '普通文本中可以包含 **加粗**、*斜体*、~~删除线~~、==高亮标记==、`行内代码`、颜色值 #0969da，以及一个 [外部链接](https://github.com/y-yushu/ys-markdown-lit)。',
  '',
  '裸链接测试：打开 `md-linkify` 后，https://example.com 会被 markdown-it 自动识别为链接；普通 Markdown 链接不依赖该选项。',
  '',
  '自动换行测试：这一行后面紧跟一个软换行，',
  '如果 `breaks` 为 true，应该能看到这里被渲染成换行。',
  '',
  '---',
  '',
  '## 1. 标题层级',
  '',
  '### 三级标题：章节标题',
  '',
  '#### 四级标题：小节标题',
  '',
  '##### 五级标题：提示说明',
  '',
  '###### 六级标题：辅助信息',
  '',
  '## 2. 段落与引用',
  '',
  '段落应该保持舒服的行高和间距。中文和 English words 混排时，文字不应该显得拥挤，长内容也应该自然换行，不撑破容器。',
  '',
  '> 这是一段引用内容，用于观察左侧强调线、背景色、文字颜色和段落间距。',
  '>',
  '> 引用内也可以包含 **加粗文本** 和 [链接](https://example.com)。',
  '',
  '## 3. 列表',
  '',
  '无序列表：',
  '',
  '- 第一项内容',
  '- 第二项内容，包含 `inline code`',
  '- 第三项内容',
  '  - 嵌套列表 A',
  '  - 嵌套列表 B',
  '',
  '有序列表：',
  '',
  '1. 安装依赖',
  '2. 编写组件',
  '3. 构建并测试 dist',
  '',
  '任务项 HTML 混排：',
  '',
  '- [X] 西红柿',
  '- [ ] 鸡蛋',
  '- [X] 白糖',
  '- [ ] 食用盐',
  '',
  '## 4. 表格',
  '',
  '| 语法 | 状态 | 说明 |',
  '| --- | :---: | ---: |',
  '| 标题 | 已覆盖 | h1 到 h6 |',
  '| 表格 | 已覆盖 | 含对齐符号 |',
  '| 代码 | 已覆盖 | 行内与块级 |',
  '| 图片 | 已覆盖 | 自适应宽度 |',
  '',
  '## 5. 代码',
  '',
  '行内代码示例：`const mode = "dark"`。',
  '',
  '```ts',
  'type MarkdownMode = "light" | "dark" | ""',
  '',
  'const renderMarkdown = (content: string, mode: MarkdownMode) => {',
  '  return {',
  '    content,',
  '    mode,',
  '    renderedAt: new Date().toISOString()',
  '  }',
  '}',
  '',
  'console.log(renderMarkdown("# Hello", "light"))',
  '```',
  '',
  '```json',
  '{',
  '  "name": "ys-md-rendering",',
  '  "density": "streaming",',
  '  "appearance": "blue",',
  '  "storybook": true',
  '}',
  '```',
  '',
  '## 6. 图片',
  '',
  '![Markdown 示例图片](https://picsum.photos/600/240)',
  '',
  '## 7. HTML 扩展内容',
  '',
  '<details open>',
  '<summary>展开区域 summary</summary>',
  '<p>这里用于测试 details、summary、kbd、sup、sub 等 HTML 元素样式。</p>',
  '<p>快捷键：<kbd>Ctrl</kbd> + <kbd>K</kbd>，上标 x<sup>2</sup>，下标 H<sub>2</sub>O。</p>',
  '</details>',
  '',
  '<dl>',
  '<dt>定义标题</dt>',
  '<dd>定义描述内容，用于观察 dt / dd 的缩进和粗细。</dd>',
  '</dl>'
].join('\n')

const streamingContent = [
  '# 流式阅读密度',
  '',
  'streaming 适合完整文档阅读，段落间距、标题间距和代码块留白会更舒展。',
  '',
  '这段文字用于观察正文行高和段落节奏。中文和 English words 混排时，内容应该保持自然换行，不挤压阅读空间。',
  '',
  '> 引用块在 streaming 下会保留更明显的上下间距，适合长篇说明和连续输出。',
  '',
  '```ts',
  'const density = "streaming"',
  '```'
].join('\n')

const compactContent = [
  '## 紧凑密度',
  '',
  'compact 适合聊天气泡、侧栏预览或空间受限的区域。',
  '',
  '- 更小的块级间距',
  '- 更紧凑的列表节奏',
  '- 代码块头部默认收起',
  '',
  '| 项目 | 状态 |',
  '| --- | --- |',
  '| 标题 | 紧凑展示 |',
  '| 表格 | 减少留白 |'
].join('\n')

const darkModeContent = [
  '# 深色模式',
  '',
  '这段内容用于检查深色模式下的正文、链接、引用和代码块对比度。',
  '',
  '普通链接：[项目仓库](https://github.com/y-yushu/ys-markdown-lit)，行内代码：`mode = "dark"`。',
  '',
  '> 深色引用块需要保持边线、背景和文字之间的层次。',
  '',
  '```json',
  '{',
  '  "mode": "dark",',
  '  "appearance": "blue"',
  '}',
  '```'
].join('\n')

const tokenOverrideContent = [
  '## Token 覆盖',
  '',
  '宿主容器设置 `--ys-md-link: #00aa00` 后，链接颜色会覆盖 blue 主题预设。',
  '',
  '[查看项目仓库](https://github.com/y-yushu/ys-markdown-lit)',
  '',
  '> 引用块左侧强调色也会跟随链接 token。'
].join('\n')

const customCssContent = [
  '## Custom CSS 影响区域',
  '',
  '这个示例只保留会被 `customCss` 影响的表格行和列表项。',
  '',
  '- 点击或按下这一项时会使用自定义 active 颜色',
  '- 第二个列表项用于对比',
  '',
  '| 语法 | 状态 |',
  '| --- | --- |',
  '| 表格行 hover | 使用 customCss 背景色 |',
  '| 列表项 active | 使用 customCss 文字色 |'
].join('\n')

const customCss = `
.ys-md-tr:hover {
  background: rgba(37, 99, 235, 0.08);
}

.ys-md-li:active {
  color: #2563eb;
}
`

const renderComponent = (args: YsMdRenderingArgs) =>
  keyed(
    `${args.html}-${args.linkify}`,
    html`<ys-md-rendering
      .content=${args.content}
      .density=${args.density}
      .appearance=${args.appearance}
      .size=${args.size}
      .mode=${args.mode}
      .breaks=${args.breaks}
      .customStyles=${args.customStyles}
      .customCss=${args.customCss}
      md-html=${String(args.html)}
      md-linkify=${String(args.linkify)}
      @link-click=${args.onLinkClick}
    ></ys-md-rendering>`
  )

const renderStory = (args: YsMdRenderingArgs) => html` <div style="max-width: 820px; padding: 16px;">${renderComponent(args)}</div> `

const renderTokenOverrideStory = (args: YsMdRenderingArgs) => html`
  <div style="max-width: 820px; padding: 16px; --ys-md-link: #00aa00;">${renderComponent(args)}</div>
`

const renderCompactStory = (args: YsMdRenderingArgs) => html`
  <div style="max-width: 390px; padding: 12px; border: 1px solid #e5e7eb; border-radius: 12px;">${renderComponent(args)}</div>
`

const meta = {
  title: 'Components/YsMdRendering',
  tags: ['autodocs'],
  render: renderStory,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Markdown 流式输出渲染组件，支持 density（排版密度）、blue 外观、明暗模式与字号调整。'
      }
    }
  },
  argTypes: {
    content: {
      control: 'text',
      description: 'Markdown 内容'
    },
    density: {
      control: { type: 'select' },
      options: ['streaming', 'compact'],
      description: '排版密度：streaming 流式阅读 / compact 紧凑均匀'
    },
    appearance: {
      control: { type: 'select' },
      options: ['blue'],
      description: '外观色板，当前仅保留 blue'
    },
    mode: {
      control: { type: 'inline-radio' },
      options: ['', 'light', 'dark'],
      description: '明暗模式，空值表示跟随系统'
    },
    size: {
      control: { type: 'range', min: 12, max: 22, step: 1 },
      description: '基础字号'
    },
    breaks: {
      control: 'boolean',
      description: '软换行转 br'
    },
    html: {
      name: 'md-html',
      control: 'boolean',
      description: '透传 markdown-it 的 html 选项：是否解析 Markdown 中的 HTML 片段'
    },
    linkify: {
      name: 'md-linkify',
      control: 'boolean',
      description: '透传 markdown-it 的 linkify 选项：是否把裸 URL 自动识别为链接，不影响 [text](url) 语法'
    },
    customCss: {
      control: 'text',
      description: '注入 Shadow Root 的 CSS'
    },
    customStyles: {
      control: false,
      table: { disable: true }
    },
    onLinkClick: {
      control: false,
      table: { disable: true }
    }
  },
  args: {
    content: markdownShowcaseContent,
    density: 'streaming',
    appearance: 'blue',
    size: 16,
    mode: '',
    breaks: true,
    html: true,
    linkify: false,
    customStyles: {},
    customCss: '',
    onLinkClick: fn()
  }
} satisfies Meta<YsMdRenderingArgs>

export default meta
type Story = StoryObj<YsMdRenderingArgs>

export const Playground: Story = {}

export const StreamingBlue: Story = {
  args: {
    content: streamingContent,
    density: 'streaming',
    appearance: 'blue'
  }
}

export const CompactBlue: Story = {
  render: renderCompactStory,
  args: {
    content: compactContent,
    density: 'compact',
    appearance: 'blue',
    size: 15
  }
}

export const DarkMode: Story = {
  args: {
    content: darkModeContent,
    mode: 'dark'
  }
}

export const TokenOverride: Story = {
  render: renderTokenOverrideStory,
  args: {
    content: tokenOverrideContent,
    appearance: 'blue'
  },
  parameters: {
    docs: {
      description: {
        story: '宿主 CSS 设置 `--ys-md-link: #00aa00` 覆盖 blue 主题的 preset 链接色。'
      }
    }
  }
}

export const CustomCss: Story = {
  args: {
    content: customCssContent,
    customCss
  }
}
