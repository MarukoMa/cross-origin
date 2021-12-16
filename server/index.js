const koa = require('koa')
const app = new koa()
const router = require('./jsonpApi')
const router1 = require('./corsApi')
const router2 = require('./proxyApi')
const static = require('./static') 
const logger = require('koa-logger');

const opts = {
    htmlCache:false,   
    maxAge:'100',      
    lastModified:false,  
    etag:false
}
app.use(logger());  //查看日志

// jsonp跨域模拟
app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());

//cors跨域模拟
app.use(router1.routes());   /*启动路由*/
app.use(router1.allowedMethods());

//proxy
app.use(router2.routes());   /*启动路由*/
app.use(router2.allowedMethods());

app.use(static((__dirname +'/static'),opts));
app.listen(2000,()=>{
    console.log('http://localhost:2000')
})