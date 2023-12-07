import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { Buffer } from 'node:buffer'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const sourcefile = path.join(__dirname,'../package.json')
const distfile = path.join(__dirname,'copyfile')

fs.readFile(sourcefile,(err,data) => {
    if(err){
        console.log('err')
        return
    }else{
    const pkgStr = data.toString('utf-8')
    const pkgobj = JSON.parse(pkgStr)
    pkgobj.scripts.copy = 'node write/copy.js'
    //这里使用了JSON.stringfy方法的换行第二第三个参数给null , 2
    const packagebuf = Buffer.from(JSON.stringify(pkgobj,null,2))
    
    fs.writeFile(distfile,packagebuf,{flag:'a+'},() => {
        console.log('成功写入')
    })
}})

/**
 * 任务：
 * 1.copy实现
 * 2.常用的api过一遍
 * 创建文件夹：mkdir
 * 删除文件夹：rmdir   递归删除
 * 删除文件:unlink
 * 文件的复制：没有这个api，直接使用flag如果没有的文件会自动创建
 * 
 */