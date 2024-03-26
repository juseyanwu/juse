# SSR 服务器端渲染

- / 模拟网络请求
    - index.html  root挂载点 script mian.js
        剩下的靠vue模块化 而vue是由js来工作的
    - 对SEO十分不友好
        爬虫只会爬取index.html，它不能够爬取到js并执行
    - PC or Mobile
        PC端流量来自百度 SEO非常重要
        Mobile 来自于链接分享，App的内嵌页，SEO没那么重要
        VUE SPA 主流开发？  CSR client side rendering

    - 如果做的是PC站 google/baidu
        Server side rendering   除了挂载其他都做
    - vue可以在服务器端运行不？

- 平台无关性渲染
    - VUE除了客户端渲染挂载不能做之外，其他的都可以在服务器端运行
    - 响应式/组件，虚拟DOM 可以在服务器端用node环境运行
    - 虚拟DOM渲染为何种界面，可以由平台决定
        uniapp 小程序
        html
    - 怎么样把SEO做好?
        组件内容以界面需要的string返回
        爬虫就可以拿到了

- CSR   SSR     平台无关性渲染   npm i vue @vue/server-renderer  
@vue/server-renderer    VDOM -> 渲染字符串  

- 了解服务器端渲染SSR和nuxt开发   简历里加上