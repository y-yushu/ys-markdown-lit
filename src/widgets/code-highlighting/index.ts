import { html, LitElement, TemplateResult, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { until } from 'lit/directives/until.js'
import { YsMdRendering } from '../../YsMdRendering'
import RegisteredLanguage from './RegisteredLanguage'

// 样式
import tailwindStyles from './index.css?inline'
import highlightcss from 'highlight.js/styles/github-dark.css?inline'

// 额外语言字典
const LanguageDict: Record<string, string> = {
  js: 'javascript',
  ts: 'typescript',
  py: 'python',
  html: 'xml',
  'c++': 'cpp',
  'c#': 'csharp',
  SQL: 'sql'
}

@customElement('ys-md-rendering-code-highlighting')
export class renderFence extends LitElement {
  static styles = [unsafeCSS(tailwindStyles), unsafeCSS(highlightcss)]

  @property({ type: Object }) ask: unknown

  render(): TemplateResult {
    const token = (this.ask as AstToken).node
    const boo = false
    const copy = () => {}
    // 获取语言类型
    const info1 = LanguageDict[token.info] || token.info
    const language = info1 || 'plaintext'
    if (language === 'plaintext') {
      console.log('没有匹配到语言类型', token)
    }

    return html`
      <div class="rounded-md">
        <div class="sticky top-0 flex h-8 select-none items-center justify-between rounded-t-md bg-gray-700 px-3 text-xs">
          <span class="font-bold text-gray-400">${token.info || '未知语言'}</span>
          ${boo
            ? html`<span class="cursor-pointer text-white">复制成功</span>`
            : html`<span class="cursor-pointer text-blue-400 active:text-blue-300" @click=${copy}>复制</span>`}
        </div>
        <div>${until(RegisteredLanguage(language, token.content), html`<pre><code class="language-${token.info}">${token.content}</code></pre>`)}</div>
      </div>
    `
    // <div>${html`<pre><code class="language-${token.info}">${token.content}</code></pre>`}</div>
  }
}

const Registration = () => {
  return (instance: YsMdRendering) => {
    console.log('Code widget is running', instance)
    // 注册前置渲染步骤 - 代码高亮组件
    instance.frontMethods.set('fence', (ask: AstToken, _chil: TemplateResult[]) => {
      // console.log('ask.key', ask.key)
      // const token = ask.node
      // console.log('token', token)
      return html`<ys-md-rendering-code-highlighting .ask=${ask}></ys-md-rendering-code-highlighting>`
    })
  }
}

export default Registration
