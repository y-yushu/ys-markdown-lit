import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

const webComponents = [
  'ys-md-rendering'
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
