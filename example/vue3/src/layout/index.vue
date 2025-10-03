<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { NLayout, NLayoutHeader, NLayoutSider, NLayoutContent, NMenu, NScrollbar, NConfigProvider, darkTheme, lightTheme } from 'naive-ui'
import { menus } from '@/router/index'

const router = useRouter()
const route = useRoute()

// 默认选中当前路由
const selectedKey = ref(route.path)

watch(
  () => route.path,
  newPath => {
    selectedKey.value = newPath
  }
)

const handleChange = (key: string) => {
  router.push(key)
}

// 监听浏览器深色浅色模式
const systemDark = ref(window.matchMedia('(prefers-color-scheme: dark)').matches)

watchEffect(() => {
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  const listener = (e: MediaQueryListEvent) => {
    systemDark.value = e.matches
  }
  media.addEventListener('change', listener)
  return () => media.removeEventListener('change', listener)
})
</script>

<template>
  <n-config-provider :theme="systemDark ? darkTheme : lightTheme">
    <n-layout class="flex h-screen flex-col">
      <n-layout-header class="flex h-[60px] items-center border-b border-gray-200 p-4">
        <div class="text-2xl font-bold">markdown渲染插件</div>
      </n-layout-header>

      <n-layout-content class="h-[calc(100vh-60px)] flex-1 overflow-auto">
        <n-layout class="h-full" has-sider>
          <n-layout-sider class="border-r border-gray-200">
            <n-scrollbar class="h-full">
              <n-menu v-model:value="selectedKey" :options="menus" @update:value="handleChange" />
            </n-scrollbar>
          </n-layout-sider>
          <n-layout-content class="h-full overflow-auto">
            <router-view />
          </n-layout-content>
        </n-layout>
      </n-layout-content>
    </n-layout>
  </n-config-provider>
</template>
