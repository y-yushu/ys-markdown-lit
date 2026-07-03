import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import { keyed } from 'lit/directives/keyed.js'
import { fn } from 'storybook/test'

import './index'

type MarkdownDensity = 'streaming' | 'compact'
type MarkdownAppearance = 'blue' | 'red' | 'green'
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
  '<p><input type="checkbox" checked disabled> 已完成：主组件样式调整</p>',
  '<p><input type="checkbox" disabled> 待完成：插件视觉统一</p>',
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
        component: 'Markdown 流式输出渲染组件，支持 density（排版密度）与 appearance（外观色板）两维主题。'
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
      options: ['blue', 'red', 'green'],
      description: '外观色板'
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
      control: 'boolean',
      description: '解析 HTML'
    },
    linkify: {
      control: 'boolean',
      description: '自动识别链接'
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
    density: 'streaming',
    appearance: 'blue'
  }
}

export const CompactBlue: Story = {
  render: renderCompactStory,
  args: {
    density: 'compact',
    appearance: 'blue',
    size: 15
  }
}

export const AppearanceRed: Story = {
  args: {
    appearance: 'red'
  }
}

export const AppearanceGreen: Story = {
  args: {
    appearance: 'green'
  }
}

export const DarkMode: Story = {
  args: {
    mode: 'dark'
  }
}

export const TokenOverride: Story = {
  render: renderTokenOverrideStory,
  args: {
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
    customCss
  }
}
