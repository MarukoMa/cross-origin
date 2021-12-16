const koaRouter = require('koa-router')
const router = new koaRouter({prefix:"/users"}) //注册地址 '/'相当于’/users‘
const proxy = require("koa-proxy");

router.get('index.js', proxy({
    url: 'https://click.suning.cn/sa/jsConfig.action?dm=www.suning.com'
}));

module.exports = router