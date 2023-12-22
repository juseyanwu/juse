# vue3 全家桶 MVVM

- vue 响应式组件开发
    - components
        - common
        - 业务组件
    - views/pages
    - UI组件库 element-plus
- vue-router
    让前端有了路由
    SPA 单页应用开发 快 不需要做传统的http的 request+response
    页面不会白一下

    缺点：SEO 搜索引擎优化不好

- vuex/pinia  财务
    前端可以管理数据了
    - 确保数据流的正确性
        数据在组件里叫什么？状态
    - 将数据与组件剥离，UI组件更单纯

- vue 项目 数据 从后端到页面显示 经过的所有流程和关键环节
    todos
    mysql/mongondb db/todods table
    sql 
    java/node 内存 MVC
    router
    res
    http GET :3000/todos
    axios http.js index.js getTodoList
    store actions -> mutations -> state
    组件 在view目录下， 通过props 传给子组件 可以确保子组件UI化
    UI Component + State + Router = SPA
    UI Component + State = App
    

- pinia?
    - 更简单    
        store/todo.js defineStore 返回值命名以use开头，useTodostore
        import {useTodoStore} from './store/todo.js'
        const {todos} = useTodoStore()
    - 更现代
        hooks编程 use 开头
    - 将数据和UI组件分离开来
