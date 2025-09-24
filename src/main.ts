import './assets/main.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
// import { pinia } from "@/pinia"

const app = createApp(App)

// 安装 pinia 和 router
app.use(router)
app.use(ElementPlus)

app.mount('#app')
