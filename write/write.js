import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const writepath = path.join(__dirname,'fuzhi')

//fs.write方法只能接收buffer对象作为数据，所以我们需要先将数据转换为buffer
const buf = Buffer.from('哈哈','utf-8') 

//写文件必须传递一个可写的flag
fs.open(writepath,'a+',(err,fd) => {
    if(err){
        console.log('err')
        return
    }else{
        fs.write(fd,buf,(err,bufSize,buffer) => {
            console.log(bufSize,buffer)
        })
    }
})
fs.writeFile(writepath,'我是追加的文件','a+',() => {
    console.log('追加成功')
})


