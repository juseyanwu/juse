# 全栈快速一览

- 前端 http 服务 html/css 请求到本地渲染 还有js
    5500 web服务
- 后端 接口服务 
    在某个url上 返回json数据
    3000 端口
- 前后端分离
    json-sever 快速的把后端数据server启动了
    - npm init -y  把项目变成后端项目
    - npm i json-server   给个json文件就会笑，启动数据服务
        db.json 快速的伪造数据
    - package.json
        script
        "dev": "json-sever -w db.json"

- restful api   json-server遵守这个规则
    一切皆资源  url设计规则
    资源展示的方式，就是 restful api 要遵守的
    GET http://localhost:3000/posts
    GET http://localhost:3000/posts/:id  

    CRUD
    POST http://localhost:3000/posts 
    DELET http://localhost:3000/posts/3
    
    为第一篇文章添加一条评论

     - 选择相应的请求方法 + 相关的资源路径 + 按照格式发送请求体（options）
     - 设计url + 选择方法

     GET /posts/:pid/comments/:cid