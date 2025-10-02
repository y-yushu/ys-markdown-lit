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

/**
 * onRenderInstance：首次创建 clone 时触发
 * event.detail.el 是 clone（proto clone），它包含我们通过 v-html 注入的 <style> 和 <div class="ys-mount"></div>
 * 我们要把 Vue 组件挂载到 el.querySelector('.ys-mount')
 */
const onRenderInstance = (event: any) => {
  const { key, type, content, el } = event.detail
  const Comp = resolveComponent(type)

  if (Comp) {
    let mountPoint: HTMLElement | null = null
    if ((el as HTMLElement).shadowRoot) {
      mountPoint = (el as HTMLElement).shadowRoot!.querySelector('.ys-mount')
    } else {
      // 如果没有 shadow，就 fallback 回原逻辑
      mountPoint = (el as HTMLElement).querySelector('.ys-mount')
    }
    if (mountPoint) {
      // 首次渲染：渲染组件到 mountPoint（render 会 patch mountPoint 的内容）
      render(h(Comp, { content }), mountPoint)
      appInstances.set(key, { el: mountPoint, type, content })
      console.log('✅ 挂载实例:', key, content)
    } else {
      console.log('⚠️ 挂载到根 el（没有 mountPoint）:', key)
    }
  } else {
    console.log('⚠️ 没有 mountPoint，直接挂载到根 el:', key)
  }
}
// const onRenderInstance = (event: any) => {
//   const { key, type, content, el } = event.detail
//   const Comp = resolveComponent(type)

//   if (Comp) {
//     // 找到 mount 点（由 proto 提供）
//     const mountPoint = (el as HTMLElement).querySelector('.ys-mount') as HTMLElement | null
//     if (mountPoint) {
//       // 首次渲染：渲染组件到 mountPoint（render 会 patch mountPoint 的内容）
//       render(h(Comp, { content }), mountPoint)
//       appInstances.set(key, { el: mountPoint, type, content })
//       console.log('✅ 挂载实例:', key, content)
//     } else {
//       // 如果没有 mountPoint，那么直接把组件挂到 el（不推荐）
//       render(h(Comp, { content }), el)
//       appInstances.set(key, { el: el as HTMLElement, type, content })
//       console.log('⚠️ 挂载到根 el（没有 mountPoint）:', key)
//     }
//   } else {
//     // 没有对应组件，直接文本渲染
//     el.textContent = content
//   }
// }

/**
 * onRenderUpdate：内容变化时触发，我们重新 render 同样的组件 vnode 到相同 mountPoint，
 * render(h(Comp, { content }), mountPoint) 会把新 props 传到组件并更新视图
 */
const onRenderUpdate = (event: any) => {
  const { key, content } = event.detail
  const rec = appInstances.get(key)
  if (rec) {
    const Comp = resolveComponent(rec.type)
    if (Comp && rec.el) {
      render(h(Comp, { content }), rec.el)
      rec.content = content
      console.log('♻️ 更新实例:', key, content)
    } else if (rec.el) {
      rec.el.textContent = content
    }
  }
}

/**
 * 通过 v-html 注入的 proto HTML（包含 <style> 和 mount 点）
 * 注意：字符串里有 <style>，但它是在运行时由 v-html 添加，不是 SFC 模板里的静态 <style>，
 * 因此不会触发 Vue 的模板静态检查错误。
 */
const protoType1 = `.type1-wrapper {
  display: inline-block;
  padding: 6px 10px;
  margin: 2px 4px;
  border-radius: 8px;
  background: linear-gradient(180deg,#f0f9ff,#e6f3ff);
  border: 1px solid #90caf9;
  font-size: 14px;
  color: #0d47a1;
}
.type1-label { margin-right:6px; font-weight:700; }
.type1-content { font-weight:500; }`

const protoType2 = `.type2-wrapper {
display:inline-block;
padding:6px 10px;
margin:2px 4px;
border-radius:8px;
background:#f0fff4;
border:1px solid red;
color:#145214;
}`
</script>

<template>
  <div>
    <button @click="startRender">开始渲染</button>

    <!-- 注意这里把 style/html 放进 slot 内容的方式改为 v-html -->
    <ys-render :content="content" @ys-render-instance="onRenderInstance" @ys-render-update="onRenderUpdate">
      <div data-register="type1" :data-style="protoType1">
        <div class="ys-mount"></div>
      </div>
      <div data-register="type2" :data-style="protoType2">
        <div class="ys-mount"></div>
      </div>
      <div data-register="type3"><!-- 如果需要，加入 proto --></div>
    </ys-render>

    <span class="type1-wrapper">测试</span>
  </div>
</template>
