import { createApp } from 'vue'
import router from './router'
import { setupRouterGuard } from './router/guard/index'
import { setupGlobalProperties } from './global'
// tailwindcss
import './assets/css/tailwindcss.scss'
// video
import vue3videoPlay from 'vue3-video-play'
import 'vue3-video-play/dist/style.css'
//iconify
import '@purge-icons/generated' // <-- This

import App from './App.vue'
import { store } from './store'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(vue3videoPlay)

// // 注册svg插件
// app.component('svg-icon', svgIcon)

// setup store
// setupStore()

// setup router guard
setupRouterGuard()

// 全局注册
setupGlobalProperties(app)

app.mount('#app')
