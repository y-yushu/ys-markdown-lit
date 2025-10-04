<script setup lang="ts">
import PageMain from '@/components/PageMain/index.vue'
import ExampleBox from '@/components/ExampleBox/index.vue'
import ExampleEcharts from '@/example/example-echarts/index.vue'
import ExampleEchartsTxt from '@/example/example-echarts/index.txt?raw'
import ExampleEchartsFlow from '@/example/example-echarts-flow/index.vue'
import ExampleEchartsFlowTxt from '@/example/example-echarts-flow/index.txt?raw'

const codes1: CodeItem[] = [
  {
    name: 'vue3',
    type: 'vue3',
    code: ExampleEchartsTxt
  }
]

const codes2: CodeItem[] = [
  {
    name: 'vue3',
    type: 'vue3',
    code: ExampleEchartsFlowTxt
  }
]
</script>

<template>
  <page-main>
    <h1 class="text-2xl font-bold">echarts 插件</h1>

    <div>echarts 渲染插件，不支持option中配置的echarts方法，如：echarts的渐变色方法等</div>

    <ExampleBox :codes="codes1">
      <ExampleEcharts />
    </ExampleBox>

    <div>在流输出中，echarts输出完成前会有等待动画，等待动画结束后，echarts会被渲染出来</div>
    <div>一条数据重新渲染时，如果缓存了echarts的实例，第二次会直接加载缓存的实例，不会重新渲染</div>

    <ExampleBox :codes="codes2">
      <ExampleEchartsFlow />
    </ExampleBox>
  </page-main>
</template>
