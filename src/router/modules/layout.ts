import type { AppRouteRaw } from '../types'

const routes: AppRouteRaw[] = [
  {
    path: '/',
    name: 'Layout',
    index: 1,
    component: () => import('/@/views/Layout/index.vue'),
    children: [{ path: '/', component: () => import('/@/views/Home/index.vue') }]
  }
]

export default routes
