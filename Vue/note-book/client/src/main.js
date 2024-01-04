import { createApp } from 'vue'
import App from './App.vue'
import 'amfe-flexible' //自动设置根字体大小
import './assets/style/reset.css'
import {Button} from 'vant'
import 'vant/lib/index.css'
import router from './router'
import { Form, Field, CellGroup } from 'vant';

const app = createApp(App)

app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(Button)
app.use(router)
app.mount('#app')