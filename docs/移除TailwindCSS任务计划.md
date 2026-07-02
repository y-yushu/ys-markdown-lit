# 移除 Tailwind CSS 任务计划

## 背景

当前组件库已经改为通过 Storybook 开发 Web Components，但项目里仍然依赖 Tailwind CSS 及相关工具：

- `tailwindcss`
- `@tailwindcss/vite`
- `@tailwindcss/typography`
- `prettier-plugin-tailwindcss`
- `tailwind.config.js`

这些依赖主要用于：

- 给 `ys-md-rendering` 注入 Tailwind Typography 的 `.prose` 样式。
- 给插件组件中的工具类提供实际 CSS。
- 给 Storybook/Vite 提供 Tailwind CSS 编译能力。

长期来看，如果希望组件库更轻、更独立，可以移除 Tailwind 工具链，把当前用到的工具类转换为组件内部 CSS。

## 总体目标

移除 Tailwind CSS 构建链，但保持现有组件视觉效果和功能行为尽量不变。

最终目标：

- 不再依赖 `tailwindcss`、`@tailwindcss/vite`、`@tailwindcss/typography`。
- 不再需要 `tailwind.config.js`。
- Storybook 和库构建都不再挂载 Tailwind Vite 插件。
- 组件内仍保留 `.prose`、`.prose-invert` 等语义类名，但它们由本项目自有 CSS 实现。
- `p-4`、`px-3`、`text-blue-600` 等工具类不再依赖 Tailwind，而是替换为项目内的语义类或显式 CSS。

## 当前发现

### Tailwind 工具链入口

需要处理的文件：

- `package.json`
- `pnpm-lock.yaml`
- `vite.config.ts`
- `.storybook/main.ts`
- `tailwind.config.js`

当前 Tailwind 相关依赖：

- `tailwindcss`
- `@tailwindcss/vite`
- `@tailwindcss/typography`
- `prettier-plugin-tailwindcss`

当前 Tailwind 插件接入点：

- `vite.config.ts` 中的 `tailwindcss()`。
- `.storybook/main.ts` 中的 `tailwindcss()`。

### Tailwind CSS 文件入口

需要处理的文件：

- `src/YsMdRendering/index.css`
- `src/plugin/mermaid/index.css`
- `src/plugin/svg/index.css`
- `src/plugin/think/index.css`

当前这些文件基本只包含：

```css
@import 'tailwindcss';
```

主组件还包含：

```css
@config "../../tailwind.config.js";
```

### Tailwind 工具类使用位置

重点文件：

- `src/YsMdRendering/index.ts`
- `src/YsMdRendering/registerAllCustomRenderers.ts`
- `src/plugin/mermaid/index.ts`
- `src/plugin/svg/index.ts`
- `src/plugin/think/index.ts`

典型工具类包括：

- 布局：`flex`、`inline-flex`、`items-center`、`justify-center`、`justify-between`
- 尺寸：`h-8`、`h-10`、`h-60`、`w-full`、`w-fit`、`max-w-full`、`max-w-max`、`min-w-16`
- 间距：`p-1`、`p-2`、`p-4`、`px-3`、`px-4`、`py-1`、`py-2`、`pl-3`、`pr-2`、`mb-4`、`mx-1`
- 边框：`border`、`border-solid`、`border-dashed`、`border-gray-300`、`border-gray-700`
- 圆角：`rounded-sm`、`rounded-md`、`rounded-lg`、`rounded-t-md`、`rounded-t-none`
- 颜色：`bg-white`、`bg-gray-100`、`bg-gray-700`、`bg-gray-800`、`bg-gray-900`、`text-blue-500`、`text-blue-600`、`text-red-500`、`text-gray-400`、`text-gray-500`、`text-gray-600`
- 状态：`hover:bg-gray-200`、`hover:bg-gray-800`、`active:text-blue-400`
- 排版：`text-xs`、`text-sm`、`font-bold`、`font-medium`、`leading-none`、`whitespace-normal`、`whitespace-pre-wrap`
- 溢出：`overflow-hidden`、`overflow-x-auto`、`overflow-y-auto`
- 特殊：`!m-0`、`select-none`、`shadow-sm`、`transition-all`、`duration-200`、`ease-in-out`

## 实施阶段

## 第一阶段：建立自有基础样式

### 任务 1：替换 `ys-md-rendering` 的 Typography 样式

目标文件：

- `src/YsMdRendering/index.css`
- `src/YsMdRendering/index.ts`
- `src/utils/dict.ts`

处理方式：

1. 删除 `@import 'tailwindcss'` 和 `@config`。
2. 手写 `.prose` 的基础 Markdown 样式。
3. 手写 `.prose-invert` 的深色样式。
4. 继续保留 `.prose`、`.prose-invert`、`max-w-full` 这些类名，减少 TS 逻辑改动。
5. 评估是否继续保留 `--tw-prose-*` 变量体系。

