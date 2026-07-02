import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'

import '../../YsMdRendering'
import './index'

interface EchartsArgs {
  content: string
}

const content = [
  '## ECharts 图表',
  '',
  '<echarts>',
  '{"xAxis":{"type":"category","data":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},"yAxis":{"type":"value"},"series":[{"data":[150,230,224,218,135,147,260],"type":"line"}]}',
  '</echarts>',
  '',
  '> 图表由 `ys-echarts` 插件注册并渲染。',
].join('\n')

const meta = {
  title: 'Plugins/Echarts',
  tags: ['autodocs'],
  render: (args: EchartsArgs) => html`
    <div style="max-width: 880px; padding: 16px;">
      <ys-md-rendering .content=${args.content}>
        <ys-echarts></ys-echarts>
      </ys-md-rendering>
    </div>
  `,
  argTypes: {
    content: { control: 'text' },
  },
  args: {
    content,
  },
} satisfies Meta<EchartsArgs>

export default meta
type Story = StoryObj<EchartsArgs>

export const Basic: Story = {}
