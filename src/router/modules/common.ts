import type { AppRouteRaw } from '../types'

const routes: AppRouteRaw[] = [
  {
    path: '/:catchAll(.*)',
    index: -1,
    component: () => import('/@/views/not-found/index.vue')
  }
]

export default routes
