import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

type Segment = {
  type: 'text' | 'type1'
  content: string
  incomplete?: boolean
}

@customElement('ys-render')
export class YsRender extends LitElement {
  @property({ type: String }) content = '' // 外部传入的字符串

  private templates = new Map<string, HTMLElement>()
  private cloneMap = new Map<string, HTMLElement>() // 缓存 clone 元素

  static styles = css`
    .hidden {
      display: none;
    }
  `

  protected firstUpdated() {
    const slot = this.shadowRoot?.querySelector('slot')
    slot?.addEventListener('slotchange', () => {
      const nodes = slot.assignedElements()
      nodes.forEach(el => {
        const type = el.getAttribute('data-register')
        if (type) {
          this.templates.set(type, el.cloneNode(true) as HTMLElement)
        }
      })
    })
  }

  parseTypedText(input: string): Segment[] {
    const result: Segment[] = []
    let cursor = 0

    while (cursor < input.length) {
      const startIdx = input.indexOf('<type1>', cursor)
      if (startIdx === -1) {
        // 没有更多 type1，剩余全是普通文本
        result.push({ type: 'text', content: input.slice(cursor) })
        break
      }

      // 普通文本段
      if (startIdx > cursor) {
        result.push({ type: 'text', content: input.slice(cursor, startIdx) })
      }

      const endIdx = input.indexOf('</type1>', startIdx + 7)
      if (endIdx === -1) {
        // 未闭合的 type1
        result.push({
          type: 'type1',
          content: input.slice(startIdx + 7), // <type1> 后到末尾
          incomplete: true
        })
        break // 已到末尾
      } else {
        // 正常闭合的 type1
        result.push({
          type: 'type1',
          content: input.slice(startIdx + 7, endIdx)
        })
        cursor = endIdx + 8
      }
    }

    return result
  }

  protected render() {
    const list = this.parseTypedText(this.content)

    return html`
      <div class="hidden"><slot></slot></div>
      <div id="ys-render-container">
        ${list.map((item, idx) => {
          const proto = this.templates.get(item.type)

          if (proto) {
            const key = `${item.type}-${idx}`
            let clone: HTMLElement

            if (this.cloneMap.has(key)) {
              // ✅ 已缓存的 clone 复用
              clone = this.cloneMap.get(key)!
              clone.setAttribute('data-content', item.content)
            } else {
              // 第一次创建 clone
              clone = proto.cloneNode(true) as HTMLElement
              clone.setAttribute('data-ys-instance', '')
              clone.setAttribute('data-ys-index', String(idx))
              clone.setAttribute('data-register', item.type)
              clone.setAttribute('data-content', item.content)
              clone.innerHTML = '' // 外部填充

              this.cloneMap.set(key, clone)

              // 🔹 延迟触发事件
              setTimeout(() => {
                clone.dispatchEvent(
                  new CustomEvent('ys-render-instance', {
                    detail: {
                      el: clone,
                      content: item.content,
                      type: item.type,
                      incomplete: item.incomplete, // 新增标记
                      updateContent: (newContent: string) => {
                        clone.setAttribute('data-content', newContent)
                      }
                    },
                    bubbles: true,
                    composed: true
                  })
                )
              })
            }

            return clone
          } else {
            // 普通文本或未注册模板，直接渲染，不缓存
            return html`<span>${item.content}</span>`
          }
        })}
      </div>
    `
  }
}
