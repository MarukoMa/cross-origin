const http = require('http');
const https = require('https');
const baseUrl = "https://click.suning.cn/sa/jsConfig.action"; //需要代理服务的站点
http.createServer((req,res)=>{
    console.log(1111)
    const url = baseUrl + req.url;
    https.get((url,res)=>{
        const {statusCode} = res;
        let errMsg = ""
        let initData = "";
        if(!statusCode === 200) errMsg = new Error("服务器响应失败");
        if(!/application\/json|image\/x-icon/.text(res.headers[["content-type"]])) errMsg = new Error("数据格式不正确");
        if(errMsg){
            console.log(err);
            res.resume();
            return;
        }
        res.on("data", chunk => {
            initData += chunk;
        });
        res.on("end", () => {
            try {
                //设置编码集
                response.setHeader('content-type','application/json;chartset=utf-8');
                //设置跨域,一般不建议为*,会有安全问题
                response.setHeader('access-control-allow-origin','*');
                response.end(initData);
            } catch (e) {
                console.log(e);
            }
        });
    })
}).listen(8099, () => {
    console.log("server start at 8099");
});