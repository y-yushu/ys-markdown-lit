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
  <ys-md-rendering :content="content"></ys-md-rendering>
</template>
```

## 示例文档

[示例文档](https://y-yushu.github.io/ys-markdown-lit/)

## 主要特性

- **模块化设计**：按需使用插件
- **框架无关**：兼容 Vue、React、Angular、原生 HTML

## 浏览器支持

支持现代浏览器（Chrome、Firefox、Safari、Edge）的 Web Components 功能。

> 如果vue2项目启动报错，可尝试vue.config.js添加如下配置

```js
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // ....
  transpileDependencies: ['ys-md-rendering']
}
```

## 更新记录

- feat: 增加HEX颜色识别功能

#### 0.2.3

- fix: 解决增量更新时，自定义组件iscomplete属性未更新问题

#### 0.2.2

- fix: 解决通过 block.ruler.at 修改导致的fence判断失败问题

#### 0.2.1

- feat: 重构自定义组件注册方法，升级历史插件

#### 0.1.25

- fix: 修复`ys-mermaid`图表渲染失败时，可能会渲染出错误元素插入body的问题

#### 0.1.23

- feat: 增加`link-click`事件，点击链接时触发
