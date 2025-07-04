import { html, render, TemplateResult } from 'lit'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import Token from 'markdown-it/lib/token.mjs'

export type AstToken = {
  key: string
  node: Token
  end: Token | null
  children: AstToken[]
  meta?: unknown
}

export type RenderFunction = (ask: AstToken, chil: TemplateResult[]) => TemplateResult

export type RenderMethods = Record<string, RenderFunction>

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
  return html`<div class="w-fit max-w-full overflow-x-auto">
    <table class="max-w-max border-collapse">
      ${chil}
    </table>
  </div> `
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
  return html`<th class="box-border max-w-[200px] min-w-[100px] p-2 px-4 break-words whitespace-normal">${chil}</th>`
}

const renderTd = (_ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  return html`<td class="box-border max-w-[200px] min-w-[100px] p-2 px-4 break-words whitespace-normal">${chil}</td>`
}

const renderLink = (ask: AstToken, chil: TemplateResult[]): TemplateResult => {
  const token: Token = ask.node
  const attrs: Array<[string, string]> | null = token.attrs || []
  const href = attrs!.find(attr => attr[0] === 'href')?.[1] || ''

  return html`<a class="text-blue-500 no-underline active:text-blue-400" href="${href}" target="_blank" rel="noreferrer nofollow noopener">${chil}</a>`
}

const renderFence = (ask: AstToken, _chil: TemplateResult[]): TemplateResult => {
  const token: Token = ask.node
  return html`
    <div class="max-w-full rounded-lg">
      <div class="sticky top-0 flex h-8 items-center justify-between rounded-t-md bg-gray-700 px-3 text-xs select-none">
        <span class="font-bold text-gray-400">${token.info}</span>
        <!-- <span class="cursor-pointer text-blue-400 active:text-blue-300">复制</span> -->
      </div>
      <div class="max-w-full overflow-x-auto">
        <pre class="!m-0 max-w-full rounded-t-none"><code>${token.content}</code></pre>
      </div>
    </div>
  `
}

const renderCodeInline = (ask: AstToken, _chil: TemplateResult[]): TemplateResult => {
  const token: Token = ask.node
  return html`<span class="mx-1 rounded-lg bg-gray-700 px-2 py-0.5 text-white">${token.content}</span>`
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
