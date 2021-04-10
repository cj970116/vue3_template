import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const Main = () => import('../pages/main.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
