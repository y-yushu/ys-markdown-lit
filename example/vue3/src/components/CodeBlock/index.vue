<script setup lang="ts">
import { ref, defineProps, watch } from 'vue'
import 'highlight.js/styles/atom-one-dark.css'
import { NTabs, NTabPane } from 'naive-ui'
import { usePublicStore } from '@/store/public'
import { renderCode } from './render'

const store = usePublicStore()

interface CodeItem {
  name: string
  type: string
  code: string
}

const props = defineProps<{ codes: CodeItem[] }>()

// 当前激活 tab
const activeTab = ref(props.codes.find(c => c.name === store.tool)?.name || props.codes[0]?.name || '')

// 缓存每个 tab 渲染后的 HTML
const highlightedMap = ref<Record<string, string>>({})

// 渲染并缓存指定 tab 的高亮代码
const renderTab = (tabName: string) => {
  if (highlightedMap.value[tabName]) return
  const item = props.codes.find(c => c.name === tabName)
  if (item) {
    const content = renderCode(item.code, item.type)
    highlightedMap.value[tabName] = content
  }
}

// 初始渲染第一个 tab
renderTab(activeTab.value)

// 切换 tab 时渲染自己的内容并缓存
const handleTabChange = (name: string) => {
  activeTab.value = name
  renderTab(name)
  store.setTool(name)
}

// 监听 props.codes 变化
watch(
  () => props.codes,
  () => {
    highlightedMap.value = {}
    // 优先使用 store.tool，如果不存在则 fallback 到 codes[0]
    const defaultTab = props.codes.find(c => c.name === store.tool)?.name || props.codes[0]?.name || ''
    activeTab.value = defaultTab
    renderTab(activeTab.value)
  },
  { deep: true }
)

// 监听 Pinia store.tool 变化
watch(
  () => store.tool,
  newTool => {
    if (props.codes.some(c => c.name === newTool) && newTool !== activeTab.value) {
      activeTab.value = newTool
      renderTab(newTool)
    }
  }
)
</script>

<template>
  <n-tabs type="line" animated v-model:value="activeTab" @update:value="handleTabChange">
    <n-tab-pane v-for="item in props.codes" :key="item.name" :name="item.name" :tab="item.name">
      <pre class="!my-0 !p-0"><code class="hljs !bg-transparent" v-html="highlightedMap[item.name]"></code></pre>
    </n-tab-pane>
  </n-tabs>
</template>
