import { defineConfig } from 'vite'
import { resolve } from 'path'
import { glob } from 'glob'

// 修改 widgetEntries 的构建方式，确保键名不包含 src/widgets/ 前缀
const widgetEntries = glob.sync('src/widgets/**/*.ts').reduce((entries, path) => {
  // 标准化路径分隔符，确保在 Windows 上也能正确处理
  const normalizedPath = path.replace(/\\/g, '/')
  // 提取 widget 名称，移除 src/widgets/ 前缀和 .ts 后缀
  const name = normalizedPath.replace(/^src\/widgets\//, '').replace(/\.ts$/, '')
  // 使用 widgets/ 作为前缀，确保输出到正确的目录
  entries[`widgets/${name}`] = resolve(__dirname, path)
  return entries
}, {})

export default defineConfig({
  define: {
    'process.env': process.env
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.ts'), // 添加主功能组件入口
        ...widgetEntries
      },
      output: {
        dir: 'dist',
        entryFileNames: chunkInfo => {
          if (chunkInfo.name.startsWith('widgets/')) {
            // 确保输出路径正确，不包含 src/widgets
            return `${chunkInfo.name}.js`
          }
          return '[name].js'
        },
        chunkFileNames: chunkInfo => {
          const widgetMatch = chunkInfo.name.match(/^widget-([^-]+)-vendor/)
          if (widgetMatch) {
            const widgetName = widgetMatch[1]
            return `widgets/${widgetName}/vendor-[hash].js`
          } else if (chunkInfo.name === 'widgets-common-vendor') {
            return 'common-vendor-[hash].js'
          }
          return 'assets/[name]-[hash].js' // 主功能组件的chunk文件
        },
        manualChunks: (id, { getModuleInfo }) => {
          // 检查是否是 node_modules 中的模块
          if (id.includes('node_modules')) {
            // 获取引用该模块的文件
            const importers = getModuleInfo(id)?.importers || []

            // 检查是否有来自 widgets 目录的引用
            const widgetImporter = importers.find(imp => imp.includes('src/widgets/'))

            if (widgetImporter) {
              // 提取 widget 名称（例如 katex 或 echarts）
              const widgetName = widgetImporter.match(/src\/widgets\/([^/]+)/)?.[1]
              if (widgetName) {
                // 提取当前模块的库名
                const libName = id.match(/node_modules\/([^/]+)/)?.[1]

                if (libName) {
                  // 检查该库是否只被这个 widget 使用
                  const isLibOnlyUsedByThisWidget = importers.every(imp => imp.includes(`src/widgets/${widgetName}`) || imp.includes('node_modules'))

                  // 检查是否没有其他 widget 使用这个库
                  const isNotUsedByOtherWidgets = !importers.some(imp => imp.includes('src/widgets/') && !imp.includes(`src/widgets/${widgetName}`))

                  // 如果这个库只被当前 widget 使用，将它打包到对应的 widget 中
                  if (isLibOnlyUsedByThisWidget && isNotUsedByOtherWidgets) {
                    return `widget-${widgetName}-vendor`
                  }
                }
              }
            }

            // 检查是否只被 widgets 使用而不被主应用使用
            const isOnlyUsedByWidgets = importers.every(imp => imp.includes('src/widgets/') || imp.includes('node_modules'))

            if (isOnlyUsedByWidgets) {
              return 'widgets-common-vendor'
            }

            // 其他共享依赖
            return 'vendor'
          }
        }
      }
    },
    // 确保 widgets 和主应用分开构建
    lib: {
      entry: resolve(__dirname, 'src/index.ts'), // 修改入口文件
      name: 'YsMdRendering', // 添加库名称
      formats: ['es'], // 确保输出格式为es
      fileName: 'ys-md-rendering' // 自定义输出文件名
    }
  }
})
