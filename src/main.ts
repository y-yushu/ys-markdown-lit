// 公共部分头
import { MarkdownStr_fence as mock } from './mock'
import registerCustomFenceRenderers from './customRenderers/customRenderFence'

registerCustomFenceRenderers()

// 注册子组件
// import Think from './widgets/think'
// import Echarts from './widgets/echarts'
// import Katex from './widgets/katex'

// 注册组件方式 2
import { createMdRendering } from './YsMdRendering'
// 创建并初始化 YsMdRendering 实例
const myElement = createMdRendering({
  widgets: [],
  content: mock
})

// 阻止默认点击事件
myElement.addEventListener('link-click', e => {
  const event = e as unknown as CustomEvent<LinkClickEventDetail>
  event.detail.originalEvent.preventDefault()
})

const BoxLeft = document.getElementById('box-left')!
BoxLeft.appendChild(myElement)

const TestBut = document.getElementById('test-but')!
TestBut.addEventListener('click', () => {
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
