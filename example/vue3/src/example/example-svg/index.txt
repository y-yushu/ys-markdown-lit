<script setup lang="ts">
import { ref } from 'vue'
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

const mdstr = ref(text)
</script>

<template>
  <ys-md-rendering :content="mdstr">
    <ys-svg></ys-svg>
  </ys-md-rendering>
</template>
