const Koa = require('koa')

const app = new Koa()

const main = (ctx)=>{
    const n = Number()
}

app.use(main)

app.listen(3000,()=>{
    console.log('server listing on 3000')
})