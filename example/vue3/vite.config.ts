import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'

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

function copyIndexTo404() {
  return {
    name: 'copy-index-to-404',
    closeBundle() {
      const outDir = path.resolve(__dirname, '../../docs')
      const indexPath = path.join(outDir, 'index.html')
      const notFoundPath = path.join(outDir, '404.html')

      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, notFoundPath)
        console.log('✅ 复制 index.html → 404.html 成功')
      } else {
        console.warn('⚠️ 未找到 index.html，无法生成 404.html')
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: '/ys-markdown-lit/',
  build: {
    outDir: path.resolve(__dirname, '../../docs'),
    emptyOutDir: true, // 打包时清空目录，避免旧文件残留
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
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
    tailwindcss(),
    copyIndexTo404()
  ],
  resolve: {
    alias: {
      '@': '/src',
      '@types': '/types'
    }
  }
})
