$.ajax({
    url:"/sa/jsConfig.action",
    type:"GET",
    data:{dm:"www.suning.com"},
    success:function(data){
        $('html').append(`<div>proxy返回数据${JSON.stringify(data)}</div>`)
    },
    error:function(){
        console.log('err')
    }
})