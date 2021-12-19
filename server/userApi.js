const koaRouter = require('koa-router')
const routerKoaCors = require('./koaCors')
const router = new koaRouter()
const fs =require('fs')
const BodyParser = require('koa-bodyparser');
const bodyparser= new BodyParser();
const listData = require('./mock/lists.json')

router.use(routerKoaCors())

router.use(bodyparser);

//get users/:id 查询数据
router.get('/users',ctx => {
    let resData = {
      code:"0000",
      data:[],
      total:0,
      msg:"success"
    }
    const {id,pageSize,currentPage}= ctx.query;
    if(id){
        resData.data.push(listData.find(item => item.id == id));
    }else if(pageSize && currentPage && !id){
      resData.data = listData.slice(pageSize * (currentPage-1),pageSize * currentPage)
      resData.total = listData.length
    }else{
        resData = {
            code:"9999",
            msg:"参数错误"
        }
    }
    ctx.body = JSON.stringify(resData)
})
//post 新增数据
router.post('/users',ctx => {
  let resData = {
    code:"0000",
    data:[],
    total:0,
    msg:"success"
  }
  const {name,idNumber} = ctx.request.body;
  if(name && idNumber){
      listData.push({
        id:listData.length + 1,
        name,
        idNumber
      })
      resData.data = listData
      resData.total = listData.length
  }else{
      resData = {
          code:"0001",
          msg:"新增失败"
      }
  }
  ctx.body = JSON.stringify(resData)
})
//修改信息 //users/:id
router.put('/users/:id', (ctx) => {
  debugger
  let resData = {
    code:"0000",
    data:[],
    total:0,
    msg:"success"
  }
  const { id } = ctx.params;
  console.log(id)
  const { name,idNumber} = ctx.request.body;
  let user = listData.find(item => item.id == id);
  console.log(user)
  if (user) {
      user.name = name;
      user.idNumber = idNumber;
      resData.data = listData
      resData.total = listData.length
  }else{
    resData = {
      code:"0001",
      msg:"修改失败"
    }
  }
  ctx.body = JSON.stringify(resData);
})

// 删除数据
router.delete('/users/:id', (ctx) => {
  let resData = {
    code:"0000",
    data:[],
    total:0,
    msg:"success"
  }
    const { id } = ctx.params
    if(id){
      resData.data = listData.filter(item => item.id != ctx.params.id);
      resData.total = listData.length
    }else{
      resData = {
        code:"0001",
        msg:"删除失败"
      }
    }
    ctx.body = JSON.stringify(resData);
})


module.exports = router