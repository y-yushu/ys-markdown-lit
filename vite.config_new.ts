import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// 定义子组件入口
const widgets = ['code-highlighting', 'echarts', 'katex', 'think']
const entryPoints = Object.fromEntries(widgets.map(widget => [`widgets/${widget}`, resolve(__dirname, `src/widgets/${widget}/index.ts`)]))

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true, // 自动生成类型入口
      rollupTypes: true // 合并类型声明
    }) // 生成 TypeScript 类型定义
  ],
  build: {
    lib: {
      // 多入口配置
      entry: {
        // 主组件
        YsMdRendering: resolve(__dirname, 'src/YsMdRendering/index.ts'),
        // 子组件
        ...entryPoints,
        // 整体入口（可选）
        index: resolve(__dirname, 'src/index.ts')
      },
      formats: ['es', 'cjs'], // 支持 ES 模块和 CommonJS
      fileName: (format, entryName) => {
        // 自定义输出文件名
        return `${entryName}/index.${format}.js`
      }
    },
    rollupOptions: {
      // 外部化依赖
      external: [
        'lit', // Lit 核心依赖
        'echarts', // echarts 组件依赖
        'katex', // katex 组件依赖
        'highlight.js', // code-highlighting 依赖
        'markdown-it', // markdown 解析依赖
        'nanoid' // ID 生成依赖
      ],
      output: {
        // 保留模块结构
        preserveModules: true,
        preserveModulesRoot: 'src',
        // 自定义 chunk 文件名
        chunkFileNames: 'chunks/[name].[hash].js'
      }
    },
    // 开启 CSS 代码分割（默认启用，确保 CSS 随组件输出）
    cssCodeSplit: true,
    // 开启 source map，便于调试
    sourcemap: true,
    // 优化打包大小
    minify: 'esbuild'
  }
})
