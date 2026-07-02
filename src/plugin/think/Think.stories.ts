import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'

import '../../YsMdRendering'
import './index'

interface ThinkArgs {
  content: string
}

const content = [
  '## Think 样式',
  '',
  '```think',
  '这是通过 think 标识渲染的代码块。',
  '```',
  '',
  '```thinking',
  '这是通过 thinking 标识渲染的代码块。',
  '```',
  '',
  '<think>',
  '这是通过 think 标签渲染的内容。',
  '</think>',
  '',
  '正文输出。',
].join('\n')

const meta = {
  title: 'Plugins/Think',
  tags: ['autodocs'],
  render: (args: ThinkArgs) => html`
    <div style="max-width: 880px; padding: 16px;">
      <ys-md-rendering .content=${args.content}>
        <ys-think></ys-think>
      </ys-md-rendering>
    </div>
  `,
  argTypes: {
    content: { control: 'text' },
  },
  args: {
    content,
  },
} satisfies Meta<ThinkArgs>

export default meta
type Story = StoryObj<ThinkArgs>

export const Basic: Story = {}
