$.ajax({
    url:"http://127.0.0.1:2000/users/list",
    type:"GET",
    data:{pageSize:4,currentPage:1,idNo:"321*****111"},
    dataType:"JSONP",
    jsonp:"callback",
    jsonpCallback: 'userListInfo',
    success:function(data){
        console.log(data.data)
    },
    error:function(){
        console.log('err')
    }
})