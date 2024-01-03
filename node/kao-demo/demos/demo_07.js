const Koa = require('koa')

const app = new Koa()

const main = (ctx)=>{
    // throw(500)
    
    // ctx.response.status = 404
    // ctx.body = 'page not found'
}

app.use(main)

app.listen(3000,()=>{
    console.log('server listing on 3000')
})