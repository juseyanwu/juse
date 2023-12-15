import { createRouter,createWebHashHistory } from 'vue-router'

//PC兼容性

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            name:'home',
            // App.vue 是用来挂载的，不是用来写具体的
            component:()=> import('@/views/Root.vue'),
            redirect:{name:'discover'},
            children:[
                {
                    path:'discover',
                    name:'discover',
                    component:()=> import('@/views/discover/Discover.vue')
                }
            ]
        }
    ]
})

export default router