import { createApp } from 'vue'
import App from './App.vue'

//引入全局css
import './style.css'
import '@/assets/styles/tailwind.css';


const app = createApp(App)

//挂载ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//注册路由
import router from './router/index'
app.use(router)
//创建app实例

app.use(ElementPlus)
app.mount('#app')
App.use(ElementPlus)
