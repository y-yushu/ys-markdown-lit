<script setup lang="ts">
import PageMain from '@/components/PageMain/index.vue'
import ExampleBox from '@/components/ExampleBox/index.vue'
import ExampleSvg from '@/example/example-svg/index.vue'
import ExampleSvgTxt from '@/example/example-svg/index.txt?raw'
import ExampleSvgFlow from '@/example/example-svg-flow/index.vue'
import ExampleSvgFlowTxt from '@/example/example-svg-flow/index.txt?raw'


const codes1: CodeItem[] = [
  {
    name: 'vue3',
    type: 'vue3',
    code: ExampleSvgTxt
  }
]

const codes2: CodeItem[] = [
  {
    name: 'vue3',
    type: 'vue3',
    code: ExampleSvgFlowTxt
  }
]
</script>

<template>
  <page-main>
    <h1 class="text-2xl font-bold">svg增强插件</h1>

    <div>svg 渲染插件，支持在Markdown中渲染svg</div>

    <ExampleBox :codes="codes1">
      <ExampleSvg />
    </ExampleBox>

    <div>流输出中的错误处理</div>

    <ExampleBox :codes="codes2">
      <ExampleSvgFlow />
    </ExampleBox>
  </page-main>
</template>
