
import { createApp } from 'vue'
import App from '@/sys/App.vue'
import router from '../src/sys/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '@logicflow/core/dist/style/index.css'
import '@logicflow/extension/lib/style/index.css'



const app=createApp(App)
app.use(router)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.mount('#App')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
