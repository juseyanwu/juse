const Router = require('@koa/router')

const router = new Router()

const {userLogin} = require('../controllers/mysqlControl.js')



//定义接口

router.post('/login',async (ctx)=>{
    // 获取到前端传递的账号和密码去数据库中校验账号和密码的正确性
    const {username,password} = ctx.request.body
    const result = await userLogin(username,password)
    if(result.length){
        let data = {
            id:result[0].id,
            nickname:result[0].nickname,
            username:result[0].username
        }
        ctx.body = {
            code:'8000',
            data:data,
            msg:'登入成功'
        }
    }else{
        ctx.body = {
            code:'8004',
            data:'error',
            msg:'账号或密码错误'
        }
    }
})



module.exports = router