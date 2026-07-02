# Storybook 迁移任务规划

## 背景

当前项目根目录已经加入 Storybook，`src/stories` 里主要还是 Storybook 初始化生成的示例组件。

`docs` 目录下保留了之前通过 Vite + Lit 开发的 Web Components 项目，真实组件源码主要位于：

- `docs/src/YsMdRendering`
- `docs/src/plugin`
- `docs/src/utils`
- `docs/src/types`

如果后续希望通过 Storybook 继续开发这些 Web Components，建议不要继续把 `docs` 当作主要开发目录，而是把旧组件源码迁移到当前根项目的 `src` 中，让 Storybook 直接消费源码。

## 总体目标

将当前项目调整为：

- 根项目负责 Web Components 源码开发、Storybook 组件预览、后续库打包。
- Storybook 作为组件开发和文档展示环境。
- `docs` 中的旧项目只作为迁移来源、历史示例或后续发布文档参考。

推荐目标结构：

```text
src/
  YsMdRendering/
  plugin/
  types/
  utils/
  index.ts
  stories/
    YsMdRendering.stories.ts
    plugins/
      CodeHighlight.stories.ts
      Mermaid.stories.ts
      Katex.stories.ts
      Echarts.stories.ts
      Svg.stories.ts
      Think.stories.ts
```

## 第一阶段：让 Storybook 能直接开发旧组件源码

第一阶段的目标是完成源码迁移和 Storybook 预览能力，不优先处理 npm 发布。

### 任务 1：迁移旧组件源码

将旧项目中的核心源码迁移到根项目：

- `docs/src/YsMdRendering` → `src/YsMdRendering`
- `docs/src/plugin` → `src/plugin`
- `docs/src/utils` → `src/utils`
- `docs/src/types` → `src/types`

同时新增或整理根入口文件：

- `src/index.ts`

入口文件负责注册主组件和必要导出，例如：

- 主组件 `ys-md-rendering`
- 可选插件入口保持独立，不强制全部注册

### 任务 2：同步依赖

根据旧项目 `docs/package.json`，把组件运行所需依赖同步到根项目。

需要重点确认的运行依赖包括：

- `@lit/context`
- `@mdit/plugin-mark`
- `markdown-it`
- `tailwindcss`
- `@tailwindcss/vite`
- `highlight.js`
- `katex`
- `echarts`
- `mermaid`

已有依赖如 `lit` 可以保留，但版本需要确认是否统一。

### 任务 3：调整 Vite 配置以支持组件源码

旧组件中使用了：

```ts
import tailwindcss from './index.css?inline'
```

并且 CSS 内部依赖 Tailwind：

```css
@import 'tailwindcss';
@config "../../tailwind.config.js";
```

因此根项目的 Vite 配置需要支持：

- `@tailwindcss/vite`
- `?inline` CSS 导入
- 浏览器环境中必要的 `process.env.NODE_ENV` 替换

这一阶段只保证 Storybook 能正常加载组件，不急着完善最终库打包配置。

### 任务 4：调整 TypeScript 配置

需要确认根 `tsconfig.json` 是否适合旧组件源码。

重点配置项：

- `experimentalDecorators: true`
- `useDefineForClassFields: false`
- `allowArbitraryExtensions: true`
- `moduleResolution: "bundler"`
- `types: ["vite/client"]`

如果第一阶段只跑 Storybook，可以暂时保持 `noEmit: true`。

### 任务 5：编写主组件 Story

新增主组件 Story：

- `src/stories/YsMdRendering.stories.ts`

建议覆盖这些基础场景：

- 基础 Markdown 渲染
- 标题、段落、列表、引用
- 表格
- 链接点击事件
- 代码块基础渲染
- `mode="light"` 和 `mode="dark"`
- `custom-styles`
- `custom-css`
- `breaks`
- `md-*` 透传配置

Storybook 中的 story 只负责组合使用场景，不复制组件内部逻辑。

### 任务 6：编写插件 Story

为插件建立独立 stories：

- `ys-code-highlight`
- `ys-katex`
- `ys-echarts`
- `ys-mermaid`
- `ys-svg`
- `ys-think`

每个插件 Story 应验证：

