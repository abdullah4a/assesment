import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import defaultRoutes from './default'
import investmentRoutes from './investments'

const routes: Array<RouteRecordRaw> = [
  ...defaultRoutes,
  ...investmentRoutes
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
