<script setup lang="ts">
import { ref } from 'vue'
import { NButton } from 'naive-ui'
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

- 内联thinking

<thinking>
这是通过thinking标签渲染的内容
</thinking>

- 内联think

<think>
这是通过\`<think></think>\`渲染的内容
</think>

正文输出
`

const mdstr = ref('')

const render = () => {
  let i = 0
  mdstr.value = ''
  const interval = setInterval(() => {
    mdstr.value += text[i]
    i++
    if (!text[i]) clearInterval(interval)
  }, 20)
}
</script>

<template>
  <n-button @click="render">流输出</n-button>
  <ys-md-rendering :content="mdstr">
    <ys-think></ys-think>
  </ys-md-rendering>
</template>
