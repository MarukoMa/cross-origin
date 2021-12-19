const koa = require('koa')
const app = new koa()
const koaRouter = require('koa-router')
const koaCors = require('./koaCors')
const router = new koaRouter({prefix:"/users"}) //注册地址 '/'相当于’/users‘
const listData = require('../mock/lists.json')
const logger = require('koa-logger');

app.use(logger());  //查看日志
app.use(koaCors());  //设置cors跨域
app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());

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
app.listen(1000,()=>{
    console.log('http://localhost:1000')
})