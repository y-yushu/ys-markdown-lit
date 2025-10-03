<script setup lang="ts">
import PageMain from '@/components/PageMain/index.vue'
import ExampleBox from '@/components/ExampleBox/index.vue'
import ExampleSize from '@/example/example-size/index.vue'
import ExampleSizeTxt from '@/example/example-size/index.txt?raw'
import ExampleStyle from '@/example/example-style/index.vue'
import ExampleStyleTxt from '@/example/example-style/index.txt?raw'
import ExampleCss from '@/example/example-css/index.vue'
import ExampleCssTxt from '@/example/example-css/index.txt?raw'
import ExampleTheme from '@/example/example-theme/index.vue'
import ExampleThemeTxt from '@/example/example-theme/index.txt?raw'

const codes1: CodeItem[] = [
  {
    name: 'vue3',
    type: 'html',
    code: ExampleSizeTxt
  }
]

const codes2: CodeItem[] = [
  {
    name: 'vue3',
    type: 'html',
    code: ExampleStyleTxt
  }
]

const codes3: CodeItem[] = [
  {
    name: 'vue3',
    type: 'html',
    code: ExampleCssTxt
  }
]

const codes4: CodeItem[] = [
  {
    name: 'vue3',
    type: 'html',
    code: ExampleThemeTxt
  }
]
</script>

<template>
  <page-main>
    <h1 class="text-2xl font-bold">主题切换</h1>

    <div class="mb-2">通过mode设置对应主题，如果设置空，则根据浏览器模式自动切换</div>
    <div class="mb-2">注：是通过@tailwindcss/typography的深浅切换实现的，也可外部对prose进行切换，达到同样的目的</div>

    <ExampleBox :codes="codes4">
      <ExampleTheme />
    </ExampleBox>

    <h1 class="text-2xl font-bold">整体大小调整</h1>

    <div class="mb-2">通过style传递`--rem-size: 16px;`属性，控制整体大小</div>

    <ExampleBox :codes="codes1">
      <ExampleSize />
    </ExampleBox>

    <h1 class="text-2xl font-bold">元素样式自定义</h1>

    <span
      >支持的自定义元素属性有：h1、h2、h3、h4、h5、h6、p、blockquote、strong、em、s、ol、ul、li、table、thead、tbody、tr、th、td、a、pre、code、hr、br、img</span
    >
    <br />
    <span>设置样式可通过`background-color`、`backgroundColor`两种方式设置，因为是覆盖css，几乎所有css属性都可以设置</span>
    <br />
    <span>目前不支持伪元素、伪类、选择器等操作，不过目前的属性够把md翻出花了</span>

    <ExampleBox :codes="codes2">
      <ExampleStyle />
    </ExampleBox>

    <h1 class="text-2xl font-bold">元素属性自定义</h1>

    <span
      >内部使用<a class="text-blue-500 no-underline hover:underline" href="https://www.npmjs.com/package/@tailwindcss/typography"
        >@tailwindcss/typography</a
      >渲染，所以支持修改typography插件的css变量以修改样式的效果</span
    >

    示例数据如下：
    <pre class="rounded-md bg-gray-900 p-2 text-white"><code>@utility prose-pink {
  --tw-prose-body: var(--color-pink-800);
  --tw-prose-headings: var(--color-pink-900);
  --tw-prose-lead: var(--color-pink-700);
  --tw-prose-links: var(--color-pink-900);
  --tw-prose-bold: var(--color-pink-900);
  --tw-prose-counters: var(--color-pink-600);
  --tw-prose-bullets: var(--color-pink-400);
  --tw-prose-hr: var(--color-pink-300);
  --tw-prose-quotes: var(--color-pink-900);
  --tw-prose-quote-borders: var(--color-pink-300);
  --tw-prose-captions: var(--color-pink-700);
  --tw-prose-code: var(--color-pink-900);
  --tw-prose-pre-code: var(--color-pink-100);
  --tw-prose-pre-bg: var(--color-pink-900);
  --tw-prose-th-borders: var(--color-pink-300);
  --tw-prose-td-borders: var(--color-pink-200);
  --tw-prose-invert-body: var(--color-pink-200);
  --tw-prose-invert-headings: var(--color-white);
  --tw-prose-invert-lead: var(--color-pink-300);
  --tw-prose-invert-links: var(--color-white);
  --tw-prose-invert-bold: var(--color-white);
  --tw-prose-invert-counters: var(--color-pink-400);
  --tw-prose-invert-bullets: var(--color-pink-600);
  --tw-prose-invert-hr: var(--color-pink-700);
  --tw-prose-invert-quotes: var(--color-pink-100);
  --tw-prose-invert-quote-borders: var(--color-pink-700);
  --tw-prose-invert-captions: var(--color-pink-400);
  --tw-prose-invert-code: var(--color-white);
  --tw-prose-invert-pre-code: var(--color-pink-300);
  --tw-prose-invert-pre-bg: rgb(0 0 0 / 50%);
  --tw-prose-invert-th-borders: var(--color-pink-600);
  --tw-prose-invert-td-borders: var(--color-pink-700);
}</code></pre>

    <ExampleBox :codes="codes3">
      <ExampleCss />
    </ExampleBox>
  </page-main>
</template>
