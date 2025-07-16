import { html, render, TemplateResult } from 'lit'
import { ifDefined } from 'lit/directives/if-defined.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import Token from 'markdown-it/lib/token.mjs'
import { jsonToStyle } from '../utils'

export type AstToken = {
  key: string
  node: Token
  end: Token | null
  children: AstToken[]
  meta?: unknown
}

export type RenderFunction = (ask: AstToken, chil: TemplateResult[], option?: any) => TemplateResult

export type RenderMethods = Record<string, RenderFunction>

const rederInline = (_ask: AstToken, chil: TemplateResult[], _option: any): TemplateResult => {
  return html`${chil}`
}

// 注册`H标题`渲染
const renderHeading = (ask: AstToken, chil: TemplateResult[], option: any): TemplateResult => {
  const token: Token = ask.node
  let style = ''
  if (option?.style?.[token.tag]) {
    style = jsonToStyle(option.style[token.tag])
  }
  const styleValue = style.trim() ? style : undefined

  switch (token.tag) {
    case 'h1':
      return html`<h1 style=${ifDefined(styleValue)}>${chil}</h1>`
    case 'h2':
      return html`<h2 style=${ifDefined(styleValue)}>${chil}</h2>`
    case 'h3':
      return html`<h3 style=${ifDefined(styleValue)}>${chil}</h3>`
    case 'h4':
      return html`<h4 style=${ifDefined(styleValue)}>${chil}</h4>`
    case 'h5':
      return html`<h5 style=${ifDefined(styleValue)}>${chil}</h5>`
    case 'h6':
      return html`<h6 style=${ifDefined(styleValue)}>${chil}</h6>`
  }
  console.error('[heading标签解析异常]', token)
  return html`<p>${chil}</p>`
}

// 注册`p`标签渲染
const renderParagraph = (ask: AstToken, chil: TemplateResult[], option: any): TemplateResult => {
  const token: Token = ask.node
  let style = ''
  if (option?.style?.p) {
    style = jsonToStyle(option.style.p)
  }
  const styleValue = style.trim() ? style : undefined

  if (token.hidden) {
    return html`${chil}`
  } else {
    return html`<p style=${ifDefined(styleValue)}>${chil}</p>`
  }
}

// 注册`blockquote`渲染
const renderBlockquote = (_ask: AstToken, chil: TemplateResult[], option: any): TemplateResult => {
  let style = ''
  if (option?.style?.blockquote) {
    style = jsonToStyle(option.style.blockquote)
  }
  const styleValue = style.trim() ? style : undefined

  return html`<blockquote style=${ifDefined(styleValue)}>${chil}</blockquote>`
}

// 注册 strong 渲染
const renderStrong = (_ask: AstToken, chil: TemplateResult[], option: any): TemplateResult => {
  let style = ''
  if (option?.style?.strong) {
    style = jsonToStyle(option.style.strong)
  }
  const styleValue = style.trim() ? style : undefined

  return html`<strong style=${ifDefined(styleValue)}>${chil}</strong>`
}

// 注册 em 渲染
const renderEm = (_ask: AstToken, chil: TemplateResult[], option: any): TemplateResult => {
  let style = ''
  if (option?.style?.em) {
    style = jsonToStyle(option.style.em)
  }
  const styleValue = style.trim() ? style : undefined

  return html`<em style=${ifDefined(styleValue)}>${chil}</em>`
}

// 注册 s 渲染
const renderS = (_ask: AstToken, chil: TemplateResult[], option: any): TemplateResult => {
  let style = ''
  if (option?.style?.s) {
    style = jsonToStyle(option.style.s)
  }
  const styleValue = style.trim() ? style : undefined

  return html`<s style=${ifDefined(styleValue)}>${chil}</s>`
}