建议保留 `--tw-prose-*` 变量名一段时间，因为当前 `customStyles` 和 `setProseVariables()` 已围绕这些变量工作。后续可以再单独重命名为项目自有变量，例如 `--ys-prose-body`。

需要覆盖的 Markdown 元素：

- `h1` 到 `h6`
- `p`
- `a`
- `strong`
- `em`
- `blockquote`
- `ul` / `ol` / `li`
- `hr`
- `table` / `thead` / `tbody` / `tr` / `th` / `td`
- `pre` / `code`
- `img`

### 任务 2：建立组件局部工具类或语义类

可以选择两种策略。

策略 A：保留当前工具类名，手写等价 CSS。

优点：

- TS 模板改动最小。
- 风险低。

缺点：

- 项目里仍然看起来像 Tailwind，但实际不是 Tailwind。

策略 B：替换为语义类名。

例如：

- `mb-4 max-w-full rounded-lg` → `ys-code-block`
- `sticky top-0 flex h-8 ...` → `ys-code-block-header`
- `text-blue-500 no-underline active:text-blue-400` → `ys-link`
- `p-4 text-red-500` → `ys-error-message`

优点：

- 长期更清晰。
- 不再混淆“是否使用 Tailwind”。

缺点：

- 需要改更多模板代码。

建议采用策略 B，只有 `.prose` 这类对外可定制的语义类继续保留。

## 第二阶段：替换主渲染器内工具类

目标文件：

- `src/YsMdRendering/registerAllCustomRenderers.ts`

重点替换：

### 表格

当前类名：

- `table w-fit max-w-full overflow-x-auto`
- `max-w-max border-collapse`
- `box-border max-w-[200px] min-w-[100px] p-2 px-4 break-words whitespace-normal`

建议替换：

- `ys-table-wrap`
- `ys-table`
- `ys-table-cell`

对应 CSS：

- `width: fit-content`
- `max-width: 100%`
- `overflow-x: auto`
- `border-collapse: collapse`
- `box-sizing: border-box`
- `max-width: 200px`
- `min-width: 100px`
- `padding: 0.5rem 1rem`
- `overflow-wrap: break-word`
- `white-space: normal`

### 链接

当前类名：

- `text-blue-500 no-underline active:text-blue-400`

建议替换：

- `ys-link`

对应 CSS：

- `color: #3b82f6`
- `text-decoration: none`
- `active` 状态 `color: #60a5fa`

### 代码块

当前类名：

- `mb-4 max-w-full rounded-lg`
- `sticky top-0 flex h-8 items-center justify-between rounded-t-md bg-gray-700 px-3 text-xs select-none`
- `font-bold text-gray-400`
- `max-w-full overflow-x-auto`
- `!m-0 max-w-full rounded-t-none`

建议替换：

- `ys-code-block`
- `ys-code-block-header`
- `ys-code-block-title`
- `ys-code-scroll`
- `ys-code-pre`

### 行内代码和颜色块

当前类名：

- `mx-1 rounded-sm border border-solid border-[#f0efeb80] bg-[#f0efeb40] px-2 py-0.5 text-[#c12c1f]`
- `mx-1 inline-flex items-center gap-1 rounded-md border border-dashed px-2 py-1.5 leading-none`
- `inline-block h-3 w-3 rounded-sm`

建议替换：

- `ys-inline-code`
- `ys-color-token`
- `ys-color-swatch`

## 第三阶段：替换插件工具类

### Mermaid 插件

目标文件：

- `src/plugin/mermaid/index.ts`
- `src/plugin/mermaid/index.css`

当前有大量按钮、容器、错误态、代码视图工具类。

建议替换为：

- `ys-mermaid-card`
- `ys-mermaid-toolbar`
- `ys-mermaid-tabs`
- `ys-mermaid-tab`
- `ys-mermaid-tab-active`
- `ys-mermaid-tab-idle`
- `ys-mermaid-content`
- `ys-mermaid-code`
- `ys-mermaid-view`
- `ys-mermaid-error`

深色模式不要再通过 `bg-gray-*`、`text-gray-*` 类切换，而是通过宿主类或属性控制：

```ts
class=${isDark ? 'ys-mermaid-card ys-mermaid-card-dark' : 'ys-mermaid-card'}
```

或者：

```html
<div data-theme=${isDark ? 'dark' : 'light'}></div>
```

### SVG 插件

目标文件：

- `src/plugin/svg/index.ts`
- `src/plugin/svg/index.css`

SVG 插件和 Mermaid 插件 UI 结构高度相似。

建议抽取同一套视图切换 CSS 命名，或者至少保持命名一致：

