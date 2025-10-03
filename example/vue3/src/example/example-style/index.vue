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
  h1: {
    color: 'red',
    marginBottom: '2px'
  },
  h2: {
    marginTop: '8px',
    marginBottom: '2px'
  },
  h3: {
    marginTop: '8px'
  },
  hr: {
    marginBlock: '5px'
  }
}

// 方法2：通过序列化传递样式
const serializedStyle = JSON.stringify(style)
</script>

<template>
  <ys-md-rendering :content="mdstr" :custom-styles="serializedStyle"></ys-md-rendering>
</template>