// 注册有序列表渲染
const renderOrderedList = (_ask: AstToken, chil: TemplateResult[], option: any): TemplateResult => {
  // 寻找起始数字
  const token: Token = _ask.node
  const attrs = token.attrs || []
  let startNumber = 1
  for (let i = 0; i < attrs.length; i++) {
    if (attrs[i][0] === 'start') {
      startNumber = Number(attrs[i][1])
      break
    }
  }

  let style = ''
  if (option?.style?.ol) {
    style = jsonToStyle(option.style.ol)
  }
  const styleValue = style.trim() ? style : undefined

  return html`<ol start="${startNumber}" style=${ifDefined(styleValue)}>
    ${chil}
  </ol>`
}

const renderBulletList = (_ask: AstToken, chil: TemplateResult[], option: any): TemplateResult => {
  let style = ''
  if (option?.style?.ul) {
    style = jsonToStyle(option.style.ul)
  }
  const styleValue = style.trim() ? style : undefined

  return html`<ul style=${ifDefined(styleValue)}>
    ${chil}
  </ul>`
}

const renderListItem = (_ask: AstToken, chil: TemplateResult[], option: any): TemplateResult => {
  let style = ''
  if (option?.style?.li) {
    style = jsonToStyle(option.style.li)
  }
  const styleValue = style.trim() ? style : undefined

  return html`<li style=${ifDefined(styleValue)}>${chil}</li>`
}

const renderTable = (_ask: AstToken, chil: TemplateResult[], option: any): TemplateResult => {
  let style = ''
  if (option?.style?.table) {
    style = jsonToStyle(option.style.table)
  }
  const styleValue = style.trim() ? style : undefined

  return html`<div class="w-fit max-w-full overflow-x-auto">
    <table class="max-w-max border-collapse" style=${ifDefined(styleValue)}>
      ${chil}
    </table>
  </div> `
}

const renderThead = (_ask: AstToken, chil: TemplateResult[], option: any): TemplateResult => {
  let style = ''
  if (option?.style?.thead) {
    style = jsonToStyle(option.style.thead)
  }
  const styleValue = style.trim() ? style : undefined

  return html`<thead style=${ifDefined(styleValue)}>
    ${chil}
  </thead>`
}

const renderTbody = (_ask: AstToken, chil: TemplateResult[], option: any): TemplateResult => {
  let style = ''
  if (option?.style?.tbody) {
    style = jsonToStyle(option.style.tbody)
  }
  const styleValue = style.trim() ? style : undefined

  return html`<tbody style=${ifDefined(styleValue)}>
    ${chil}
  </tbody>`
}

const renderTr = (_ask: AstToken, chil: TemplateResult[], option: any): TemplateResult => {
  let style = ''
  if (option?.style?.tr) {
    style = jsonToStyle(option.style.tr)
  }
  const styleValue = style.trim() ? style : undefined

  return html`<tr style=${ifDefined(styleValue)}>
    ${chil}
  </tr>`
}

const renderTh = (_ask: AstToken, chil: TemplateResult[], option: any): TemplateResult => {
  let style = ''
  if (option?.style?.th) {
    style = jsonToStyle(option.style.th)
  }
  const styleValue = style.trim() ? style : undefined

  return html`<th class="box-border max-w-[200px] min-w-[100px] p-2 px-4 break-words whitespace-normal" style=${ifDefined(styleValue)}>${chil}</th>`
}

const renderTd = (_ask: AstToken, chil: TemplateResult[], option: any): TemplateResult => {
  let style = ''
  if (option?.style?.td) {
    style = jsonToStyle(option.style.td)
  }
  const styleValue = style.trim() ? style : undefined

  return html`<td class="box-border max-w-[200px] min-w-[100px] p-2 px-4 break-words whitespace-normal" style=${ifDefined(styleValue)}>${chil}</td>`
}

const renderLink = (ask: AstToken, chil: TemplateResult[], option: any): TemplateResult => {
  const token: Token = ask.node
  const attrs: Array<[string, string]> | null = token.attrs || []
  const href = attrs!.find(attr => attr[0] === 'href')?.[1] || ''

  let style = ''
  if (option?.style?.a) {
    style = jsonToStyle(option.style.a)
  }
  const styleValue = style.trim() ? style : undefined

  return html`<a
    class="text-blue-500 no-underline active:text-blue-400"
    href="${href}"
    target="_blank"
    rel="noreferrer nofollow noopener"
    style=${ifDefined(styleValue)}
    >${chil}</a
  >`
}

