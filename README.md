# YS MD Rendering - Markdown 自定义渲染组件

[![npm 版本](https://badge.fury.io/js/ys-md-rendering.svg)](https://badge.fury.io/js/ys-md-rendering)

一套可定制的 Web 组件集合，用于自定义 Markdown 渲染功能，支持插件扩展。
通过markdown-it进行markdown解析，通过lit进行渲染

## 安装

通过 npm 安装：

```bash
npm install ys-md-rendering
```

或使用 yarn：

```bash
yarn add ys-md-rendering
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
import 'ys-md-rendering/plugin/ys-code-highlight' // 代码高亮
import 'ys-md-rendering/plugin/ys-katex' // 数学公式
import 'ys-md-rendering/plugin/ys-echarts' // 图表渲染
import 'ys-md-rendering/plugin/ys-think' // 特殊思考样式
import 'ys-md-rendering/plugin/ys-svg' // SVG增强
import 'ys-md-rendering/plugin/ys-mermaid' // MerMaid渲染

import { ref } from 'vue'

const content = ref('# 你好世界\n\n这里是Markdown内容')
</script>

<template>
  <ys-md-rendering :content="content">
    <ys-code-highlight></ys-code-highlight>
    <ys-katex></ys-katex>
    <ys-echarts></ys-echarts>
    <ys-think></ys-think>
    <ys-svg></ys-svg>
    <ys-mermaid></ys-mermaid>
  </ys-md-rendering>
</template>
```

### 可用插件

1. **代码高亮** (`ys-code-highlight`)

   - 使用 highlight.js 为代码块提供语法高亮功能

| 方法      | 效果         |
| --------- | ------------ |
| copy-text | 点击复制按钮 |

2. **数学公式** (`ys-katex`)

   - 使用 KaTeX 渲染精美的数学公式

3. **图表渲染** (`ys-echarts`)

   - 使用 echarts 渲染各种图表

4. **特殊思考样式** (`ys-think`)

   - 专为思维导图设计的可视化组件 纯为老板做的样式

5. **SVG增强** (`ys-svg`)

   - 提供 SVG 渲染支持

6. **Mermaid图渲染** (`ys-mermaid`)

   - Mermaid图渲染

| 参数           | 可选值                       | 效果                 |
| -------------- | ---------------------------- | -------------------- |
| initial-status | `code`/`view`                | 默认状态             |
| error-handling | `errorHandling`/`notHandled` | 面对渲染报错时的处理 |

### 自定义样式参数

#### `mode`

**用途**: 通过属性，控制深色浅色模式，如果不传，则自动切换深色浅色模式

可选：`dark`,`light`

**示例**:

```html
<ys-md-rendering id="render_2" mode="dark"> </ys-md-rendering>
```

#### `customStyles` 

**用途**: 通过属性，覆盖元素样式

**示例**:

可通过`color`属性，实现渲染不同颜色的`table`内文字

```html
<template>
  <div>
    <button @click="test">测试</button>
    <ys-md-rendering :content="content" :style="style" :custom-styles.prop="proseStyles">
      <!-- 其他插件 -->
    </ys-md-rendering>
  </div>
</template>

<script>
import 'ys-md-rendering'

/**
 * 热线通思考渲染,颜色置灰,色号调小
 */
export default {
  name: 'MdRender',
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      size: 12,
      color: 'red'
    }
  },
  computed: {
    style() {
      return {
        '--rem-size': this.size + 'px'
      }
    },
    proseStyles() {
      return {
        table: {
          color: this.color,
          border: '3px solid #00a497'
        }
      }
    }
  },
  methods: {
    test() {
      this.color = this.color === 'red' ? 'blue' : 'red'
    }
  }
}
</script>
```


## 主要特性

- **模块化设计**：按需使用插件
- **框架无关**：兼容 Vue、React、Angular （原生 HTML后续支持）

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

## 文档

详细使用说明和自定义选项请参考[文档网站](#)（即将上线）。

## 参与贡献

欢迎提交 issue 或 pull request 参与贡献。

## 更新记录

#### 0.1.23

- feat: 增加`link-click`事件，点击链接时触发

#### 0.1.22

- feat: `custom-styles`属性增加小驼峰支持
- feat: 优化`ys-mermaid`样式
- fix: 解决初始化时，为传入`mode`，导致的样式问题

#### 0.1.21

- feat: 通过mode为`dark`、`light`控制具体是否为深色模式，如果mode不传或为空，则自动判断深色浅色模式

#### 0.1.20

- fit: 解决`renderHtmlInline`方法可能会渲染出`undefined`问题

#### 0.1.19

- feat: 支持通过class或style覆盖prose使用的css变量

#### 0.1.17

- feat: 增加`breaks`属性区分软换行是否换行
- feat: 更新`customStyles`属性，可直接通过css样式覆盖样式效果
- feat: 取消`customCss`属性
