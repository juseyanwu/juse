//后台系统
import { createRouter, createWebHashHistory } from "vue-router"; //history 用的是 html5.pushState //兼容性有问题 公司内部人员访问的 chrome
// 用户端,移动项目没有这个问题   PC端,政府,企业 就需要考虑兼容性问题
import { usePermissStore } from "../store/permiss.js";
import Home from "../views/home.vue"; //直接引入 有开销
// import { usePermissStore } from "../store/permiss";
// const data = usePermissStore();
//hooks
// console.log(data);
// 设置数组 []
// admin [1,2,3]
// user[1]
// useRoute meta.permiss 你要访问的页面的需要的权限 includes true or false
const routes = [
  {
    path: "/",
    redirect: "/dashboard", //重定向 状态码 301 302
  },
  {
    path: "/",
    name: "Home", // useRouter push
    component: Home, //layout
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        meta: {
          title: "系统首页", // 路由守卫
          permiss: "1", // 哪些页面可以看
        },
        component: () => import("../views/Dashboard.vue"),
      },
      {
        path: "/table",
        name: "basetable",
        meta: {
          title: "表格", // 路由守卫
          permiss: "2", // 哪些页面可以看
        },
        // 动态挂载路由, 异步加载
        component: () => import("../views/Table.vue"),
      },
    ],
  },
  {
    path:'/403',
    name:'403',
    meta:{
        title:'没有权限'
    },
    component:()=>import('../views/403.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | 后台管理系统`;
  //登入后的用户名 用户角色
  // const role = localStorage.getItem('ms_username')
  const role = "admin";
  const permiss = usePermissStore();
  // console.log(permiss);
  if (!role && to.path8 !== "/login") {
    next("/login");
  } else if (to.meta.permiss && !permiss.roleList[role].includes(to.meta.permiss)) {
    next("/403");
  }else{
    next();
  }
});
export default router;