- `ys-preview-card`
- `ys-preview-toolbar`
- `ys-preview-tabs`
- `ys-preview-tab`
- `ys-preview-code`
- `ys-preview-canvas`

如果不抽公共模块，也要保持类名和 CSS 写法一致，避免两个插件分叉。

### Think 插件

目标文件：

- `src/plugin/think/index.ts`
- `src/plugin/think/index.css`

当前类名：

- `border-l-2`
- `border-solid`
- `border-gray-300`
- `px-4`
- `text-sm`
- `whitespace-pre-wrap`
- `text-gray-500`

建议替换：

- `ys-think-block`
- `ys-think-content`

对应 CSS：

- `border-left: 2px solid #d1d5db`
- `padding-inline: 1rem`
- `font-size: 0.875rem`
- `white-space: pre-wrap`
- `color: #6b7280`

## 第四阶段：移除构建链依赖

### 任务 1：移除包依赖

从 `devDependencies` 移除：

- `tailwindcss`
- `@tailwindcss/vite`
- `@tailwindcss/typography`
- `prettier-plugin-tailwindcss`

执行命令：

```bash
pnpm remove tailwindcss @tailwindcss/vite @tailwindcss/typography prettier-plugin-tailwindcss
```

### 任务 2：移除配置文件

删除：

- `tailwind.config.js`

检查：

- `.prettierrc`
- `docs/.prettierrc`

如果配置里引用了 `prettier-plugin-tailwindcss`，需要同步删除。

### 任务 3：移除 Vite 插件

目标文件：

- `vite.config.ts`
- `.storybook/main.ts`

删除：

```ts
import tailwindcss from '@tailwindcss/vite'
```

以及：

```ts
plugins: [tailwindcss()]
```

Storybook 仍保留 `define.process.env.NODE_ENV` 配置即可。

## 第五阶段：验证

### 构建验证

必须执行：

```bash
npm run build
npm run build:storybook
```

### Storybook 场景验证

重点检查：

- `Components/YsMdRendering`
- `Plugins/CodeHighlight`
- `Plugins/Katex`
- `Plugins/Mermaid`
- `Plugins/Svg`
- `Plugins/Think`

### 视觉验证清单

主组件：

- 标题层级是否清晰。
- 段落、列表、引用间距是否正常。
- 表格是否可横向滚动。
- 代码块头部、代码区域是否正常。
- `mode="dark"` 是否正常。
- `custom-css` 示例是否仍能作用于 `.prose`。

插件：

- Mermaid 代码/图表切换按钮是否正常。
- SVG 代码/图标切换按钮是否正常。
- Think 左边框样式是否正常。
- Code Highlight 自带样式不受影响。
- ECharts 自带样式不受影响。
- KaTeX 自带样式不受影响。

## 风险与注意事项

### 风险 1：Typography 样式覆盖范围变小

Tailwind Typography 对 Markdown 元素做了大量细节处理。手写 `.prose` 后，初期可能没有原来完整。

建议先覆盖当前 stories 展示到的元素，再逐步补齐。

### 风险 2：深色模式需要重新校准

当前依赖 `dark:prose-invert` 和 `prose-invert`。移除 Tailwind 后，需要手写 `.prose-invert` 的颜色体系。

### 风险 3：工具类直接替换容易漏

建议迁移完成后运行：

```bash
rg -n "p-|px-|py-|text-|bg-|border-|rounded-|flex|grid|items-|justify-|gap-|max-w-|overflow-|dark:|prose-invert" src
```

确认没有残留 Tailwind 工具类。

### 风险 4：外部用户可能依赖 `.prose`

`.prose` 建议保留，不要改名。它已经出现在 `custom-css` 推荐写法中，是半公开 API。

## 建议实施顺序

1. 先新增自有 CSS，不移除 Tailwind 依赖。
2. 将主组件 `registerAllCustomRenderers.ts` 的工具类替换为语义类。
3. 将 Mermaid、SVG、Think 插件工具类替换为语义类。
4. 将 `src/YsMdRendering/index.css` 改成完整自有 `.prose` 样式。
5. 删除 Tailwind Vite 插件和 `tailwind.config.js`。
6. 移除 Tailwind 相关依赖。
7. 运行构建和 Storybook 视觉验证。

## 完成标准

- `package.json` 中不再包含 Tailwind 相关包。
- `vite.config.ts` 和 `.storybook/main.ts` 不再导入 `@tailwindcss/vite`。
- `tailwind.config.js` 已删除。
- `src/**/*.css` 中不再出现 `@import 'tailwindcss'`。
- `src/**/*.ts` 中不再出现 Tailwind 工具类作为样式依赖。
- `npm run build` 通过。
- `npm run build:storybook` 通过。
- Storybook 中主组件和插件的基础视觉表现可接受。

