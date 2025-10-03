<script setup lang="ts">
import { ref } from 'vue'

const mdstr = ref(`# 小标题

**加粗**
*斜体*
\`代码片段\`

- 列表项1
- 列表项2

[链接](https://example.com)`)
</script>

<template>
  <ys-md-rendering :content="mdstr"></ys-md-rendering>
</template>
