const Koa = require('koa')

const app = new Koa()


// 洋葱模型
const fa = (ctx,next)=>{
    console.log('a');
    next()
    console.log(1);
}

const fb  = (ctx,next)=>{
    console.log('b');
    next()
    console.log(2);
}

const fc  = (ctx,next)=>{
    console.log('c');
    next()
    console.log(3);
}

app.use(fa) //所有被use的函数都叫中间键函数，中间键的执行是有规则的
app.use(fb)
app.use(fc)

app.listen(3000,()=>{
    console.log('server listing on 3000')
})