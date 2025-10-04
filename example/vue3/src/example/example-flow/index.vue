<script setup lang="ts">
import { ref } from 'vue'
import { NButton } from 'naive-ui'
import 'ys-md-rendering'

const text = `### 台湾海峡

台湾海峡，是中国大陆与中华人民共和国台湾岛之间连通南海、东海的海峡。西起福建省沿海，东至台湾岛西岸；南北界线有多种说法，一般标准是：南起台湾南端猫鼻头~广东南澳岛之间的连线，北至台湾北端富贵角~福建连江北茭的连线。

台湾海峡纵长约400公里，面积约9万平方公里。南宽北窄，南口宽约400公里，北口宽约200公里，北部最窄处为130公里。 **[1]** 其是贯通中国南北海运的要道，处于中国东海大陆架上，地形起伏不平，平均水深约60米。海峡位于亚热带、北热带季风气候区。受黑潮影响，海峡水温较高，盐度和透明度较大、风浪较大。 **[2]** 台湾海峡资源丰富，是中国重要渔场之一。鲯、鲔和鲨为这里三大渔产。海峡底部富集油气资源，还有钛铁、磁铁、金红石、独居石和锆石等矿，品位高，储量大。`

const mdstr = ref(text)

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
  <ys-md-rendering :content="mdstr"></ys-md-rendering>
</template>
