import { defineStore } from 'pinia'
import { pinia } from './index'

// 定义状态的类型
interface PublicState {
  tool: string
}

const tool = localStorage.getItem('use-tool') || 'vue3'

export const usePublicStore = defineStore('public', {
  state: (): PublicState => ({ tool }),
  actions: {
    setTool(tool: string) {
      this.tool = tool
      localStorage.setItem('use-tool', tool)
    }
  }
})

/**
 * @description 在 SPA 应用中可用于在 pinia 实例被激活前使用 store
 * @description 在 SSR 应用中可用于在 setup 外使用 store
 */
export const usePublicStoreOutside = () => {
  return usePublicStore(pinia)
}
