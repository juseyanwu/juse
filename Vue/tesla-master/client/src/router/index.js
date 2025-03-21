import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('../views/Map.vue')
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('../views/Community.vue')
    },
    {
      path: '/onlionShop',
      name: 'onlionShop',
      component: () => import('../views/OnlionShop.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../views/Account.vue'),
    },
    {
      path: '/navigation',
      name: 'navigation',
      component: () => import('../views/Navigation.vue')
    },
    {
      path: '/model3',
      name: 'model3',
      component: () => import('../views/Model3.vue')
    },
    {
      path: '/models',
      name: 'models',
      component: () => import('../views/Models.vue')
    },
    {
      path: '/modely',
      name: 'modely',
      component: () => import('../views/Modely.vue')
    },
    {
      path: '/cybertruck',
      name: 'cybertruck',
      component: () => import('../views/Cybertruck.vue')
    },
    {
      path: '/powerwall',
      name: 'powerwall',
      component: () => import('../views/Powerwall.vue')
    },
    {
      path: '/roadSter',
      name: 'roadSter',
      component: () => import('../views/model/roadSter.vue')
    },
    {
      path: '/teslaaccount',
      name: 'teslaaccount',
      component: () => import('../views/TeslaAccount.vue')
    },
    {
      path: '/design',
      name: 'design',
      component: () => import('../views/Book.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin.vue'),
      children:[
        {
          path:'',
          redirect:'/admin/menuhome'
        },
        {
          path:'menuhome',
          name:'menuhome',
          component:()=>import('../views/Manager/menuHome.vue')
        },
        {
          path:'vip',
          name:'vip',
          component:()=>import('../views/Manager/vip.vue')
        },
        {
          path:'car',
          name:'car',
          component:()=>import('../views/Manager/car.vue')
        },
        {
          path:'order',
          name:'order',
          component:()=>import('../views/Manager/order.vue')
        },
        {
          path:'success',
          name:'success',
          component:()=>import('../views/Manager/success.vue')
        }
      ]
    },
  ]
})

export default router
