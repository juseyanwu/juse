const userInfo = require('../../modles/login')   // UserInfo 就是生成的user表

const register = async (ctx, next) => {
    const { account, password } = ctx.request.body
    console.log(ctx.body);

    const result = await userInfo.findOne({
        account: account
    })
    ctx.status = 200
        if (result) {
            ctx.body = {
                code: 0,
                msg: '账号已存在'
            }
        }

        // 账号不存在 向数据库插入数据
        if (result === null) {

            userInfo.create({   // 创建用户信息表
                account: account,
                password: password
            })
            shoppingcart.create({   // 创建购物车表
                account: account,
                commodity: obj
            })

            ctx.body = {
                code: 1,
                msg: '注册成功'
            }
        }


}





module.exports = {
    register
}