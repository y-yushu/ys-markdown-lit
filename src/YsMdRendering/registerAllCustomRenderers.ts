import { html, render } from 'lit'
import type { TemplateResult } from 'lit'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import Token from 'markdown-it/lib/token.mjs'
import type { AstToken } from '../types'

export type RenderFunction = (ask: AstToken, chil: TemplateResult[], option?: any) => TemplateResult

export type RenderMethods = Record<string, RenderFunction>

const rederInline = (_ask: AstToken, chil: TemplateResult[], _option: any): TemplateResult => {
  return html`${chil}`
}

// 注册`H标题`渲染
const renderHeading = (ask: AstToken, chil: TemplateResult[], _option: any): TemplateResult => {
  const token: Token = ask.node

  switch (token.tag) {
    case 'h1':
      return html`<h1 class="ys-md-heading ys-md-h1" part="heading heading-1">${chil}</h1>`
    case 'h2':
      return html`<h2 class="ys-md-heading ys-md-h2" part="heading heading-2">${chil}</h2>`
    case 'h3':
      return html`<h3 class="ys-md-heading ys-md-h3" part="heading heading-3">${chil}</h3>`
    case 'h4':
      return html`<h4 class="ys-md-heading ys-md-h4" part="heading heading-4">${chil}</h4>`
    case 'h5':
      return html`<h5 class="ys-md-heading ys-md-h5" part="heading heading-5">${chil}</h5>`
    case 'h6':
      return html`<h6 class="ys-md-heading ys-md-h6" part="heading heading-6">${chil}</h6>`
  }
  console.error('[heading标签解析异常]', token)
  return html`<p>${chil}</p>`
}

// 注册`p`标签渲染
const renderParagraph = (ask: AstToken, chil: TemplateResult[], _option: any): TemplateResult => {
  const token: Token = ask.node

  if (token.hidden) {
    return html`${chil}`
  } else {
    return html`<p class="ys-md-p" part="paragraph">${chil}</p>`
  }
}

// 注册`blockquote`渲染
const renderBlockquote = (_ask: AstToken, chil: TemplateResult[], _option: any): TemplateResult => {
  return html`<blockquote class="ys-md-blockquote" part="blockquote">${chil}</blockquote>`
}

// 注册 strong 渲染
const renderStrong = (_ask: AstToken, chil: TemplateResult[], _option: any): TemplateResult => {
  return html`<strong class="ys-md-strong" part="strong">${chil}</strong>`
}

// 注册 em 渲染
const renderEm = (_ask: AstToken, chil: TemplateResult[], _option: any): TemplateResult => {
  return html`<em class="ys-md-em" part="emphasis">${chil}</em>`
}

// 注册 s 渲染
const renderS = (_ask: AstToken, chil: TemplateResult[], _option: any): TemplateResult => {
  return html`<s class="ys-md-s" part="strikethrough">${chil}</s>`
}

const isTaskList = (ask: AstToken) => {
  const listItems = ask.children.filter(child => child.node.type === 'list_item_open')
  return listItems.length > 0 && listItems.every(child => child.node.meta?.taskList === true)
}

// 注册有序列表渲染
const renderOrderedList = (_ask: AstToken, chil: TemplateResult[], _option: any): TemplateResult => {
  // 寻找起始数字
  const token: Token = _ask.node
  const taskList = isTaskList(_ask)
  const className = taskList ? 'ys-md-ol ys-md-task-list' : 'ys-md-ol'
  const part = taskList ? 'list ordered-list task-list' : 'list ordered-list'
  const attrs = token.attrs || []
  let startNumber = 1
  for (let i = 0; i < attrs.length; i++) {
    if (attrs[i][0] === 'start') {
      startNumber = Number(attrs[i][1])
      break
    }
  }

  return html`<ol class=${className} part=${part} start="${startNumber}">
    ${chil}
  </ol>`
}

const renderBulletList = (_ask: AstToken, chil: TemplateResult[], _option: any): TemplateResult => {
  const taskList = isTaskList(_ask)
  const className = taskList ? 'ys-md-ul ys-md-task-list' : 'ys-md-ul'
  const part = taskList ? 'list unordered-list task-list' : 'list unordered-list'
  return html`<ul class=${className} part=${part}>
    ${chil}
  </ul>`
}

