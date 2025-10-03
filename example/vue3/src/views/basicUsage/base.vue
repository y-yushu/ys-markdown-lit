<script setup lang="ts">
import { NTable } from 'naive-ui'
import PageMain from '@/components/PageMain/index.vue'
import ExampleBox from '@/components/ExampleBox/index.vue'
import ExampleBase from '@/example/example-base/index.vue'
import ExampleBaseTxt from '@/example/example-base/index.txt?raw'
import ExampleFlow from '@/example/example-flow/index.vue'
import ExampleFlowTxt from '@/example/example-flow/index.txt?raw'

const codes1: CodeItem[] = [
  {
    name: 'vue3',
    type: 'html',
    code: ExampleBaseTxt
  }
]

const codes2: CodeItem[] = [
  {
    name: 'vue3',
    type: 'html',
    code: ExampleFlowTxt
  }
]
</script>

<template>
  <page-main>
    <h1 class="text-2xl font-bold">基础使用</h1>

    <ExampleBox :codes="codes1">
      <ExampleBase />
    </ExampleBox>

    <h1 class="text-2xl font-bold">流输出</h1>

    <ExampleBox :codes="codes2">
      <ExampleFlow />
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
          <td>content</td>
          <td>string</td>
          <td>''</td>
          <td>Markdown 内容</td>
        </tr>
        <tr>
          <td>breaks</td>
          <td>boolean</td>
          <td>false</td>
          <td>是否把软换行识别为换行</td>
        </tr>
      </tbody>
    </n-table>
  </page-main>
</template>
