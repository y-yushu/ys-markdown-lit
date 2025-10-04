<script setup lang="ts">
import PageMain from '@/components/PageMain/index.vue'
import ExampleBox from '@/components/ExampleBox/index.vue'
import ExampleThink from '@/example/example-think/index.vue'
import ExampleThinkTxt from '@/example/example-think/index.txt?raw'
import ExampleThinkFlow from '@/example/example-think-flow/index.vue'
import ExampleThinkFlowTxt from '@/example/example-think-flow/index.txt?raw'

const codes1: CodeItem[] = [
  {
    name: 'vue3',
    type: 'vue3',
    code: ExampleThinkTxt
  }
]

const codes2: CodeItem[] = [
  {
    name: 'vue3',
    type: 'vue3',
    code: ExampleThinkFlowTxt
  }
]
</script>

<template>
  <page-main>
    <h1 class="text-2xl font-bold">think 插件</h1>

    <div>think 渲染插件，渲染特殊思考样式</div>

    <ExampleBox :codes="codes1">
      <ExampleThink />
    </ExampleBox>

    <div>流式输出</div>

    <ExampleBox :codes="codes2">
      <ExampleThinkFlow />
    </ExampleBox>
  </page-main>
</template>
