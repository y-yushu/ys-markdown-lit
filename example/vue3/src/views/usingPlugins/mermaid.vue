<script setup lang="ts">
import { NTable } from 'naive-ui'
import PageMain from '@/components/PageMain/index.vue'
import ExampleBox from '@/components/ExampleBox/index.vue'
import ExampleMermaid from '@/example/example-mermaid/index.vue'
import ExampleMermaidTxt from '@/example/example-mermaid/index.txt?raw'
import ExampleMermaidFlow from '@/example/example-mermaid-flow/index.vue'
import ExampleMermaidFlowTxt from '@/example/example-mermaid-flow/index.txt?raw'


const codes1: CodeItem[] = [
  {
    name: 'vue3',
    type: 'vue3',
    code: ExampleMermaidTxt
  }
]

const codes2: CodeItem[] = [
  {
    name: 'vue3',
    type: 'vue3',
    code: ExampleMermaidFlowTxt
  }
]
</script>

<template>
  <page-main>
    <h1 class="text-2xl font-bold">mermaid 插件</h1>

    <div>mermaid 渲染插件，支持在Markdown中渲染mermaid图表</div>

    <ExampleBox :codes="codes1">
      <ExampleMermaid />
    </ExampleBox>

    <div>流输出中的错误处理</div>

    <ExampleBox :codes="codes2">
      <ExampleMermaidFlow />
    </ExampleBox>

    <h1 class="text-2xl font-bold">API</h1>
    <n-table :bordered="false" :single-line="false">
      <thead>
        <tr>
          <th>名称</th>
          <th>类型</th>
          <th>默认值</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>initial-status</td>
          <td>'code' | 'view'</td>
          <td>'code'</td>
          <td>初始状态，'code' 为代码状态，'view' 为视图状态</td>
        </tr>
        <tr>
          <td>error-handling</td>
          <td>'errorHandling' | 'notHandled'</td>
          <td>notHandled</td>
          <td>错误处理策略，为'errorHandling'时，直接提示渲染错误；为'notHandled' 时，保留之前渲染内容</td>
        </tr>
      </tbody>
    </n-table>
  </page-main>
</template>
