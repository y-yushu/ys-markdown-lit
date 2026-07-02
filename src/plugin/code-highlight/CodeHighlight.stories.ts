import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import { fn } from 'storybook/test'

import '../../YsMdRendering'
import './index'

interface CodeHighlightArgs {
  content: string
  noWordWrap: boolean
  onCopyText?: (event: CustomEvent) => void
}

const content = [
  '## 代码高亮',
  '',
  '```ts',
  'type User = {',
  '  name: string',
  '  age: number',
  '}',
  '',
  'const user: User = { name: "Alice", age: 18 }',
  'console.log(user)',
  '```',
  '',
  '```sql',
  "SELECT 'Hello, World!' AS greeting;",
  '```',
].join('\n')

const meta = {
  title: 'Plugins/CodeHighlight',
  tags: ['autodocs'],
  render: (args: CodeHighlightArgs) => html`
    <div style="max-width: 880px; padding: 16px;">
      <ys-md-rendering .content=${args.content}>
        <ys-code-highlight
          ?no-word-wrap=${args.noWordWrap}
          @copy-text=${args.onCopyText}
        ></ys-code-highlight>
      </ys-md-rendering>
    </div>
  `,
  argTypes: {
    content: { control: 'text' },
  },
  args: {
    content,
    noWordWrap: false,
    onCopyText: fn(),
  },
} satisfies Meta<CodeHighlightArgs>

export default meta
type Story = StoryObj<CodeHighlightArgs>

export const Basic: Story = {}

export const NoWordWrap: Story = {
  args: {
    noWordWrap: true,
  },
}
