import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

const webComponents = [
  'ys-md-rendering',
  'ys-code-highlight',
  'ys-echarts',
  'ys-katex',
  'ys-svg',
  'ys-mermaid',
  'ys-think'
  // 'other-tag'
]

// https://vite.dev/config/
export default defineConfig({
  base: '/ys-markdown-lit/',
  build: {
    outDir: path.resolve(__dirname, '../../docs'),
    emptyOutDir: true // 打包时清空目录，避免旧文件残留
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // ys-md-rendering 为 Web Components
          isCustomElement: tag => webComponents.includes(tag)
        }
      }
    }),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': '/src',
      '@types': '/types'
    }
  }
})
