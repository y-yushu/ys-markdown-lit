// 公共部分头
import { MarkdownStr13 as mock } from './components/my-element/mock'
const button = document.createElement('button')
button.textContent = '测试'
document.body.appendChild(button)

// 注册子组件
import Think from './widgets/think/config'

// // 注册组件方式 1
// import './components/my-element'
// const myElement = document.createElement('my-element') as any
// myElement.registerWidget(Think)
// document.body.appendChild(myElement)

// 注册组件方式 2
import { MyElement } from './components/my-element'
const myElement = MyElement.createWithData({ widgets: [Think] })
document.body.appendChild(myElement)

button.addEventListener('click', () => {
  let ind = 0
  const timer = setInterval(() => {
    console.log('12123')
    const str = mock.substring(0, ind)
    myElement.content = str
    ind++
    if (ind > mock.length) {
      clearInterval(timer)
    }
  }, 200)
})
