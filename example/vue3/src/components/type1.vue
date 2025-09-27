<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps<{
  content: string
}>()
</script>

<template>
  <div class="type1-wrapper">
    <b class="type1-label">组件1：</b>
    <span class="type1-content">{{ props.content }}</span>
  </div>
</template>
