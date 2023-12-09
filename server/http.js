//http的服务端
//一直运行的状态

import http from 'node:http'

const router = [
    {path:'/',handle:async(requset,response) => {response.end('根路径')}},
    {path:'/login',handle:async(req,res) => {res.end('登录')} }
]
const server = http.createServer(async(req,res) => {
    //响应操作
    /**这里做url的判断，不同的url做不同的处理，比如登录，注册的按钮前端请求的url不同，
     * 我们需要做不同的处理方法 */

    //http请求通过[请求方法+请求url]区分接口功能
    //console.log(req.url,req.method)
    //如何让不同的url+method组合，路由到不同的处理函数
    const routerinstance = router.find(r => r.path === req.url)
    if(routerinstance){
       await routerinstance.handle(req,res)
    }
})


const HOST = '127.0.0.1'
const PROT = '3000'  //tcp端口号用两个字节表示，所以端口号的范围是：（0-65535）
//ip+port可以定位到某个进程的位置； ip地址可以定位到某个机器，端口号可以定位到某个进程
server.listen(PROT,HOST,() => {
    console.log('启动服务器')
})