<script setup lang="ts">
import { NTable } from 'naive-ui'
import PageMain from '@/components/PageMain/index.vue'
import ExampleBox from '@/components/ExampleBox/index.vue'
import ExampleCodeHighlight from '@/example/example-code-highlight/index.vue'
import ExampleCodeHighlightTxt from '@/example/example-code-highlight/index.txt?raw'

const codes1: CodeItem[] = [
  {
    name: 'vue3',
    type: 'vue3',
    code: ExampleCodeHighlightTxt
  }
]
</script>

<template>
  <page-main>
    <h1 class="text-2xl font-bold">code-highlight 插件</h1>

    <div>代码高亮插件，默认支持以下语言：</div>
    <div>
      plaintext、bash、c、cpp、csharp、css、dart、go、java、javascript、json、kotlin、lua、markdown、perl、php、powershell、python、r、ruby、rust、scala、sql、swift、typescript、xml、yaml
    </div>
    <div>另外给部分语言做了特殊映射，如：</div>
    <ol>
      <li>js 映射为 'javascript'</li>
      <li>ts 映射为 'typescript'</li>
      <li>py 映射为 'python'</li>
      <li>rb 映射为 'ruby'</li>
      <li>html 映射为 'xml'</li>
      <li>yml 映射为 'yaml'</li>
      <li>md 映射为 'markdown'</li>
      <li>c++ 映射为 'cpp'</li>
      <li>cc 映射为 'cpp'</li>
      <li>hpp 映射为 'cpp'</li>
      <li>c# 映射为 'csharp'</li>
      <li>golang 映射为 'go'</li>
      <li>rs 映射为 'rust'</li>
      <li>SQL 映射为 'sql'</li>
      <li>mysql 映射为 'sql'</li>
      <li>postgres 映射为 'sql'</li>
      <li>pgsql 映射为 'sql'</li>
      <li>sh 映射为 'bash'</li>
      <li>zsh 映射为 'bash'</li>
    </ol>

    <ExampleBox :codes="codes1">
      <ExampleCodeHighlight />
    </ExampleBox>

    <div>可通过添加`no-word-wrap`类名来禁用代码块的自动换行</div>

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
          <td>no-word-wrap</td>
          <td>boolean</td>
          <td>false</td>
          <td>是否禁用代码块的自动换行</td>
        </tr>
      </tbody>
    </n-table>
  </page-main>
</template>
