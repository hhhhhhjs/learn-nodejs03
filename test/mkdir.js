import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { Buffer } from 'node:buffer'
//当前文件的路径
const __filename = fileURLToPath(import.meta.url)
//当前文件夹的路径
const __dirname = path.dirname(__filename)
const dirpath = path.join(__dirname,'../mkdir')
const filepath = path.join(__dirname,'../hello')
fs.mkdir(dirpath,{recursive:true},(err) => {
    if(err){
        console.log('err,出错啦')
        return
    }
    else{
        console.log('文件夹创建成功')
    }
})
fs.rmdir(dirpath,{recursive:true},(err) => {
    if(err){
        console.log('error')
    }else{
        console.log('成功删除文件夹')
    }
})
fs.unlink(filepath,(err) => {
    if(err){
        console.log('error')
    }else{
        console.log('成功删除该文件')
    }
})