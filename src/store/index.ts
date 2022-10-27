import { createPinia } from 'pinia'
import useHomeStore from './modules/home'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const store = createPinia()
// 注册pinia持久化插件
store.use(piniaPluginPersistedstate)

const useStore = () => {
  return {
    home: useHomeStore()
  }
}

export { useStore, store }
