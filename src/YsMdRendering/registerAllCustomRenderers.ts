import { html, render, TemplateResult } from 'lit'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { Token } from 'markdown-it'

const rederInline = (_ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  return html`${chil}`
}

// 注册`H标题`渲染
const renderHeading = (ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  const token: Token = ask.node
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
  const token: Token = ask.node
  if (token.hidden) {
    return html`${chil}`
  } else {
    return html`<p>${chil}</p>`
  }
}

// 注册`blockquote`渲染
const renderBlockquote = (_ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  return html`<blockquote>${chil}</blockquote>`
}

// 注册 strong 渲染
const renderStrong = (_ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  return html`<strong>${chil}</strong>`
}

// 注册 em 渲染
const renderEm = (_ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  return html`<em>${chil}</em>`
}

// 注册 s 渲染
const renderS = (_ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  return html`<s>${chil}</s>`
}

// 注册 s 渲染
const renderOrderedList = (_ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  return html`<ol>
    ${chil}
  </ol>`
}

const renderBulletList = (_ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  return html`<ul>
    ${chil}
  </ul>`
}

const renderListItem = (_ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  return html`<li>${chil}</li>`
}

const renderTable = (_ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  return html`<table>
    ${chil}
  </table>`
}

const renderThead = (_ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  return html`<thead>
    ${chil}
  </thead>`
}

const renderTbody = (_ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  return html`<tbody>
    ${chil}
  </tbody>`
}

const renderTr = (_ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  return html`<tr>
    ${chil}
  </tr>`
}

const renderTh = (_ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  return html`<th>${chil}</th>`
}

const renderTd = (_ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  return html`<td>${chil}</td>`
}

const renderLink = (ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  const token: Token = ask.node
  const attrs: Array<[string, string]> | null = token.attrs || []
  const href = attrs!.find(attr => attr[0] === 'href')?.[1] || ''

  return html`<a class="text-blue-500 no-underline active:text-blue-400" href="${href}" target="_blank" rel="noreferrer nofollow noopener">${chil}</a>`
}

const renderFence = (ask: AstToken, _chil: TemplateResult[]): TemplateResult => {
  const token: Token = ask.node
  return html`<pre><code class="language-${token.info}">${token.content}</code></pre>`
}

const renderCodeInline = (ask: AstToken, _chil: TemplateResult[]): TemplateResult => {
  const token: Token = ask.node
  return html`<span class="mx-1 rounded-md bg-gray-700 px-2 py-0.5 text-white">${token.content}</span>`
}

const renderHr = (_ask: AstToken, _chil: TemplateResult[]): TemplateResult => {
  return html`<hr />`
}

const renderSoftbreak = (_ask: AstToken, _chil: TemplateResult[]): TemplateResult => {
  return html`${' '}`
}

const renderHardbreak = (_ask: AstToken, _chil: TemplateResult[]): TemplateResult => {
  return html`<br />`
}

const renderImage = (ask: AstToken, _chil: TemplateResult[]): TemplateResult => {
  const token: Token = ask.node
  const attrs: Array<[string, string]> | null = token.attrs || []
  const src = attrs.find(attr => attr[0] === 'src')?.[1] || ''
  const alt = attrs.find(attr => attr[0] === 'alt')?.[1] || ''
  const title = attrs.find(attr => attr[0] === 'title')?.[1] || ''

  // 返回图片的 HTML 模板
  return html`<img src="${src}" alt="${alt}" title="${title}" />`
}

const renderText = (ask: AstToken, _chil: TemplateResult[]): TemplateResult => {
  const token: Token = ask.node
  return html`${token.content}`
}

const renderHtmlBlock = (ask: AstToken, _chil: TemplateResult[]): TemplateResult => {
  const token: Token = ask.node
  return html`${unsafeHTML(token.content)}`
}

const renderHtmlInline = (ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  const token: Token = ask.node
  const end = ask.end
  const middleContent = html`${chil}`
  const container = document.createElement('div')
  render(middleContent, container)
  const middleContentHTML = container.innerHTML
  return html`${unsafeHTML(token.content + middleContentHTML + end?.content)}`
}

// 定义渲染方法的类型
export const renderMethods: RenderMethods = {
  inline: rederInline,
  heading_open: renderHeading,
  paragraph_open: renderParagraph,
  blockquote_open: renderBlockquote,
  strong_open: renderStrong,
  em_open: renderEm,
  s_open: renderS,
  ordered_list_open: renderOrderedList,
  bullet_list_open: renderBulletList,
  list_item_open: renderListItem,
  table_open: renderTable,
  thead_open: renderThead,
  tbody_open: renderTbody,
  tr_open: renderTr,
  th_open: renderTh,
  td_open: renderTd,
  link_open: renderLink,
  fence: renderFence,
  code_inline: renderCodeInline,
  hr: renderHr,
  softbreak: renderSoftbreak,
  hardbreak: renderHardbreak,
  image: renderImage,
  text: renderText,
  html_block: renderHtmlBlock,
  html_inline: renderHtmlInline
}
