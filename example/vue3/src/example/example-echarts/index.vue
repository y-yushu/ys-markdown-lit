<script setup lang="ts">
import { ref } from 'vue'
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

const mdstr = ref(text)
</script>

<template>
  <ys-md-rendering :content="mdstr">
    <ys-echarts></ys-echarts>
  </ys-md-rendering>
</template>
