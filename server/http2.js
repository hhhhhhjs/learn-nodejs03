import http from 'node:http'
import { getAllfiles } from '../database/file.js'

const router = [
    { path: '/', handle: async (ctx) => { ctx.res.end('根路径') } },
    { path: '/login', handle: async (ctx) => {
        ctx.res.end('登录')
        console.log(ctx.query)
    }},
    {
        path:'/list',handle: async(ctx) => {
            const result = {
                statusCode:'200',
                info:'ok',
                data:getAllfiles()
            }
            ctx.res.end(JSON.stringify(result))
        }
    }
]

const server = http.createServer(async (req, res) => {
    

    function uriparser(originurl) {
        const result = {}
        const params = originurl.split('?')
        const url = params[0]
        if (params.length === 2) {
            const pArr = params[1].split('&')
            pArr.forEach(pair => { 
                const pairArr = pair.split('=')
                result[pairArr[0]] = pairArr[1]
            })
            return {
                url,
                param: result
            }
        } else {
            return {
                url,
                param: {}
            }
        }
    }
    const { url, param } = uriparser(req.url)//解构赋值，将对象中的key赋值，此时是一个变量，而不是key
    
    const context = {
        req: req,
        res: res,
        query: param
    }
    

    const routerInstance = router.find(r => r.path === url)
    if (routerInstance) {
        await routerInstance.handle(context)
    } else {
        res.statusCode = 404
        res.end('Not Found')
    }
})

const HOST = '127.0.0.1'
const PORT = '3000'  
server.listen(PORT, HOST, () => {
    console.log('启动服务器')
})
