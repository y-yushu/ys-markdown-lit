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

### 自定义样式

组件提供两种自定义样式方式，旧 API 会继续保留：

| API | 类型 | 用途 |
| --- | --- | --- |
| `custom-styles` | `Record<string, any>` | 按标签生成内联 `style`，适合简单样式微调 |
| `custom-css` | `string` | 向组件 Shadow Root 注入完整 CSS，适合选择器、伪类、伪元素、媒体查询和动画 |

#### 使用 `custom-styles`

`custom-styles` 会转换为标签上的内联样式，适合简单、稳定的标签样式覆盖。

```vue
<script setup lang="ts">
import 'ys-md-rendering'

const content = '# 标题\n\n正文内容'
const customStyles = {
  h1: {
    color: '#2563eb',
    fontSize: '28px'
  },
  p: {
    lineHeight: '1.9'
  }
}
</script>

<template>
  <ys-md-rendering :content="content" :custom-styles="customStyles"></ys-md-rendering>
</template>
```

#### 使用 `custom-css`

`custom-css` 会在 `ys-md-rendering` 自身的 Shadow Root 内创建样式表，因此可以选中组件内部的 `.prose` 内容。

```vue
<script setup lang="ts">
import 'ys-md-rendering'

const content = `
| 名称 | 状态 |
| --- | --- |
| A | 正常 |
| B | 待处理 |

[访问链接](https://example.com)
`

const customCss = `
.prose table tr:hover {
  background: rgba(37, 99, 235, 0.08);
}

.prose a::after {
  content: "↗";
  margin-left: 0.25em;
  font-size: 0.85em;
}

@media (max-width: 640px) {
  .prose table {
    font-size: 12px;
  }
}
`
</script>

<template>
  <ys-md-rendering :content="content" :custom-css="customCss"></ys-md-rendering>
</template>
```

建议 `custom-css` 里的选择器统一以 `.prose` 作为作用域前缀，避免影响组件内部的插槽或插件宿主节点。

#### 并存与优先级

`custom-styles` 和 `custom-css` 可以同时使用，但不建议让它们控制同一元素的同一个 CSS 属性。`custom-styles` 生成的是内联 `style`，普通 `custom-css` 规则通常无法覆盖内联样式，除非使用 `!important`。

`custom-css` 只作用于当前 `ys-md-rendering` 的 Shadow Root，不能穿透插件组件自己的 Shadow Root。不要把不可信 Markdown 内容、普通用户输入或未校验的远程内容直接拼进 `custom-css`。

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

#### 0.2.2

- fix: 解决通过 block.ruler.at 修改导致的fence判断失败问题

#### 0.2.1

- feat: 重构自定义组件注册方法，升级历史插件

#### 0.1.25

- fix: 修复`ys-mermaid`图表渲染失败时，可能会渲染出错误元素插入body的问题

#### 0.1.23

- feat: 增加`link-click`事件，点击链接时触发
