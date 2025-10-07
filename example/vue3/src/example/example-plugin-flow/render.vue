<!-- CardAuto.vue -->
<script setup>
defineProps({
  title: { type: String, default: '' },
  desc: { type: String, default: '' }
})
</script>

<template>
  <div class="max-w-sm overflow-hidden rounded-2xl border-2 border-blue-400 bg-white shadow-lg">
    <!-- 加载状态 -->
    <div v-if="!title || !desc" class="animate-pulse p-6">
      <!-- 更明显：两段动画条 -->
      <div class="mb-4 h-7 w-36 rounded bg-blue-300"></div>
      <div class="h-5 w-full rounded bg-blue-200"></div>
    </div>

    <!-- 正常内容 -->
    <div v-else>
      <!-- 标题行：蓝色背景，白色文字 -->
      <div class="bg-blue-500 px-6 py-3">
        <h3 class="text-lg font-semibold text-white">{{ title }}</h3>
      </div>
      <!-- 描述区：蓝色文字，自动换行 -->
      <p class="p-6 text-sm whitespace-pre-wrap text-blue-600">{{ desc }}</p>
    </div>
  </div>
</template>
