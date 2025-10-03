import { createRouter, createWebHistory } from 'vue-router'
import type { Router, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

// 左侧菜单
export const menus = [
  {
    type: 'group',
    key: 'basicUsage',
    label: '基础用法',
    children: [
      {
        key: '/basic-usage',
        label: '项目说明',
        component: () => import('@/views/basicUsage/index.vue')
      },
      {
        key: '/basic-usage/base',
        label: '基础用法',
        component: () => import('@/views/basicUsage/base.vue')
      }
    ]
  },
  {
    type: 'group',
    key: 'customStyle',
    label: '自定义样式',
    children: [
      {
        key: '/custom-style',
        label: '样式调整',
        component: () => import('@/views/customStyle/index.vue')
      }
    ]
  },
  {
    type: 'group',
    key: 'usingPlugins',
    label: '支持插件',
    children: [
      {
        key: '/using-plugins',
        label: '使用插件',
        component: () => import('@/views/usingPlugins/index.vue')
      }
    ]
  },
  {
    type: 'group',
    key: 'customPlugin',
    label: '自定义插件',
    children: [
      {
        key: '/custom-plugin',
        label: '自定义插件',
        component: () => import('@/views/customPlugin/index.vue')
      }
    ]
  }
]

// 生成路由
const menuOptions = menus
  .flatMap(item => item.children)
  .map(item => ({
    path: item.key,
    label: item.label,
    component: item.component
  }))

export const routes: RouteRecordRaw[] = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        redirect: '/basic-usage'
      },
      ...menuOptions
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/basic-usage'
  }
]

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router
