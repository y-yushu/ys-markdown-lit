<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps<{
  content: string
}>()
</script>

<template>
  <div class="type2-wrapper">
    <b class="type1-label">组件2：</b>
    <span class="type1-content">{{ props.content }}</span>
  </div>
</template>
