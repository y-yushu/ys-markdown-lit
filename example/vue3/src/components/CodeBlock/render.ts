import hljs from 'highlight.js/lib/core'
import plaintext from 'highlight.js/lib/languages/plaintext'
import html from 'highlight.js/lib/languages/xml'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import css from 'highlight.js/lib/languages/css'
import { parse } from '@vue/compiler-sfc'

// 注册语言
if (!hljs.getLanguage('plaintext')) hljs.registerLanguage('plaintext', plaintext)
if (!hljs.getLanguage('html')) hljs.registerLanguage('html', html)
if (!hljs.getLanguage('js')) hljs.registerLanguage('js', js)
if (!hljs.getLanguage('ts')) hljs.registerLanguage('ts', ts)
if (!hljs.getLanguage('css')) hljs.registerLanguage('css', css)

const TypeMap: Record<string, string> = {
  html: 'html',
  js: 'js',
  css: 'css'
}

const vue3_ts_prefix =
  '<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span>'
const vue3_ts_suffix = '<span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>'

const vue3_html_prefix = '<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>'
const vue3_html_suffix = '<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>'

export const renderCode = (code: string, type: string) => {
  if (type === 'vue3') {
    const { descriptor } = parse(code)
    let text = ''
    if (descriptor.scriptSetup) {
      const t1 = hljs.highlight(descriptor.scriptSetup.content, { language: 'ts' }).value
      text += vue3_ts_prefix + t1 + vue3_ts_suffix
    }
    if (descriptor.template) {
      const t2 = hljs.highlight(descriptor.template.content, { language: 'html' }).value
      if (text) text += '\n\n'
      text += vue3_html_prefix + t2 + vue3_html_suffix
    }
    return text
  }
  const language = TypeMap[type] || 'plaintext'
  return hljs.highlight(code, { language }).value
}
