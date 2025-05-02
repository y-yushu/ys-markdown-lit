import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    target: 'esnext',
    lib: {
      entry: {
        'ys-md-rendering': path.resolve(__dirname, 'src/YsMdRendering/index.ts'),
        'plugin/ys-code-highlight': path.resolve(__dirname, 'src/plugin/code-highlight/index.ts'),
        'plugin/ys-katex': path.resolve(__dirname, 'src/plugin/katex/index.ts'),
        'plugin/ys-echarts': path.resolve(__dirname, 'src/plugin/echarts/index.ts'),
        'plugin/ys-think': path.resolve(__dirname, 'src/plugin/think/index.ts'),
        'plugin/ys-svg': path.resolve(__dirname, 'src/plugin/svg/index.ts')
      },
      name: 'YsMdRendering',
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.${format}.js`
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {
          lit: 'lit'
        }
      }
    }
  }
})
