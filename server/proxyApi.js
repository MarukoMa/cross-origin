const koaRouter = require('koa-router')
const router = new koaRouter() //注册地址 '/'相当于’/users‘
const proxy = require("koa-proxy");

console.log(55555)
router.get("/sa/jsConfig.action", proxy({
    url: 'https://click.suning.cn/sa/jsConfig.action?dm=www.suning.com'
}));
console.log(666)
module.exports = router