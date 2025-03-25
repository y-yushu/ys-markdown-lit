import { html, TemplateResult } from 'lit'
import { YsMdRendering } from './index'

const registerAllCustomRenderers = () => {
  YsMdRendering.registerMethod('heading_open', renderHeading)
  YsMdRendering.registerMethod('paragraph_open', renderParagraph)
  YsMdRendering.registerMethod('blockquote_open', renderBlockquote)
  YsMdRendering.registerMethod('strong_open', renderStrong)
  YsMdRendering.registerMethod('em_open', renderEm)
  YsMdRendering.registerMethod('s_open', renderS)
  YsMdRendering.registerMethod('ordered_list_open', renderOrderedList)
  YsMdRendering.registerMethod('bullet_list_open', renderBulletList)
  YsMdRendering.registerMethod('list_item_open', renderListItem)
  // table相关解析
  YsMdRendering.registerMethod('table_open', renderTable)
  YsMdRendering.registerMethod('thead_open', renderThead)
  YsMdRendering.registerMethod('tbody_open', renderTbody)
  YsMdRendering.registerMethod('tr_open', renderTr)
  YsMdRendering.registerMethod('th_open', renderTh)
  YsMdRendering.registerMethod('td_open', renderTd)
  // 链接解析
  YsMdRendering.registerMethod('link_open', renderLink)
  // 代码块
  YsMdRendering.registerMethod('fence', renderFence)
  YsMdRendering.registerMethod('code_inline', renderCodeInline)
  // 分割线
  YsMdRendering.registerMethod('hr', renderHr)
  // 换行
  YsMdRendering.registerMethod('softbreak', renderSoftbreak)
  YsMdRendering.registerMethod('hardbreak', renderHardbreak)
  // 图片
  YsMdRendering.registerMethod('image', renderImage)
  // 文字解析
  YsMdRendering.registerMethod('text', renderText)
  // 解析 html 代码
  YsMdRendering.registerMethod('html_block', renderHtmlBlock)
  YsMdRendering.registerMethod('html_inline', renderHtmlInline)
}

// 注册`H标题`渲染
const renderHeading = (ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  const token = ask.node
  switch (token.tag) {
    case 'h1':
      return html`<h1>${chil}</h1>`
    case 'h2':
      return html`<h2>${chil}</h2>`
    case 'h3':
      return html`<h3>${chil}</h3>`
    case 'h4':
      return html`<h4>${chil}</h4>`
    case 'h5':
      return html`<h5>${chil}</h5>`
    case 'h6':
      return html`<h6>${chil}</h6>`
  }
  console.error('[heading标签解析异常]', token)
  return html``
}

// 注册`p`标签渲染
const renderParagraph = (ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  const token = ask.node
  if (token.hidden) {
    return html`${chil}`
  } else {
    return html`<p>${chil}</p>`
  }
}

// 注册`blockquote`渲染
const renderBlockquote = (ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  return html`<blockquote>${chil}</blockquote>`
}

// 注册 strong 渲染
const renderStrong = (ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  return html`<strong>${chil}</strong>`
}

// 注册 em 渲染
const renderEm = (ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  return html`<em>${chil}</em>`
}

// 注册 s 渲染
const renderS = (ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  return html`<s>${chil}</s>`
}

// 注册 s 渲染
const renderOrderedList = (ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  return html`<ol>
    ${chil}
  </ol>`
}

const renderBulletList = (ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  return html`<ul>
    ${chil}
  </ul>`
}

const renderListItem = (ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  return html`<li>${chil}</li>`
}

const renderTable = (ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  return html`<table>
    ${chil}
  </table>`
}

const renderThead = (ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  return html`<thead>
    ${chil}
  </thead>`
}

const renderTbody = (ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  return html`<tbody>
    ${chil}
  </tbody>`
}

const renderTr = (ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  return html`<tr>
    ${chil}
  </tr>`
}

const renderTh = (ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  return html`<th>${chil}</th>`
}

const renderTd = (ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  return html`<td>${chil}</td>`
}

const renderLink = (ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  const token = ask.node
  const attrs: Array<[string, string]> | null = token.attrs || []
  const href = attrs!.find(attr => attr[0] === 'href')?.[1] || ''

  return html`<a class="text-blue-500 no-underline active:text-blue-400" href="${href}" target="_blank" rel="noreferrer nofollow noopener">${chil}</a>`
}

const renderFence = (ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  const token = ask.node
  return html`<pre><code class="language-${token.info}">${token.content}</code></pre>`
}

export default registerAllCustomRenderers
