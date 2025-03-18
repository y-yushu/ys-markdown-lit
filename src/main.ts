// 公共部分头
import { MarkdownStr_url as mock } from './mock'
const button = document.createElement('button')
button.textContent = '测试'
document.body.appendChild(button)

// 注册子组件
// import Think from './widgets/think'
// import Echarts from './widgets/echarts'
// import Katex from './widgets/katex'

// 注册组件方式 2
import { createMdRendering } from './YsMdRendering'
// const myElement = new YsMdRendering({ widgets: [Think, Echarts, Katex], content: 'mock' })
// 创建并初始化 YsMdRendering 实例
const myElement = createMdRendering({
  widgets: [],
  content: mock,
  mdConfig: {
    html: true
    // 其他MarkdownIt选项...
  }
})

// 阻止默认点击事件
myElement.addEventListener('link-click', e => {
  const event = e as unknown as CustomEvent<LinkClickEventDetail>
  event.detail.originalEvent.preventDefault()
})

document.body.appendChild(myElement)

button.addEventListener('click', () => {
  let ind = 0
  const timer = setInterval(() => {
    const str = mock.substring(0, ind)
    myElement.content = str
    ind++
    if (ind > mock.length) {
      clearInterval(timer)
    }
  }, 60)
})
