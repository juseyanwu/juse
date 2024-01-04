const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser') //让koa能解析post参数

const user = require('./routers/user.js')

app.use(bodyParser())
//主要逻辑
// const main = (ctx)=>{
//     ctx.body = 'hello world'
// }


app.use(user.routes(),user.allowedMethods())

app.listen(3000,()=>{
    console.log('启动！');
})