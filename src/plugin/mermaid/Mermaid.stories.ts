import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'

import '../../YsMdRendering'
import './index'

interface MermaidArgs {
  content: string
  initialStatus: 'code' | 'view'
  errorHandlingType: 'notHandled' | 'handled'
}

const content = [
  '## Mermaid 图表',
  '',
  '```mermaid',
  'pie title Pets adopted by volunteers',
  '    "Dogs" : 386',
  '    "Cats" : 85',
  '    "Rats" : 15',
  '```',
  '',
  '```mermaid',
  'flowchart TD',
  '    A[Start] --> B{Ready?}',
  '    B -->|Yes| C[Render]',
  '    B -->|No| D[Edit]',
  '```',
].join('\n')

const meta = {
  title: 'Plugins/Mermaid',
  tags: ['autodocs'],
  render: (args: MermaidArgs) => html`
    <div style="max-width: 880px; padding: 16px;">
      <ys-md-rendering .content=${args.content}>
        <ys-mermaid
          initial-status=${args.initialStatus}
          error-handling=${args.errorHandlingType}
        ></ys-mermaid>
      </ys-md-rendering>
    </div>
  `,
  argTypes: {
    content: { control: 'text' },
    initialStatus: {
      control: { type: 'select' },
      options: ['code', 'view'],
    },
    errorHandlingType: {
      control: { type: 'select' },
      options: ['notHandled', 'handled'],
    },
  },
  args: {
    content,
    initialStatus: 'view',
    errorHandlingType: 'notHandled',
  },
} satisfies Meta<MermaidArgs>

export default meta
type Story = StoryObj<MermaidArgs>

export const Basic: Story = {}
