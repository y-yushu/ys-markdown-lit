<script setup lang="ts">
import { ref } from 'vue'
import 'ys-md-rendering'
import 'ys-md-rendering/plugin/ys-code-highlight'

const text = `好的，以下是一段包含多种语言代码块的Markdown文本，你可以用它来测试Markdown渲染效果：

\`\`\`markdown
# 代码块测试
\`\`\`

### Python代码
\`\`\`python
def hello_world():
    print("Hello, World!")

hello_world()
\`\`\`

### JavaScript代码
\`\`\`javascript
function helloWorld() {
    console.log("Hello, World!");
}

helloWorld();
\`\`\`

### Java代码
\`\`\`java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
\`\`\`

### C++代码
\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
\`\`\`

### HTML代码
\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>
\`\`\`

### SQL代码
\`\`\`sql
SELECT 'Hello, World!' AS greeting;
\`\`\`

以上代码块涵盖了常见的编程语言，你可以将这段Markdown文本复制到支持Markdown渲染的工具中查看效果。
`

const mdstr = ref(text)
</script>

<template>
  <ys-md-rendering :content="mdstr">
    <ys-code-highlight></ys-code-highlight>
  </ys-md-rendering>
</template>
