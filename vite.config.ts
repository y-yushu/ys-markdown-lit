import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [tailwindcss()],
  define: {
    // 关键配置：替换掉浏览器里不存在的 process
    'process.env.NODE_ENV': JSON.stringify(process.env.VITE_NODE_ENV || 'production')
  },
  build: {
    target: 'esnext',
    lib: {
      entry: {
        'ys-md-rendering': path.resolve(__dirname, 'src/YsMdRendering/index.ts'),
        'plugin/ys-code-highlight': path.resolve(__dirname, 'src/plugin/code-highlight/index.ts'),
        'plugin/ys-katex': path.resolve(__dirname, 'src/plugin/katex/index.ts'),
        'plugin/ys-echarts': path.resolve(__dirname, 'src/plugin/echarts/index.ts'),
        'plugin/ys-think': path.resolve(__dirname, 'src/plugin/think/index.ts'),
        'plugin/ys-svg': path.resolve(__dirname, 'src/plugin/svg/index.ts'),
        'plugin/ys-mermaid': path.resolve(__dirname, 'src/plugin/mermaid/index.ts')
      },
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.${format}.js`
    },
    rollupOptions: {
      // external: ['lit', 'katex', 'echarts', 'markdown-it', 'mermaid', 'highlight.js'],
      output: {
        chunkFileNames: `chunks/[name]-[hash].js`
      }
    }
  }
})
