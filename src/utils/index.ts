import { render } from 'lit'
import type { TemplateResult } from 'lit'

/**
 * 设置元素内容，根据是否有 shadowRoot 来判断是直接设置 innerHTML 还是修改 shadowRoot 内容
 * @param el 要设置内容的元素
 * @param content 要设置的内容，支持字符串或 HTMLElement
 */
export const setContent = (el: HTMLElement, content: TemplateResult) => {
  if (el.shadowRoot) {
    render(content, el.shadowRoot)
  } else {
    render(content, el)
  }
}

// 生成随机id
export function generateUUID(): string {
  return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, c => (parseInt(c) ^ ((Math.random() * 16) >> (parseInt(c) / 4))).toString(16))
}
