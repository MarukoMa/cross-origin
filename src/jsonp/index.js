$.ajax({
    url:"http://localhost:2000/users/list",
    type:"GET",
    data:{pageSize:4,currentPage:3},
    dataType:"JSONP",
    jsonp:"callback",
    jsonpCallback: 'userListInfo',
    success:function(data){
        $('html').append(`<div>jsonp返回数据${JSON.stringify(data)}</div>`)
    },
    error:function(){
        console.log('err')
    }
})