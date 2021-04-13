/*
 * @Author: cjee
 * @Description:
 */
import { createApp } from 'vue'
import App from './App.vue'
import { store, key } from './store'
import router from './router'
import './index.css'
import Global from './api/global'
import './lib/flexible.js'
const global = Global.getInstance()
global.InitConfig().then((config) => {
  const app = createApp(App)
  app.use(store, key)
  app.use(router)
  app.mount('#app')
  app.config.globalProperties.$config = config
})
