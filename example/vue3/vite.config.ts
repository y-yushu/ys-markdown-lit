import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const webComponents = [
  'ys-md-rendering',
  'ys-render' // 直接写全名
  // 'other-tag'
]

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // ys-md-rendering 为 Web Components
          isCustomElement: tag => webComponents.includes(tag)
        }
      }
    })
  ]
})
