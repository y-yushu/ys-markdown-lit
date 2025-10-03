<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock/index.vue'
import { NTabs, NTabPane } from 'naive-ui'

defineProps<{ codes: CodeItem[] }>()
</script>

<template>
  <div class="mb-6 grid grid-cols-2 items-stretch gap-4">
    <!-- 左侧代码块 -->
    <div class="col-span-1 flex flex-col rounded-lg border border-gray-300 p-4 shadow-sm">
      <code-block :codes="codes" class="flex-1" />
    </div>

    <!-- 右侧 slot -->
    <div class="col-span-1 flex flex-col rounded-lg border border-gray-300 p-4 shadow-sm">
      <n-tabs type="line">
        <n-tab-pane name="render" tab="渲染">
          <slot />
        </n-tab-pane>
      </n-tabs>
    </div>
  </div>
</template>
