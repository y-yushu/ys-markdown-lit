import type { StorybookConfig } from '@storybook/web-components-vite'
import remarkGfm from 'remark-gfm'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
  stories: ['../docs/storybook/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm]
          }
        }
      }
    }
  ],
  framework: '@storybook/web-components-vite',
  viteFinal: async config =>
    mergeConfig(config, {
      define: {
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      }
    })
}
export default config
