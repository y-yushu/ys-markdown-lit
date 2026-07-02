import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'

import '../../YsMdRendering'
import './index'

interface KatexArgs {
  content: string
}

const content = [
  '## Katex 数学公式',
  '',
  '单行公式：',
  '',
  '$$\\sqrt{a^2 + b^2} = c$$',
  '',
  '行内公式：这个是 $\\Pi$ 符号。',
  '',
  '多行公式：',
  '',
  '$$',
  '\\begin{equation}',
  '  x = a_0 + \\cfrac{1}{a_1 + \\cfrac{1}{a_2}}',
  '\\end{equation}',
  '$$',
].join('\n')

const meta = {
  title: 'Plugins/Katex',
  tags: ['autodocs'],
  render: (args: KatexArgs) => html`
    <div style="max-width: 880px; padding: 16px;">
      <ys-md-rendering .content=${args.content}>
        <ys-katex></ys-katex>
      </ys-md-rendering>
    </div>
  `,
  argTypes: {
    content: { control: 'text' },
  },
  args: {
    content,
  },
} satisfies Meta<KatexArgs>

export default meta
type Story = StoryObj<KatexArgs>

export const Basic: Story = {}