const renderFence = (ask: AstToken, _chil: TemplateResult[], option: any): TemplateResult => {
  const token: Token = ask.node
  let style = ''
  if (option?.style?.pre) {
    style = jsonToStyle(option.style.pre)
  }
  const styleValue = style.trim() ? style : undefined

  return html`
    <div class="max-w-full rounded-lg">
      <div class="sticky top-0 flex h-8 items-center justify-between rounded-t-md bg-gray-700 px-3 text-xs select-none">
        <span class="font-bold text-gray-400">${token.info}</span>
        <!-- <span class="cursor-pointer text-blue-400 active:text-blue-300">复制</span> -->
      </div>
      <div class="max-w-full overflow-x-auto">
        <pre class="!m-0 max-w-full rounded-t-none" style=${ifDefined(styleValue)}><code>${token.content}</code></pre>
      </div>
    </div>
  `
}

const renderCodeInline = (ask: AstToken, _chil: TemplateResult[], option: any): TemplateResult => {
  const token: Token = ask.node
  let style = ''
  if (option?.style?.code) {
    style = jsonToStyle(option.style.code)
  }
  const styleValue = style.trim() ? style : undefined

  return html`<span class="mx-1 rounded-lg bg-gray-700 px-2 py-0.5 text-white" style=${ifDefined(styleValue)}>${token.content}</span>`
}

const renderHr = (_ask: AstToken, _chil: TemplateResult[], option: any): TemplateResult => {
  let style = ''
  if (option?.style?.hr) {
    style = jsonToStyle(option.style.hr)
  }
  const styleValue = style.trim() ? style : undefined

  return html`<hr style=${ifDefined(styleValue)} />`
}

const renderSoftbreak = (_ask: AstToken, _chil: TemplateResult[], option: any): TemplateResult => {
  if (option?.breaks) {
    // 软换行也算作换行
    let style = ''
    if (option?.style?.br) {
      style = jsonToStyle(option.style.br)
    }
    const styleValue = style.trim() ? style : undefined
    return html`<br style=${ifDefined(styleValue)} />`
  } else {
    return html`${' '}`
  }
}

const renderHardbreak = (_ask: AstToken, _chil: TemplateResult[], option: any): TemplateResult => {
  let style = ''
  if (option?.style?.br) {
    style = jsonToStyle(option.style.br)
  }
  const styleValue = style.trim() ? style : undefined

  return html`<br style=${ifDefined(styleValue)} />`
}

const renderImage = (ask: AstToken, _chil: TemplateResult[], option: any): TemplateResult => {
  const token: Token = ask.node
  const attrs: Array<[string, string]> | null = token.attrs || []
  const src = attrs.find(attr => attr[0] === 'src')?.[1] || ''
  const alt = attrs.find(attr => attr[0] === 'alt')?.[1] || ''
  const title = attrs.find(attr => attr[0] === 'title')?.[1] || ''

  let style = ''
  if (option?.style?.img) {
    style = jsonToStyle(option.style.img)
  }
  const styleValue = style.trim() ? style : undefined

  // 返回图片的 HTML 模板
  return html`<img src="${src}" alt="${alt}" title="${title}" style=${ifDefined(styleValue)} />`
}

const renderText = (ask: AstToken, _chil: TemplateResult[], _option: any): TemplateResult => {
  const token: Token = ask.node
  return html`${token.content}`
}

const renderHtmlBlock = (ask: AstToken, _chil: TemplateResult[], _option: any): TemplateResult => {
  const token: Token = ask.node
  return html`${unsafeHTML(token.content)}`
}

const renderHtmlInline = (ask: AstToken, chil: TemplateResult[], _option: any): TemplateResult => {
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
