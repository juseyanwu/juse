const Koa = require("koa");
const app = new Koa();
const Router = require("@koa/router");
const router = new Router();

const logger = (ctx,next)=>{ //日志
    console.log(`${ctx.url}-${ctx.method}-${Data.now()}`);
    next()
}

const main = () => {};

const about = () => {};
router.get("/main", main);
router.get("/about", about);

app.use(logger)
app.use(router.routes()); //所有配置的路由都有生效

app.listen(3000, () => {
  console.log("server listing on 3000");
});
