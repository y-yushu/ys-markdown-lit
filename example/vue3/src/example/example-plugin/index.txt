<script setup lang="ts">
import { ref, h, render } from 'vue'
import 'ys-md-rendering'
import CardAuto from './render.vue'
import tailwindCss from './index.css?inline'

interface YsRenderUpdateDetail {
  key: string
  type: string
  el: HTMLElement
  content: string
  iscomplete?: boolean
  meta?: unknown
}

const obj = {
  title: '台湾海峡',
  desc: '台湾海峡，是中国大陆与中华人民共和国台湾岛之间连通南海、东海的海峡。西起福建省沿海，东至台湾岛西岸；南北界线有多种说法，一般标准是：南起台湾南端猫鼻头~广东南澳岛之间的连线，北至台湾北端富贵角~福建连江北茭的连线。\n\n台湾海峡纵长约400公里，面积约9万平方公里。南宽北窄，南口宽约400公里，北口宽约200公里，北部最窄处为130公里。 **[1]** 其是贯通中国南北海运的要道，处于中国东海大陆架上，地形起伏不平，平均水深约60米。海峡位于亚热带、北热带季风气候区。受黑潮影响，海峡水温较高，盐度和透明度较大、风浪较大。 **[2]** 台湾海峡资源丰富，是中国重要渔场之一。鲯、鲔和鲨为这里三大渔产。海峡底部富集油气资源，还有钛铁、磁铁、金红石、独居石和锆石等矿，品位高，储量大。'
}

const json = JSON.stringify(obj)
const text = `<cu-card>${json}</cu-card>`

const mdstr = ref(text)

const getDom = (el: HTMLElement) => {
  if (el.shadowRoot) {
    return el.shadowRoot as unknown as HTMLElement
  } else {
    return el
  }
}

const appInstances = new Map<string, any>()

const handleCuCardInstance = (event: { detail: YsRenderUpdateDetail }) => {
  const { el, key } = event.detail
  const dom = getDom(el)
  const style = document.createElement('style')
  style.textContent = tailwindCss
  dom.appendChild(style)
  render(h(CardAuto, { title: '', desc: '' }), dom)
  appInstances.set(key, { el: dom })
}

const handleCuCardUpdate = (event: { detail: YsRenderUpdateDetail }) => {
  const { key, content, iscomplete } = event.detail
  const instance = appInstances.get(key)
  if (instance && iscomplete) {
    try {
      const data = JSON.parse(content)
      render(h(CardAuto, { title: data.title, desc: data.desc }), instance.el)
    } catch (err) {
      console.error('cu-card-update error', err)
    }
  }
}
</script>

<template>
  <ys-md-rendering :content="mdstr" @cu-card-instance="handleCuCardInstance" @cu-card-update="handleCuCardUpdate">
    <div data-register="cu-card"></div>
  </ys-md-rendering>
</template>
