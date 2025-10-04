<script setup lang="ts">
import PageMain from '@/components/PageMain/index.vue'
import CodeBlock from '@/components/CodeBlock/index.vue'

const codes1: CodeItem[] = [
  {
    name: 'pnpm',
    type: 'js',
    code: `pnpm add ys-md-rendering`
  },
  {
    name: 'npm',
    type: 'js',
    code: `npm i ys-md-rendering`
  }
]

const codes2: CodeItem[] = [
  {
    name: '注册使用',
    type: 'js',
    code: `import 'ys-md-rendering'`
  }
]
</script>

<template>
  <page-main>
    <h1>项目说明</h1>
    <div>一套可定制的 Web 组件集合，用于自定义 Markdown 渲染功能，支持插件扩展。 通过markdown-it解析markdown内容，通过Lit渲染</div>

    <h2>安装</h2>
    <code-block class="col-span-1" :codes="codes1"></code-block>

    <h2>使用方式</h2>
    <code-block class="col-span-1" :codes="codes2"></code-block>
    <span>可在main.ts中全局引入，也可在组件中局部引入</span>
  </page-main>
</template>