const renderListItem = (_ask: AstToken, chil: TemplateResult[], _option: any): TemplateResult => {
  const token: Token = _ask.node
  const isTaskListItem = token.meta?.taskList === true
  const className = isTaskListItem ? 'ys-md-li ys-md-task-list-item' : 'ys-md-li'
  const part = isTaskListItem ? 'list-item task-list-item' : 'list-item'
  return html`<li class=${className} part=${part}>${chil}</li>`
}

const renderTable = (_ask: AstToken, chil: TemplateResult[], _option: any): TemplateResult => {
  return html`<div class="ys-table-wrap ys-md-table-wrap" part="table-wrap">
    <table class="ys-md-table" part="table">
      ${chil}
    </table>
  </div> `
}

const renderThead = (_ask: AstToken, chil: TemplateResult[], _option: any): TemplateResult => {
  return html`<thead class="ys-md-thead" part="table-head">
    ${chil}
  </thead>`
}

const renderTbody = (_ask: AstToken, chil: TemplateResult[], _option: any): TemplateResult => {
  return html`<tbody class="ys-md-tbody" part="table-body">
    ${chil}
  </tbody>`
}

const renderTr = (_ask: AstToken, chil: TemplateResult[], _option: any): TemplateResult => {
  return html`<tr class="ys-md-tr" part="table-row">
    ${chil}
  </tr>`
}

const renderTh = (_ask: AstToken, chil: TemplateResult[], _option: any): TemplateResult => {
  return html`<th class="ys-md-th" part="table-header-cell">${chil}</th>`
}

const renderTd = (_ask: AstToken, chil: TemplateResult[], _option: any): TemplateResult => {
  return html`<td class="ys-md-td" part="table-cell">${chil}</td>`
}
type LinkClickDetail = {
  text: string
  href: string
  anchor: HTMLAnchorElement
  rawEvent: MouseEvent
}

const isModifiedClick = (e: MouseEvent) => e.button === 1 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey

const renderLink = (ask: AstToken, chil: TemplateResult[], _option: any): TemplateResult => {
  const token: Token = ask.node
  const attrs: Array<[string, string]> | null = token.attrs || []
  const href = attrs!.find(attr => attr[0] === 'href')?.[1] || ''

  const handleClick = (e: MouseEvent) => {
    const anchorEl = e.currentTarget as HTMLAnchorElement
    if (isModifiedClick(e)) return // 中键/组合键，交给浏览器

    // 解析 URL，支持相对链接与协议相对链接(//)
    let url: URL | null = null
    try {
      url = new URL(href, window.location.href)
    } catch {
      // 无法解析成 URL 的情况，保持 url=null
    }

    // 在派发自定义事件前，先阻止默认；若外部不拦截，我们再执行兜底跳转
    e.preventDefault()

    // 从宿主元素派发（穿透 shadow）
    const root = anchorEl.getRootNode()
    const hostEl = root instanceof ShadowRoot ? (root.host as HTMLElement) : anchorEl
    const text = (chil?.[0]?.values?.[0] as string) || ''
    const customEvt = new CustomEvent<LinkClickDetail>('link-click', {
      detail: { text, href, anchor: anchorEl, rawEvent: e },
      bubbles: true,
      composed: true,
      cancelable: true
    })

    // 若外部没有 e.preventDefault()，则 notCanceled 为 true -> 我们执行兜底跳转
    const notCanceled = hostEl.dispatchEvent(customEvt)

    if (notCanceled) {
      // 1) 锚点(#section)
      if (href.startsWith('#')) {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
        return
      }

      // 2) 无法解析成 URL 的场景：直接走 location
      if (!url) {
        window.location.href = href
        return
      }

      // 3) 根据协议处理：同时涵盖 http 与 https
      const proto = url.protocol // 'http:' | 'https:' | 'mailto:' | 'tel:' | ...
      if (proto === 'http:' || proto === 'https:') {
        // 同源 -> 认为是站内链接（相对/绝对），否则外链
        const sameOrigin = url.origin === window.location.origin
        if (sameOrigin) {
          // 站内：默认整页跳转（如果你更想用 SPA 路由，建议外部监听来接管）
          window.location.assign(url.href)
        } else {
          // 外链：新开
          window.open(url.href, '_blank')
        }
      } else {
        // 4) 其他协议（mailto:, tel:, sms:, weixin:, …）
        window.location.href = href
      }
    }
  }

  return html`<a
    class="ys-md-a"
    part="link"
    href="${href}"
    target="_blank"
    rel="noreferrer noopener nofollow"
    @click=${handleClick}
    >${chil}</a
  >`
}

