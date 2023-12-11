//http的服务端
//一直运行的状态

import http from 'node:http'

const router = [
    {path:'/',handle:async(ctx) => {ctx.res.end('根路径')}},
    {path:'/login',handle:async(ctx) => {
        ctx.res.end('登录')
        console.log(ctx.query)
    }}]
const server = http.createServer(async(req,res) => {
    //http请求通过[请求方法+请求url]区分接口功能
    //console.log(req.url,req.method)
    //如何让不同的url+method组合，路由到不同的处理函数
    const {url,param} = urlparser(req.url)
    //函数中的是局部变量，在这里转换为全局变量
    const context = {
        req:req,
        res:res,
        query:param
    }

    //url参数解析
    // /login?name=1
    function urlparser(originurl){
        const result = {}
        const params = originurl.split('?') //返回一个数组0号元素为/login，一号元素为name=1&test=2&age=3
        const url = params[0]
        if(params.length === 2){
            const pArr = params[1].split('&')//['name=1','test=2','age=3']
            pArr.forEach(pair => {
                const pairArr = pair.split('=')
                result[pairArr[0]] = pairArr[1]
            })
            return{
                url,
                param:result
            }
        }
    }
    const routerinstance = router.find(r => r.path === url)
    if(routerinstance){
       await routerinstance.handle(context)
    }
})



const HOST = '127.0.0.1'
const PROT = '3000'  //tcp端口号用两个字节表示，所以端口号的范围是：（0-65535）
//ip+port可以定位到某个进程的位置； ip地址可以定位到某个机器，端口号可以定位到某个进程
server.listen(PROT,HOST,() => {
    console.log('启动服务器')
})
