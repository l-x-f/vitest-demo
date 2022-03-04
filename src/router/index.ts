import {
  createRouter,
  createWebHashHistory as createHistory,
  RouteRecordRaw,
  Router
} from 'vue-router'

export { default as errorPages } from './constantRouter/errorPages'

// 自动加载 asyncRouter 文件夹下所有的异步路由
const moduleFiles = import.meta.globEager('./asyncRouter/*.ts')

// 异步路由
export const asyncRouter = Object.values(moduleFiles).reduce(
  (pre: RouteRecordRaw[], item) => [...pre, ...item.default],
  []
) as RouteRecordRaw[]

// 固定路由
export const constantRouter: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: 'login',
      tagView: false
    },
    component: () => import('@/views/login/index.vue')
  }
]

const router: Router = createRouter({
  history: createHistory(),
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition && to.meta.cache) {
      return savedPosition
    }
    return { left: 0, top: 0 }
  },
  routes: [...constantRouter, ...asyncRouter] as RouteRecordRaw[]
})

export default router
