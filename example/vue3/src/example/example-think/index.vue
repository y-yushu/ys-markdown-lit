<script setup lang="ts">
import { ref } from 'vue'
import 'ys-md-rendering'
import 'ys-md-rendering/plugin/ys-think'

const text = `### think样式

- fence think标识

\`\`\`think
这是通过think标识渲染的代码块
\`\`\`

- fence thinking标识

\`\`\`thinking
这是通过thinking标识渲染的代码块
\`\`\`

- 内联think

<think>
这是通过think标签渲染的内容
</think>

- 内联thinking

<thinking>
这是通过thinking标签渲染的内容
</thinking>


正文输出
`

const mdstr = ref(text)
</script>

<template>
  <ys-md-rendering :content="mdstr">
    <ys-think></ys-think>
  </ys-md-rendering>
</template>
