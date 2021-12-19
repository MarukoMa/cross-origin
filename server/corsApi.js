const koaRouter = require('koa-router')
const router = new koaRouter({prefix:"/users"}) //注册地址 '/'相当于’/users‘
const listData = require('./mock/lists.json')
const setAccessControl = async(ctx,next)=> {
    ctx.set({
        'Content-Type':'text/json',
        "Access-Control-Allow-Origin":"*",  //允许来自所有域名请求(不携带cookie请求可以用*，如果有携带cookie请求必须指定域名)
        "Access-Control-Allow-Methods":"OPTIONS,GET,PUT,POST,DELETE", // 设置所允许的HTTP请求方法
        'Access-Control-Allow-Headers':'x-requested-with, accept, origin, content-type' // 字段是必需的。它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段.
        // 服务器收到请求以后，检查了Origin、Access-Control-Request-Method和Access-Control-Request-Headers字段以后，确认允许跨源请求，就可以做出回应。
    })
    await next();
}
router.use(setAccessControl);
router.get('/corsList',ctx => {
    const pageSize = Number(ctx.query.pageSize)   //每页展示条数
    const currentPage =Number(ctx.query.currentPage)  //当前请求页数
    let resData = {
        code:"0000",
        data:[],
        total:0,
        msg:"success"
    }
    if(pageSize && currentPage){
        resData.data = listData.slice(pageSize * (currentPage-1),pageSize * currentPage)
        resData.total = listData.length
    }else{
        resData = {
            code:"9999",
            msg:"参数错误"
        }
    }
    ctx.body = JSON.stringify(resData)
})

module.exports = router