<script setup lang="ts">
import { computed, ref } from 'vue'
import { NInputNumber } from 'naive-ui'

const mdstr = ref(`# 标题1

## 标题2
### 标题3

**加粗文本**  
*斜体文本*  
***加粗斜体文本***

> 这是一个引用块，可以包含多行内容。
> 第二行引用。

- 无序列表项1
- 无序列表项2

1. 有序列表项1
2. 有序列表项2


[链接文本](https://example.com)  
![图片alt](https://example.com/image.jpg "图片title")

| 表头1 | 表头2 |
|-------|-------|
| 单元格11 | 单元格12 |
| 单元格21 | 单元格22 |`)

const size = ref(16)

const style = computed(() => ({
  '--rem-size': size.value + 'px'
}))
</script>

<template>
  <n-input-number v-model:value="size" placeholder="最小值" :min="4" />
  <ys-md-rendering :content="mdstr" :style="style"></ys-md-rendering>
</template>
