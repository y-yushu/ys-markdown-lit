import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'

import '../../YsMdRendering'
import './index'

interface SvgArgs {
  content: string
}

const content = [
  '## SVG 渲染',
  '',
  '```svg',
  '<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">',
  '  <rect x="75" y="75" width="50" height="50" fill="blue">',
  '    <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="3s" repeatCount="indefinite" />',
  '  </rect>',
  '  <circle cx="100" cy="100" r="3" fill="red" />',
  '</svg>',
  '```',
].join('\n')

const meta = {
  title: 'Plugins/Svg',
  tags: ['autodocs'],
  render: (args: SvgArgs) => html`
    <div style="max-width: 880px; padding: 16px;">
      <ys-md-rendering .content=${args.content}>
        <ys-svg></ys-svg>
      </ys-md-rendering>
    </div>
  `,
  argTypes: {
    content: { control: 'text' },
  },
  args: {
    content,
  },
} satisfies Meta<SvgArgs>

export default meta
type Story = StoryObj<SvgArgs>

export const Basic: Story = {}
