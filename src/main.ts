import './components/my-element'
import { MarkdownStr13 as mock } from './components/my-element/mock'

const button = document.createElement('button')
button.textContent = '测试'
document.body.appendChild(button)

// 测试my-element组件
const myElement = document.createElement('my-element') as any
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
