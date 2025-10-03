<script setup lang="ts">
import { ref, computed } from 'vue'

const mdstr = ref(`# 标题1

## 标题2
### 标题3

---

| 表头1 | 表头2 |
|-------|-------|
| 单元格11 | 单元格12 |
| 单元格21 | 单元格22 |`)

const mode = ref('')

// 根据 mode 或系统主题计算背景颜色
const bgColor = computed(() => {
  if (mode.value === 'light') return '#f5f5f5'
  if (mode.value === 'dark') return '#1e1e1e'
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? '#1e1e1e' : '#f5f5f5'
})

const mdRendering = ref()
</script>

<template>
  <div :style="{ backgroundColor: bgColor }">
    <div class="mb-4 space-x-2">
      <button class="cursor-pointer rounded-md bg-blue-500 px-2 py-1 text-white hover:bg-blue-600 active:bg-blue-700" @click="mode = ''">自动</button>
      <button class="cursor-pointer rounded-md bg-blue-500 px-2 py-1 text-white hover:bg-blue-600 active:bg-blue-700" @click="mode = 'light'">浅色</button>
      <button class="cursor-pointer rounded-md bg-blue-500 px-2 py-1 text-white hover:bg-blue-600 active:bg-blue-700" @click="mode = 'dark'">深色</button>
    </div>
    <ys-md-rendering ref="mdRendering" :content="mdstr" :mode="mode"></ys-md-rendering>
  </div>
</template>
