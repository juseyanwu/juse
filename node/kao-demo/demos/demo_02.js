const Koa = require('koa')

const app = new Koa()

const main = (ctx)=>{ //只要被app use 掉的函数一定具有ctx参数 ctx等同于koa
    ctx.body = {
        meg:'Hello world'
    }
}
app.use(main)


app.listen(3000,()=>{
    console.log('server listing on 3000')
})