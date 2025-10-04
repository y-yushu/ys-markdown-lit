<script setup lang="ts">
import { ref } from 'vue'
import 'ys-md-rendering'
import 'ys-md-rendering/plugin/ys-mermaid'

const text = `### Mermaid图表渲染

- 饼图渲染

\`\`\`mermaid
pie title Pets adopted by volunteers
    "Dogs" : 386
    "Cats" : 85
    "Rats" : 15
\`\`\`

- 流程图渲染（错误图像渲染）

\`\`\`mermaid
flowchart TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-ca
\`\`\`

`

const mdstr = ref(text)
</script>

<template>
  <ys-md-rendering :content="mdstr">
    <ys-mermaid initial-status="view"></ys-mermaid>
  </ys-md-rendering>
</template>
