<script setup lang="ts">
import { NScrollbar } from 'naive-ui'
</script>

<template>
  <div class="h-full">
    <n-scrollbar class="h-full px-8 py-6">
      <div class="min-w-full">
        <slot></slot>
      </div>
    </n-scrollbar>
  </div>
</template>
