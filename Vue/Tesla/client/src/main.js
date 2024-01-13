import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import 'animate.css/animate.min.css'
import 'animate.css'
import App from './App.vue'
import router from './router'

// import './assets/reset.css'

const store = createPinia()
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(store)
app.use(router)
app.use(ElementPlus)

// router.beforeEach((to, from, next) => {    // 全局路由守卫
//     console.log(to);
//     console.log(store.state._rawValue.accountStore.useAccount);
//     if(store.state._rawValue.accountStore.useAccount){   // 未登陆
//         next()
//     }
    
// })

app.mount('#app')

// ElementPlus在全局加载了，影响性能
// app.use(ElPover)
// app.use(...)
// 按需加载