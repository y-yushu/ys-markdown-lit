<script setup lang="ts">
import { ref, h, render } from 'vue'
import TypeOne from './components/type1.vue'
import TypeTwo from './components/type2.vue'

// 模拟流式数据
const mdstr =
  '根据《建设项目安全设施“三同时”监督管理办法》<type1>第四条规定</type1>："生产经营单位是建设项目安全设施建设的责任主体。建设项目安全设施必须与主体工程<type2>同时设计、同时施工、同时投入生产和使用</type2>（以下简称"三同时"）。'

const content = ref('')
let i = 0

const startRender = () => {
  const timer = setInterval(() => {
    content.value += mdstr[i++]
    if (i >= mdstr.length) clearInterval(timer)
  }, 30)
}

// 保存所有挂载记录
const appInstances = new Map<string, { el: HTMLElement; type: string; content: string }>()

// 根据 type 返回 Vue 组件
const resolveComponent = (type: string) => {
  if (type === 'type1') return TypeOne
  if (type === 'type2') return TypeTwo
  return null
}

// 处理初始化挂载
const onRenderInstance = (event: any) => {
  const { key, type, content, el } = event.detail
  const Comp = resolveComponent(type)

  if (Comp) {
    render(h(Comp, { content }), el) // 挂载虚拟节点到指定 el
    appInstances.set(key, { el, type, content })
    console.log('✅ 挂载实例:', key, content)
  } else {
    // 默认直接填充文本
    el.textContent = content
  }
}

// 处理更新
const onRenderUpdate = (event: any) => {
  const { key, content } = event.detail
  const record = appInstances.get(key)
  if (record) {
    const Comp = resolveComponent(record.type)
    if (Comp) {
      render(h(Comp, { content }), record.el) // 🔥 重新渲染组件
      record.content = content
    } else {
      record.el.textContent = content
    }
    console.log('♻️ 更新实例:', key, content)
  }
}
</script>

<template>
  <div>
    <button @click="startRender">开始渲染</button>

    <!-- ys-render 内部会触发 instance 和 update 事件 -->
    <ys-render :content="content" @ys-render-instance="onRenderInstance" @ys-render-update="onRenderUpdate">
      <div data-register="type1"></div>
      <div data-register="type2"></div>
      <div data-register="type3"></div>
    </ys-render>
  </div>
</template>
