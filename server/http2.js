import http from 'node:http'

const router = [
    { path: '/', handle: async (ctx) => { ctx.res.end('根路径') } },
    { path: '/login', handle: async (ctx) => {
        ctx.res.end('登录')
        console.log(ctx.query)
    }}
]

const server = http.createServer(async (req, res) => {
    const { url, param } = uriparser(req.url) // 修改这里的res.url为req.url
    const context = {
        req: req,
        res: res,
        query: param
    }

    function uriparser(originurl) {
        const result = {}
        const params = originurl.split('?')
        const url = params[0]
        if (params.length === 2) {
            const pArr = params[1].split('&')
            pArr.forEach(pair => { // 修改此处的foreach为forEach
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
