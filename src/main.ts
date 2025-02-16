import './components/my-element'

// 添加按钮
const button = document.createElement('button')
button.textContent = 'Change Content'
document.body.appendChild(button)

// 测试my-element组件
const myElement = document.createElement('my-element') as any
document.body.appendChild(myElement)

const mock = `<thinking>
这个是思考的内容
</thinking>

# Hello world!

你好啊，丽华`

// 点击按钮修改content值
let count = 0
button.addEventListener('click', () => {
  const _content = mock.substring(0, count)
  myElement.content = _content
  count++
})
