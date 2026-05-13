---
name: Markdown 自定义 CSS 扩展
overview: 在不破坏现有 `custom-styles`（JSON → 内联 style）能力的前提下，为 `ys-md-rendering` 新增 `customCss` / `custom-css` 属性，用于把整段 CSS 文本注入组件 Shadow Root，从而支持选择器、伪类、伪元素、媒体查询和动画等完整 CSS 能力。
todos:
  - id: api-design
    content: 新增 Lit property：`customCss`，HTML attribute 为 `custom-css`，默认值为空字符串；保留现有 `customStyles` / `custom-styles` 行为不变
    status: completed
  - id: inject-style
    content: 在 `YsMdRendering` 的 shadow root 内创建并复用一个固定 id 的 `<style>` 节点，使用 `textContent` 同步 `customCss`；避免重复 append，固定插入顺序
    status: completed
  - id: docs-migration
    content: README 增加双轨说明：`custom-styles` 适合简单内联样式，`custom-css` 适合完整 CSS；补充 `.prose` 选择器示例、安全提示和迁移示例
    status: completed
  - id: typings
    content: 同步生成或更新 `types/YsMdRendering/index.d.ts`，确保 TS 用户可以看到 `customCss: string`
    status: completed
  - id: optional-hooks
    content: （可选，不作为本次必要范围）为标准 renderer 输出节点增加 `data-ys-md` 等稳定选择器钩子
    status: pending
isProject: false
---

# 样式自定义：新增 `customCss` 并保留 `custom-styles`

## 目标

本次修改只做一件事：**新增 `customCss` 字符串属性，用于向 `ys-md-rendering` 的 Shadow Root 注入完整 CSS 文本，同时完整保留原来的 `custom-styles` 属性和渲染逻辑。**

这样可以避免历史组件或历史业务配置失效：

- 老用法：继续使用 `custom-styles`，由 `jsonToStyle` 转为各标签的内联 `style`。
- 新用法：使用 `custom-css` / `customCss` 传入整段 CSS，支持 `.prose table tr:hover`、`.prose a::after`、`@media`、`@keyframes` 等完整 CSS 能力。

## 当前现状

- `src/YsMdRendering/index.ts` 已有 `customStyles` 属性，HTML attribute 是 `custom-styles`。
- `customStyles` 会被传入标准渲染分支的 `option.style`。
- `src/YsMdRendering/registerAllCustomRenderers.ts` 中各个 renderer 通过 `jsonToStyle` 生成内联 `style=`。
- 当前方案只能表达普通 CSS 声明，无法表达选择器、伪类、伪元素、媒体查询、动画等完整 CSS。
- 组件内容渲染在 Shadow Root 内，外部页面的全局 CSS 默认不能影响内部 `.prose` 内容；如果要让完整 CSS 生效，样式必须注入同一个 Shadow Root。

## 推荐方向

采用 **双轨样式 API**：


| API | 类型 | HTML attribute | 用途 |
| --- | --- | --- | --- |
| `customStyles` | `Record<string, any>` | `custom-styles` | 保留历史能力：按标签生成内联 style，适合简单样式微调 |
| `customCss` | `string` | `custom-css` | 新增能力：传入完整 CSS 文本，注入 Shadow Root 内的 `<style>` |

命名固定为 `customCss`，而不是 `userCss`，原因是它与已有 `customStyles` 语义更接近，也更容易被使用者理解为同一类自定义样式能力。

## 组件侧实现计划

### 1. 新增属性

在 `src/YsMdRendering/index.ts` 的 `YsMdRendering` 类中新增：

```ts
@property({ type: String, attribute: 'custom-css' })
customCss = ''
```

不要删除、重命名或改变现有 `customStyles`：

```ts
@property({
  type: Object,
  attribute: 'custom-styles',
  converter: ObjectConverter,
  hasChanged: ...
})
customStyles: Record<string, any> = {}
```

### 2. 新增固定样式节点同步方法

在 `YsMdRendering` 内新增私有方法，例如：

