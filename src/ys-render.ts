import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

type Segment = {
  type: 'text' | 'type1' | 'type2'
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

    const typeMap = {
      type1: { start: '<type1>', end: '</type1>' },
      type2: { start: '<type2>', end: '</type2>' }
    }

    while (cursor < input.length) {
      // 找最近的 type1/type2 起始标签
      let nextType: keyof typeof typeMap | null = null
      let nextStart = Infinity
      for (const key in typeMap) {
        const idx = input.indexOf(typeMap[key as keyof typeof typeMap].start, cursor)
        if (idx !== -1 && idx < nextStart) {
          nextStart = idx
          nextType = key as keyof typeof typeMap
        }
      }

      if (nextType === null || nextStart === Infinity) {
        // 剩余都是普通文本
        result.push({ type: 'text', content: input.slice(cursor) })
        break
      }

      // 普通文本段
      if (nextStart > cursor) {
        result.push({ type: 'text', content: input.slice(cursor, nextStart) })
      }

      const { start, end } = typeMap[nextType]
      const endIdx = input.indexOf(end, nextStart + start.length)

      if (endIdx === -1) {
        // 标签未闭合
        result.push({
          type: nextType,
          content: input.slice(nextStart + start.length),
          incomplete: true
        })
        break
      } else {
        result.push({
          type: nextType,
          content: input.slice(nextStart + start.length, endIdx)
        })
        cursor = endIdx + end.length
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
              // 已缓存 clone
              clone = this.cloneMap.get(key)!
              clone.setAttribute('data-content', item.content)

              // 🔹 每次内容变化，触发 ys-render-update
              clone.dispatchEvent(
                new CustomEvent('ys-render-update', {
                  detail: {
                    key,
                    el: clone,
                    content: item.content,
                    type: item.type,
                    incomplete: item.incomplete
                  },
                  bubbles: true,
                  composed: true
                })
              )
            } else {
              // 第一次创建 clone
              // TODO 样式隔离没做
              clone = proto.cloneNode(true) as HTMLElement
              clone.setAttribute('data-ys-instance', '')
              clone.setAttribute('data-ys-index', String(idx))
              clone.setAttribute('data-register', item.type)
              clone.setAttribute('data-content', item.content)

              this.cloneMap.set(key, clone)

              // 🔹 延迟触发事件
              setTimeout(() => {
                clone.dispatchEvent(
                  new CustomEvent('ys-render-instance', {
                    detail: {
                      key,
                      el: clone,
                      content: item.content,
                      type: item.type,
                      incomplete: item.incomplete
                    },
                    bubbles: true,
                    composed: true
                  })
                )
              })
            }

            return clone
          } else {
            // 普通文本或未注册模板，直接渲染
            return html`<span>${item.content}</span>`
          }
        })}
      </div>
    `
  }
}
