const koa = require('koa')
const app = new koa()
const koaCors = require('./koaCors')
const router = require('./jsonpApi')
const corsRouter = require('./corsApi')
const userRouter = require('./userApi')
// const proxyRouter = require('./proxyApi')
const static = require('static-koa') 
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
app.use(corsRouter.routes());   /*启动路由*/
app.use(corsRouter.allowedMethods());

//服务器代理跨域模拟
// app.use(proxyRouter.routes());   /*启动路由*/
// app.use(proxyRouter.allowedMethods());

//user增删改查,接口遵循Restful模式
app.use(userRouter.routes());   /*启动路由*/
app.use(userRouter.allowedMethods());
app.use(koaCors());  


app.use(static((__dirname +'/static'),opts));
app.listen(2000,()=>{
    console.log('http://localhost:2000')
})