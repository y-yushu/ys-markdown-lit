import { defineConfig } from 'vite'

export default defineConfig({
  //   build: {
  //     rollupOptions: {
  //       output: {
  //         manualChunks(id) {
  //           // 示例：按模块路径拆分
  //           //   if (id.includes('src/components/core/')) {
  //           if (id.includes('src/components/my-element/')) {
  //             return 'core-components'
  //           }
  //           if (id.includes('src/components/ui/')) {
  //             return 'ui-components'
  //           }
  //           if (id.includes('src/utils/')) {
  //             return 'shared-utils'
  //           }
  //           // 第三方依赖单独打包
  //           if (id.includes('node_modules')) {
  //             return 'vendor'
  //           }
  //         }
  //       }
  //     },
  //     chunkSizeWarningLimit: 1024 // 提高块大小警告阈值
  //   }
})