const renderFence = (ask: AstToken, _chil: TemplateResult[], _option: any): TemplateResult => {
  const token: Token = ask.node

  return html`
    <div class="ys-code-block ys-md-code-block" part="code-block">
      <div class="ys-code-block-header ys-md-code-block-header" part="code-block-header">
        <span class="ys-code-block-title ys-md-code-block-title" part="code-block-title">${token.info}</span>
      </div>
      <pre class="ys-md-code-pre" part="code-pre"><code class="ys-md-code-content" part="code-content">${token.content}</code></pre>
    </div>
  `
}

const renderCodeBlock = (ask: AstToken, _chil: TemplateResult[], _option: any): TemplateResult => {
  const token: Token = ask.node

  return html`
    <div class="ys-code-block ys-md-code-block" part="code-block">
      <div class="ys-code-block-header ys-md-code-block-header" part="code-block-header">
        <span class="ys-code-block-title ys-md-code-block-title" part="code-block-title">代码</span>
      </div>
      <pre class="ys-md-code-pre" part="code-pre"><code class="ys-md-code-content" part="code-content">${token.content}</code></pre>
    </div>
  `
}

const renderCodeInline = (ask: AstToken, _chil: TemplateResult[], _option: any): TemplateResult => {
  const token: Token = ask.node
  return html`<code class="ys-md-code-inline" part="code-inline">${token.content}</code>`
}

const renderTaskCheckbox = (ask: AstToken, _chil: TemplateResult[], _option: any): TemplateResult => {
  const checked = ask.node.meta?.checked === true
  const className = checked ? 'ys-md-task-checkbox ys-md-task-checkbox-checked' : 'ys-md-task-checkbox ys-md-task-checkbox-unchecked'
  const part = checked ? 'task-checkbox task-checkbox-checked' : 'task-checkbox task-checkbox-unchecked'

  return html`<input class=${className} part=${part} type="checkbox" ?checked=${checked} disabled />`
}

const renderHr = (_ask: AstToken, _chil: TemplateResult[], _option: any): TemplateResult => {
  return html`<hr class="ys-md-hr" part="divider" />`
}

const renderSoftbreak = (_ask: AstToken, _chil: TemplateResult[], option: any): TemplateResult => {
  if (option?.breaks) {
    // 软换行也算作换行
    return html`<br class="ys-md-br" part="line-break" />`
  } else {
    return html`${' '}`
  }
}

const renderHardbreak = (_ask: AstToken, _chil: TemplateResult[], _option: any): TemplateResult => {
  return html`<br class="ys-md-br" part="line-break" />`
}

const renderImage = (ask: AstToken, _chil: TemplateResult[], _option: any): TemplateResult => {
  const token: Token = ask.node
  const attrs: Array<[string, string]> | null = token.attrs || []
  const src = attrs.find(attr => attr[0] === 'src')?.[1] || ''
  const alt = attrs.find(attr => attr[0] === 'alt')?.[1] || ''
  const title = attrs.find(attr => attr[0] === 'title')?.[1] || ''

  // 返回图片的 HTML 模板
  return html`<img class="ys-md-img" part="image" src="${src}" alt="${alt}" title="${title}" />`
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
  let content = token.content
  const middleContentHTML = container.innerHTML
  if (middleContentHTML) content += middleContentHTML
  if (end?.content) content += end.content
  return html`${unsafeHTML(content)}`
}

// 渲染颜色标签
const renderColor = (ask: AstToken, _chil: TemplateResult[], _option: any): TemplateResult => {
  const token: Token = ask.node
  return html`<div class="ys-inline-color ys-md-inline-color" part="inline-color">
    <div class="ys-color-swatch ys-md-color-swatch" part="color-swatch" style="background-color: ${token.content};"></div>
    ${token.content}
  </div>`
}

const renderMark = (_ask: AstToken, chil: TemplateResult[], _option: any): TemplateResult => {
  return html`<mark class="ys-md-mark" part="mark">${chil}</mark>`
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
  code_block: renderCodeBlock,
  code_inline: renderCodeInline,
  task_checkbox: renderTaskCheckbox,
  hr: renderHr,
  softbreak: renderSoftbreak,
  hardbreak: renderHardbreak,
  image: renderImage,
  text: renderText,
  html_block: renderHtmlBlock,
  html_inline: renderHtmlInline,
  color: renderColor,
  mark_open: renderMark
}
