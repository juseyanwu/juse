# Vue 网易云音乐

- 音乐界面
    npm init vite 开发脚手架
- 后台
    netsea  

- 界面
    npm init vite 开发脚手架
    ：5173
- 后台
    netsea
    ：3000
- 前后端分离的全栈

    npm 换一个源
    npm config set registry https://registry.npmmirror.com
- npm i -D 如果要引入的这个包只在开发阶段会用到，那么用-D可以达到包装时（build）不打包，它会去到devDependencies里
- tailwindcss 提升60%以上的css开发  原子化css开发
    - npm i -D tailwindcss postcss autoprefixer
      npx tailwindcss init -p   初始化工作
       npx 可以执行安装或未安装的包
    - 声明开发目录下所有层级中， .vue等格式文件支持tailwindcss
       去到tailwind.config里加
        "./src/**/*.{vue,js,ts,jsx,tsx}"
        **可以包括下面的所有文件，让这些格式的文件可以使用tailwindcss
    - tailwind.css
    可以使用tailwind 类名

- 切页面
- 组件化思维
    - 从根组件开始 App.vue
    - layout 组件
        - Menu  
        - Header
        
    - vite.config.js是vite 工程化的配置文件
        - alias 短路径
            @ -> ./src 回城

- 企业级vue开发框架 element-plus PC版用的
    有好多组件可以拿来就用
    vue 是一个渐进式的MVVM 的开发框架 是一种开发模式
    element-plus 是一个组件库 提供一个我们想要的组件

- 我们在vite里面写了一段Element plues 自动引入的代码

- 通用组件
    /components/common/
    不属于特定的组件，有极高的复用性 在多个项目中可以复用

- 如何引入图标字体库
    - 要用到哪些图标?
        import {} from '@icon-park/vue-next'

- 断点调试法
    当我们开始想写项目的时候，在GitHub上排名靠前的，vue-music 看不懂的地方，一路跟下去，优秀的代码学习方法
    - 组件和数据接口分离 /components
        让组件干净 template script
    - 数据统一管理 / utils / apis
        - api.js
            业务接口，函数名字自带解释功能
        - http.js
            复用axios的底层封装

- 开发文档
    - 前端要响应式数据
    - 数据请求要分离到utils/api.js
    - 后端是个黑盒子
        1. 基于http
            axios 提供 其封装了get方法
        2. 看后端给的开发文档
            /url GET/POST params{}
            response 什么？
    - 自己的项目
        - Laf 来做后端
            - 数据库
            - 云函数
            - 开发文档 亮点

- 有哪些组件？
    - 父子组件
    - 页面组件
        vue-router  放在views/
    - 通用组件
        components/common/

    - 框架UI组件
    - 业务组件 / components

- 路由的组件流程
    - router 配置文件夹
    - views/ 页面级别组件
    - 路由接管了应用
        会有好多页面的，views比component级别高
    - App.vue router-view Root.vue
    - 其他各个页面，多级路由