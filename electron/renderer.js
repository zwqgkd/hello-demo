
import { createApp } from 'vue'
import App from '@/sys/App.vue'
import router from '../src/sys/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '@logicflow/core/dist/style/index.css'
import '@logicflow/extension/lib/style/index.css'
import store from '@/sys/store'


const app=createApp(App)
// 配置全局变量 页面中使用 inject 接收
app.provide('global',{
  store:"global store"
})
app.use(router)
app.use(store)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.mount('#App')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
