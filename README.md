# YS MD Rendering - Markdown 自定义渲染组件

[![npm 版本](https://badge.fury.io/js/ys-md-rendering.svg)](https://www.npmjs.com/package/ys-md-rendering)

一套可定制的 Web 组件集合，用于自定义 Markdown 渲染功能，支持插件扩展。
通过markdown-it进行markdown解析，通过lit进行渲染

## 安装

通过 npm 安装：

```bash
npm install ys-md-rendering
```

或使用 pnpm：

```bash
pnpm add ys-md-rendering
```

## 使用方式

### 基础用法

在 Vue 组件中导入主组件和所需的插件：

```vue
<script setup lang="ts">
import 'ys-md-rendering'
import { ref } from 'vue'

const content = ref('# 你好世界\n\n这里是Markdown内容')
</script>

<template>
  <ys-md-rendering
    :content="content"
    density="streaming"
    appearance="blue"
    mode="light"
    :size="16"
  />
</template>
```

## 示例文档

[示例文档](https://y-yushu.github.io/ys-markdown-lit/)

## 更新记录

#### 0.3.0

- refact: 升级vite8
- refact: 移除tailwind
- refact: 通过storybook重构

#### 0.2.5

- feat: `CodeInline`行内样式调整
- feat: 增加`custom-css`属性支持，可以直接传入css实现样式控制
- feat: 增加`code_block`支持
- feat: table元素外层包了一层`.table`的div元素，方便样式重写

#### 0.2.4

- fix: 解决超链接点击没有传递text问题
- feat: 增加HEX颜色识别功能
- feat: 添加`@mdit/plugin-mark`支持

#### 0.2.3

- fix: 解决增量更新时，自定义组件iscomplete属性未更新问题
