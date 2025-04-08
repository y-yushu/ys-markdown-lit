// import { html } from 'lit'
// import { YsMdRendering } from '../YsMdRendering'

// 注册所有自定义渲染方法
function registerCustomFenceRenderers(): void {
  // YsMdRendering.registerMethod('fence', (ask: AstToken) => {
  //   const token = ask.node
  //   return html`<pre><code class="language-${token.info}">${token.content}</code></pre>`
  // })
}

export default registerCustomFenceRenderers
