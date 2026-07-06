# 项目协作指南

## 项目定位

`ys-md-rendering` 是一个基于 Web Components 的 Markdown 自定义渲染组件库。核心组件为 `<ys-md-rendering>`，通过 `markdown-it` 解析 Markdown，通过 `lit` 渲染模板，并支持用插件扩展代码高亮、图表、公式、SVG、思考块等自定义内容。

当前项目是一个可发布的前端库，不是业务应用。维护时应优先保证包入口、类型声明、组件注册和可选 peer 依赖的兼容性。

## 主要技术栈

- 包管理器：`pnpm`，仓库包含 `pnpm-lock.yaml`。
- 语言与模块：TypeScript、ESM，`package.json` 中声明 `"type": "module"`。
- 组件框架：`lit` 3，使用装饰器、Shadow DOM、Lit Context。
- Markdown 解析：`markdown-it` 14，额外启用 `@mdit/plugin-mark`。
- 构建工具：Vite，库模式多入口构建。
- 文档与开发预览：Storybook 10，框架为 `@storybook/web-components-vite`。
- 浏览器测试能力：Vitest + Storybook addon + Playwright browser provider，配置在 `vite.config.ts`。
- 样式：普通 CSS 文件通过 `?inline` 注入组件，不使用 Tailwind CSS。

## 常用命令

```bash
pnpm install
pnpm run dev
pnpm run build
pnpm run build:lib
pnpm run build:types
pnpm run build:storybook
```

- `pnpm run dev` / `pnpm run storybook`：启动 Storybook，默认端口 `6006`。
- `pnpm run build`：先执行 Vite 库构建，再执行 TypeScript 声明文件构建。
- `pnpm run build:types`：使用 `tsconfig.build.json` 生成 `dist/**/*.d.ts`。
- 当前 `package.json` 没有独立的 `test` 脚本；如果需要跑 Storybook/Vitest 集成测试，应先确认命令和 CI 约定。

## 目录结构

- `src/index.ts`：包主入口，导入并导出主组件。
- `src/YsMdRendering/`：主组件实现、默认渲染器、主题样式。
- `src/YsMdRendering/registerAllCustomRenderers.ts`：Markdown token 到 Lit 模板的默认渲染映射。
- `src/YsMdRendering/themes/density/`：排版密度主题，目前有 `streaming`、`compact`。
- `src/YsMdRendering/themes/appearance/`：外观色板主题，目前仅保留 `blue`。
- `src/plugin/`：可选插件入口，包含 `code-highlight`、`echarts`、`katex`、`mermaid`、`svg`、`think`。
- `src/types/`：对外和内部共用的类型定义。
- `src/utils/`：规则注册、转换器、上下文、内容写入等工具。
- `.storybook/`：Storybook 配置。
- `docs/storybook/`：Storybook MDX 文档。
- `docs/`：迁移和任务规划文档。

## 包入口与发布注意事项

`package.json` 使用 `exports` 暴露主入口和插件入口：

- `ys-md-rendering`
- `ys-md-rendering/plugin/code-highlight`
- `ys-md-rendering/plugin/echarts`
- `ys-md-rendering/plugin/katex`
- `ys-md-rendering/plugin/think`
- `ys-md-rendering/plugin/svg`
- `ys-md-rendering/plugin/mermaid`
- 兼容别名：`ys-*` 形式的插件路径

新增插件或改动入口时，需要同步检查：

- `package.json` 的 `exports`
- `vite.config.ts` 的 `build.lib.entry`
- `tsconfig.build.json` 的 `include`
- 对应 Storybook stories 或文档

`dist` 是发布产物，源码改动后通过 `pnpm run build` 重新生成，不要手写 `dist` 文件。

## 可选 peer 依赖

以下依赖是可选 peer：

- `echarts`
- `highlight.js`
- `katex`
- `mermaid`

Vite 构建中会 externalize 这些可选依赖，避免把大型插件依赖直接打进主包。维护插件时不要把可选 peer 改成主依赖，除非明确要改变包体积和安装策略。

## 主组件行为

`<ys-md-rendering>` 的关键属性：

- `content`：Markdown 内容。
- `density`：排版密度，支持 `streaming`、`compact`。
- `appearance`：色板，当前仅支持 `blue`。
- `mode`：主题模式，支持 `light`、`dark`；为空时跟随系统偏好。
- `size`：基础字号，默认 `16`。
- `custom-styles`：对象形式的元素样式覆盖。
- `custom-css`：直接注入当前组件 Shadow Root 的 CSS 文本。
- `breaks`：是否把软换行渲染为 `<br>`。

主组件会把 Markdown token 转成嵌套 AST，再用 `renderMethods` 或插件提供的 `customMethods` 渲染。改动解析或渲染逻辑时，要关注流式内容、未闭合 fence、事件派发和 clone 缓存行为。

## 插件机制

插件主要有两类扩展方式：

- 通过子组件设置 `data-register`，由主组件注册自定义块、行内规则或 fence 映射。
- 通过派发 `child-register` 事件，在 `detail.apply(instance)` 中修改主组件实例，例如覆盖 `instance.customMethods['fence']`。

自定义渲染组件通常会监听 `${type}-instance` 和 `${type}-update` 事件，并根据 `YsRenderUpdateDetail` 更新实际内容。处理流式 Markdown 时，注意 `iscomplete` 可能从 `false` 变为 `true`，不要只依赖首次创建事件。

## 样式约定

- 主组件使用 Shadow DOM，基础样式在 `src/YsMdRendering/index.css`。
- 密度和外观主题按需动态加载并缓存。
- 对外样式定制优先使用 CSS 变量、`part`、`custom-styles`、`custom-css`。
- 新增默认渲染节点时，应补充稳定的 class 和 `part`，方便外部覆盖样式。
- 项目已经移除 Tailwind CSS，不要重新引入 Tailwind 类名作为核心样式方案。

## TypeScript 与编码规则

- 始终使用 UTF-8 编码，中文注释和字符串直接输出原文，不使用 `\u` 转义。
- TypeScript 配置较严格，启用了 `noUnusedLocals`、`noUnusedParameters`、`erasableSyntaxOnly`。
- 使用装饰器时遵循 Lit 现有写法，`experimentalDecorators` 已开启。
- `tsconfig.build.json` 会排除 `*.stories.ts`，新增导出类型要确保在构建 include 范围内。
- 保持 ESM import/export，不要引入 CommonJS 写法。

## 开发注意事项

- 修改 Markdown 默认渲染时，优先在 `registerAllCustomRenderers.ts` 内保持 token 映射清晰，避免把大量逻辑塞进主组件。
- 修改主题时，同时检查 `density`、`appearance`、`mode`、`size` 和 `custom-css` 的组合效果。
- 插件依赖是可选的，插件入口可以依赖对应 peer，但主入口不应强依赖这些库。
- `html_block` 和 `html_inline` 使用 `unsafeHTML`，改动相关逻辑时要明确安全边界。
- 链接点击会派发 `link-click` 自定义事件，并在未被取消时执行默认跳转逻辑；修改时要保留 Shadow DOM 穿透事件语义。
- Storybook 是当前最直接的人工验证入口，新增组件能力时建议补充或更新对应 `*.stories.ts`。

## 验证建议

常规改动至少执行：

```bash
pnpm run build
```

涉及 UI、样式、插件交互时，建议再启动 Storybook：

```bash
pnpm run dev
```

并重点检查主组件 story、相关插件 story、深浅色模式、不同 density/appearance、流式未闭合代码块等场景。