- 插件是否能注册到 `ys-md-rendering`
- 插件渲染是否符合预期
- 插件事件是否能冒泡或转发
- 插件样式是否在 Shadow DOM 中正确生效

### 任务 7：清理 Storybook 示例定位

初始化生成的 `Button`、`Header` 示例可以先保留，也可以在确认迁移可行后删除。

建议最终删除或移动这些模板示例，避免它们和真实组件文档混在一起。

## 第二阶段：恢复和整理库发布能力

第二阶段的目标是让根项目成为可以发布的 Web Components 库。

### 任务 1：整理 package.json 元信息

需要根据旧项目 `docs/package.json` 恢复或调整：

- `name`
- `version`
- `repository`
- `types`
- `module`
- `exports`
- `files`
- `scripts`

如果当前项目最终就是旧库的新开发位置，建议根项目包名继续使用：

```json
"name": "ys-md-rendering"
```

如果当前项目只是实验项目，则可以暂时不改包名。

### 任务 2：恢复多入口构建

旧项目提供了多个入口：

- `ys-md-rendering`
- `plugin/ys-code-highlight`
- `plugin/ys-katex`
- `plugin/ys-echarts`
- `plugin/ys-think`
- `plugin/ys-svg`
- `plugin/ys-mermaid`

根 `vite.config.ts` 后续需要恢复这些多入口 lib build 配置。

### 任务 3：生成类型声明

旧项目通过 TypeScript 生成 `types` 目录。

第二阶段需要恢复：

- `declaration: true`
- `declarationDir: "./types"`
- `emitDeclarationOnly: true`

可以通过单独脚本实现：

```json
"build:types": "tsc"
```

### 任务 4：确认 exports 设计

建议继续保持主入口和插件入口分离：

```text
ys-md-rendering
ys-md-rendering/plugin/ys-code-highlight
ys-md-rendering/plugin/ys-katex
ys-md-rendering/plugin/ys-echarts
ys-md-rendering/plugin/ys-think
ys-md-rendering/plugin/ys-svg
ys-md-rendering/plugin/ys-mermaid
```

这样使用方可以按需导入插件，避免主包默认加载所有重型依赖。

### 任务 5：处理文档与示例

旧 `docs/docs` 和 `docs/example/vue3` 可以作为参考，但不建议继续作为主要源码。

后续可以选择：

- 用 Storybook 替代大部分示例文档。
- 保留 Vue 示例作为集成测试或独立 example。
- 将发布后的 Storybook 静态站点作为新的组件文档。

## 主要风险

### 风险 1：依赖体积较大

`echarts`、`mermaid`、`katex`、`highlight.js` 都比较重。

建议保持插件按需导入，不要让主入口默认注册所有插件。

### 风险 2：Tailwind 在 Shadow DOM 中的构建方式

旧组件依赖 `index.css?inline` 将 Tailwind 样式注入 LitElement。

迁移后必须确认 Storybook 和生产构建都能正确处理这套 CSS。

### 风险 3：Storybook 与库构建配置目标不同

Storybook 是开发预览环境，库构建是发布环境。

第一阶段不建议过早把两者揉在一起处理，否则容易同时遇到预览问题和发布问题。

### 风险 4：`docs` 当前被根 `.gitignore` 忽略

根 `.gitignore` 中忽略了 `docs`。

如果继续在 `docs` 里开发，代码可能不会进入版本管理。

迁移到根 `src` 后，这个问题会自然消失。

## 建议实施顺序

1. 先确认是否接受“根 `src` 作为主源码，Storybook 作为开发预览环境”的方向。
2. 再执行第一阶段，完成源码迁移和 Storybook 可运行。
3. 确认 Storybook 中主组件和插件都能正常展示。
4. 再执行第二阶段，恢复 npm 包发布能力。
5. 最后决定旧 `docs` 是删除、归档，还是改造成发布后的静态文档目录。

## 需要确认的问题

在正式修改代码前，建议先确认这些问题：

- 当前根项目是否就是 `ys-md-rendering` 的新主项目？
- 是否需要保留旧 `docs/example/vue3` 作为 Vue 集成示例？
- 插件是否仍然全部保留，还是先迁移主组件和最常用插件？
- Storybook 是否要作为最终公开文档发布？
- 根目录下的 `文档` 是否作为后续规划文档目录继续使用？

