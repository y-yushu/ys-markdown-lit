// 公共部分头
import { MarkdownStr1 as mock } from './components/my-element/mock'
const button = document.createElement('button')
button.textContent = '测试'
document.body.appendChild(button)

// 注册子组件
import Think from './widgets/think/config'
import Echarts from './widgets/echarts/config'

// 注册组件方式 2
import { MyElement } from './components/my-element'
const myElement = MyElement.createWithData({ widgets: [Think, Echarts], content: mock })
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
