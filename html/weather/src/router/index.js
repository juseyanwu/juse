import {createRouter,createMemoryHistory, createWebHistory} from 'vue-router'

const routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        name:'home',
        component:()=>import('../view/Home.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router