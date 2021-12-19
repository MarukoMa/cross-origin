const koa = require('koa')
const app = new koa()
const proxy = require('koa2-proxy-middleware'); //引入代理模块

const options = {
    targets: {
        '/api/(.*)': {
            target: 'https://click.suning.cn/sa/jsConfig.action?dm=www.suning.com',
            changeOrigin: true,
        },
    }
}
app.use(
    proxy(options)
);
const bodyparser = require('koa-bodyparser')
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))

app.listen(3000,()=>{
    console.log('http://localhost:3000')
})