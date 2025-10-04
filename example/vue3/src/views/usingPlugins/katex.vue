<script setup lang="ts">
import PageMain from '@/components/PageMain/index.vue'
import ExampleBox from '@/components/ExampleBox/index.vue'
import ExampleKatex from '@/example/example-katex/index.vue'
import ExampleKatexTxt from '@/example/example-katex/index.txt?raw'
import ExampleKatexFlow from '@/example/example-katex-flow/index.vue'
import ExampleKatexFlowTxt from '@/example/example-katex-flow/index.txt?raw'

const codes1: CodeItem[] = [
  {
    name: 'vue3',
    type: 'vue3',
    code: ExampleKatexTxt
  }
]

const codes2: CodeItem[] = [
  {
    name: 'vue3',
    type: 'vue3',
    code: ExampleKatexFlowTxt
  }
]
</script>

<template>
  <page-main>
    <h1 class="text-2xl font-bold">katex 插件</h1>

    <div>katex 渲染插件，支持在Markdown中渲染LaTeX数学表达式</div>

    <ExampleBox :codes="codes1">
      <ExampleKatex />
    </ExampleBox>

    <div></div>

    <ExampleBox :codes="codes2">
      <ExampleKatexFlow />
    </ExampleBox>
  </page-main>
</template>
