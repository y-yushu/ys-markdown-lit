<script setup lang="ts">
import { ref } from 'vue'

const mdstr = ref(`# 标题1

## 标题2
### 标题3

---

| 表头1 | 表头2 |
|-------|-------|
| 单元格11 | 单元格12 |
| 单元格21 | 单元格22 |`)

const style = {
  // 修改段落颜色
  '--tw-prose-body': 'blue',
  // 修改标题颜色
  '--tw-prose-headings': 'red'
}
</script>

<template>
  <ys-md-rendering :content="mdstr" :style="style"></ys-md-rendering>
</template>
