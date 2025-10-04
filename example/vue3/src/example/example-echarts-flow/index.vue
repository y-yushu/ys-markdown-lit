<script setup lang="ts">
import { ref } from 'vue'
import { NButton } from 'naive-ui'
import 'ys-md-rendering'
import 'ys-md-rendering/plugin/ys-echarts'

const text = `### echarts图表渲染

<echarts>
{"xAxis":{"type":"category","data":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},"yAxis":{"type":"value"},"series":[{"data":[150,230,224,218,135,147,260],"type":"line"}]}
</echarts>

<echarts>
{"xAxis":{"type":"category","data":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},"yAxis":{"type":"value"},"series":[{"data":[150,230,224,218,135,147,260],"type":"line"}]}
</echarts>

> 渲染完成了
`

const mdstr = ref('')

const render = () => {
  let i = 0
  mdstr.value = ''
  const interval = setInterval(() => {
    mdstr.value += text[i]
    i++
    if (!text[i]) clearInterval(interval)
  }, 20)
}
</script>

<template>
  <n-button @click="render">流输出</n-button>
  <ys-md-rendering :content="mdstr">
    <ys-echarts></ys-echarts>
  </ys-md-rendering>
</template>
