function initData(id){
    $.ajax({
        url:"http://localhost:2000/users",
        data:{pageSize:5,currentPage:2,id:id},
        type:"GET",
        success:function(data){
            $('html').append(`<div>userPage返回数据${JSON.stringify(data)}</div>`)
        },
        error:function(){
            console.log('err')
        }
    })
}
initData()
$('#add').click(()=>{
    $.ajax({
        url:"http://localhost:2000/users",
        data:{name:'小新',idNumber:"321234202102213456"},
        type:"POST",
        dataType: "json",
        success:function(data){
            $('html').append(`<div>userPage新增返回数据${JSON.stringify(data)}</div>`)
        },
        error:function(){
            console.log('err')
        }
    })
})
$('#revise').click(()=>{
    $.ajax({
        url:"http://localhost:2000/users/6",
        data:{name:'小葵',idNumber:"321234202*******"},
        type:"put",
        dataType: "json",
        // contentType:"application/json",
        success:function(data){
            $('html').append(`<div>userPage新增返回数据${JSON.stringify(data)}</div>`)
        },
        error:function(){
            console.log('err')
        }
    })
})

$('#delete').click(()=>{
    $.ajax({
        url:"http://localhost:2000/users/5",
        data:{name:'小葵',idNumber:"321234202*******"},
        type:"DELETE",
        dataType: "json",
        // contentType: "application/json;charset=UTF-8",
        success:function(data){
            $('html').append(`<div>userPage新增返回数据${JSON.stringify(data)}</div>`)
        },
        error:function(){
            console.log('err')
        }
    })
})
$('#find').click(()=>{
    initData(4)
})