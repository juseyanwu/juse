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