```ts
private syncCustomCssStyle() {
  const root = this.shadowRoot
  if (!root) return

  const styleId = 'ys-md-rendering-custom-css'
  let styleElement = root.querySelector<HTMLStyleElement>(`#${styleId}`)

  if (!this.customCss.trim()) {
    styleElement?.remove()
    return
  }

  if (!styleElement) {
    styleElement = document.createElement('style')
    styleElement.id = styleId
    root.appendChild(styleElement)
  }

  styleElement.textContent = this.customCss
}
```

关键要求：

- 使用 `textContent`，不要用 `innerHTML` 或 `unsafeHTML`。
- 复用固定 id 的 `<style>`，不要每次更新都追加新节点。
- 当 `customCss` 为空字符串时，删除对应 `<style>` 或清空内容都可以；推荐删除，避免空节点残留。
- 插入到 shadow root 内，保证 `.prose ...` 选择器能命中组件内部渲染内容。

### 3. 在生命周期中同步

推荐在 `updated()` 中监听 `customCss`：

```ts
protected updated(changedProperties: PropertyValues) {
  if (changedProperties.has('customCss')) {
    this.syncCustomCssStyle()
  }
}
```

注意：当前文件已经有 `willUpdate()`，不要把现有 `mode` 和 `setProseVariables()` 逻辑改坏。可以新增 `updated()`，也可以在现有生命周期中处理，但要保证 `shadowRoot` 已存在。

### 4. 保持 `custom-styles` 旧行为不变

不要改 `registerAllCustomRenderers.ts` 里已有的 `option.style` / `jsonToStyle` 逻辑。本次新增 `customCss` 不应该影响：

- `style=${ifDefined(styleValue)}`
- `customStyles` 传入标准 renderer
- 旧业务中通过 `custom-styles` 控制 `p`、`tr`、`td`、`a` 等标签的样式

### 5. 类型声明

如果执行构建时会重新生成声明文件，则运行类型生成流程即可。

如果需要手动同步，更新：

- `types/YsMdRendering/index.d.ts`

新增：

```ts
customCss: string;
```

## 使用示例

### Vue 中使用完整 CSS

```vue
<script setup lang="ts">
const customCss = `
.prose table tr:hover {
  background: rgba(59, 130, 246, 0.08);
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
  <ys-md-rendering :content="content" :custom-css="customCss" />
</template>
```

### 与旧 `custom-styles` 并存

```vue
<template>
  <ys-md-rendering
    :content="content"
    :custom-styles="customStyles"
    :custom-css="customCss"
  />
</template>
```

建议：同一个 CSS 属性不要同时在 `custom-styles` 和 `custom-css` 中配置。因为 `custom-styles` 生成的是内联 `style`，普通 CSS 规则通常覆盖不了内联样式，除非使用 `!important`。

## 选择器约定

用户传入的 CSS 建议统一以 `.prose` 作为作用域前缀：

```css
.prose p {
  line-height: 1.9;
}

.prose table tr:hover {
  background: rgba(59, 130, 246, 0.08);
}

.prose code::before {
  content: "";
}
```

这样可以避免误伤 shadow root 内的 `<slot>`、插件宿主节点或未来新增的内部结构。

## 优先级说明

- `custom-styles` 生成内联 `style`，优先级高于普通 CSS 规则。
- `custom-css` 注入的是普通 `<style>`，可以覆盖 Tailwind / typography 中同等或更低优先级的规则。
- 如果 `custom-css` 需要覆盖内联 style，只能提高优先级并使用 `!important`，但不推荐把同一属性重复配置在两套 API 中。
- `custom-css` 只能影响当前 `ys-md-rendering` 这个 Shadow Root 内的 DOM。它不能穿透插件组件自己的 Shadow Root。

## 安全边界

- `customCss` 应由应用代码提供受信任 CSS。
- 不要把不可信 Markdown 内容、普通用户输入或远程未校验内容直接拼进 `customCss`。
- 实现时使用 `styleElement.textContent = this.customCss`，不要使用 `innerHTML`。

## 本次不做

- 不删除 `custom-styles`。
- 不重构 `registerAllCustomRenderers.ts` 的所有 renderer。
- 不强制新增 `data-ys-md` 选择器钩子；这可以作为后续 DX 优化。
- 不尝试让 `customCss` 穿透插件组件内部的 Shadow Root。

## 验收标准

- 旧用法 `custom-styles` 仍然可以正常设置标签内联样式。
- 新用法 `custom-css` 可以让 `.prose table tr:hover`、`.prose a::after`、`@media` 等规则在组件内部生效。
- 多次更新 `customCss` 不会产生多个重复 `<style>` 节点。
- 将 `customCss` 设置为空后，旧样式不再残留。
- TypeScript 类型中可以访问 `customCss`。

## 实现文件范围

必须修改：

- `src/YsMdRendering/index.ts`：新增 `customCss` 属性、同步 shadow root 内的固定 `<style>` 节点。
- `README.md`：补充 `custom-styles` 与 `custom-css` 的双轨用法说明。
- `types/YsMdRendering/index.d.ts`：确保发布类型包含 `customCss: string`。

通常不需要修改：

- `src/YsMdRendering/registerAllCustomRenderers.ts`：本次不改变标准 renderer 的 DOM 和内联样式逻辑。
- 插件源码：`customCss` 只作用于主组件 shadow root，不负责穿透插件自己的 shadow root。

## 结论

这个修改应该作为 **兼容性扩展**，不是重构替换。

正确实现结果是：

- 历史用户继续使用 `custom-styles`，不会因为升级丢失原有内联样式。
- 新用户或新场景使用 `custom-css`，获得完整 CSS 选择器能力。
- 两套 API 可以并存，但文档应建议不要让它们同时控制同一元素的同一个 CSS 属性。
