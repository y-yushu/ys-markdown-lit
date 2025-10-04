<script setup lang="ts">
import { ref } from 'vue'
import { NButton } from 'naive-ui'
import 'ys-md-rendering'
import 'ys-md-rendering/plugin/ys-svg'

const text = `### svg图标渲染

\`\`\`svg
<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000">
<rect x="75" y="75" width="50" height="50" fill="blue">
<animateTransform
attributeName="transform"
type="rotate"
from="0 100 100"
to="360 100 100"
dur="3s"
repeatCount="indefinite"
/>
</rect>
<circle cx="100" cy="100" r="2" fill="red"/>
</svg>
\`\`\`
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
    <ys-svg></ys-svg>
  </ys-md-rendering>
</template>
