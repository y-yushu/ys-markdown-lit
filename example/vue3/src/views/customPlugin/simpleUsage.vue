<script setup lang="ts">
import { NTable } from 'naive-ui'
import PageMain from '@/components/PageMain/index.vue'
import ExampleBox from '@/components/ExampleBox/index.vue'
import ExamplePlugin from '@/example/example-plugin/index.vue'
import ExamplePluginTxt from '@/example/example-plugin/index.txt?raw'
import ExamplePluginFlow from '@/example/example-plugin-flow/index.vue'
import ExamplePluginFlowTxt from '@/example/example-plugin-flow/index.txt?raw'

const codes1: CodeItem[] = [
  {
    name: 'vue3',
    type: 'vue3',
    code: ExamplePluginTxt
  }
]

const codes2: CodeItem[] = [
  {
    name: 'vue3',
    type: 'vue3',
    code: ExamplePluginFlowTxt
  }
]

const fang1 = `<key>
内容
</key>`

const fang2 = `\`\`\`key
内容
\`\`\``
</script>

<template>
  <page-main>
    <h1 class="text-2xl font-bold">快捷注册</h1>

    <ExampleBox :codes="codes1">
      <ExamplePlugin />
    </ExampleBox>

    <h1 class="text-2xl font-bold">流输出</h1>

    <ExampleBox :codes="codes2">
      <ExamplePluginFlow />
    </ExampleBox>

    <h1 class="text-2xl font-bold">插件属性</h1>
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
          <td>data-register</td>
          <td>string</td>
          <td>必填</td>
          <td>快捷注册指令，会默认注册两种方式，以`key`为例</td>
        </tr>
      </tbody>
    </n-table>
    方式1：
    <pre class="hljs"><code>{{ fang1 }}</code></pre>
    方式2：
    <pre class="hljs"><code>{{ fang2 }}</code></pre>

    <h1 class="text-2xl font-bold">组件方法</h1>
    <n-table :bordered="false" :single-line="false">
      <thead>
        <tr>
          <th>名称</th>
          <th>类型</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>[key]-instance</td>
          <td>Function</td>
          <td>组件示例创建回调</td>
        </tr>
        <tr>
          <td>[key]-update</td>
          <td>Function</td>
          <td>组件示例更新回调</td>
        </tr>
      </tbody>
    </n-table>

    <h2 class="text-2xl font-bold">组件方法出参</h2>
    <n-table :bordered="false" :single-line="false">
      <thead>
        <tr>
          <th>名称</th>
          <th>类型</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>key</td>
          <td>string</td>
          <td>该示例的唯一键</td>
        </tr>
        <tr>
          <td>type</td>
          <td>string</td>
          <td>该示例的类型，（组件通过`data-register`注册的key）</td>
        </tr>
        <tr>
          <td>el</td>
          <td>HTMLElement</td>
          <td>示例包裹容器</td>
        </tr>
        <tr>
          <td>content</td>
          <td>string</td>
          <td>示例输出内容，纯字符串、json字符串、正则字符串，根据自己需求实现</td>
        </tr>
        <tr>
          <td>iscomplete</td>
          <td>boolean</td>
          <td>示例是否输出完成，如果是json字符串，该参数为true时，代表json字符串输出完成</td>
        </tr>
      </tbody>
    </n-table>
  </page-main>
</template>
