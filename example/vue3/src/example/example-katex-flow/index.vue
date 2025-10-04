<script setup lang="ts">
import { ref } from 'vue'
import { NButton } from 'naive-ui'
import 'ys-md-rendering'
import 'ys-md-rendering/plugin/ys-katex'

const text = `### Katex数学公式渲染

- 单行公式渲染

$$\\sqrt{a^2 + b^2} = c$$

- 多行公式渲染

$$
\\begin{equation}
  x = a_0 + \\cfrac{1}{a_1 
          + \\cfrac{1}{a_2 
          + \\cfrac{1}{a_3 + \\cfrac{1}{a_4} } } }
\\end{equation}
$$

- 行内公式渲染 $符合渲染

这个是$\\Pi$符号

- 跨行行内公式渲染

这个是\\( 
\\tanh^{-3} 
\\)符号

- 跨行分行公式渲染

这个是\\[
\\tanh^{-4}
\\]符号
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
    <ys-katex></ys-katex>
  </ys-md-rendering>
</template>
