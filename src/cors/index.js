$.ajax({
    url:"http://localhost:2000/users/corsList",
    data:{pageSize:5,currentPage:2},
    type:"GET",
    success:function(data){
        $('html').append(`<div>cors返回数据${JSON.stringify(data)}</div>`)
    },
    error:function(){
        console.log('err')
    }
})