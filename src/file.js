import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
//当前文件的路径
const __filename = fileURLToPath(import.meta.url)
//当前文件夹的路径
const __dirname = path.dirname(__filename)
const uploadpath = path.join(__dirname,'../upload/name.txt')
console.log(uploadpath)

//nodejs回调函数特点
//所有回调函数第一个参数一定是err,真实的回调数据放在其后
fs.open(uploadpath,(error,fd) => {
    if(error){
        console.log('error,出错啦')
    }else{
        fs.read(fd,(error,bufSize,buf) => {   
             //这里是设置好的三个参数，第一个是错误，第二个是读了多少个字节，第三个是buffer
             //这里的buffer是分配了一个非常大的buffer
            if(error){
                console.log('error,出错啦')
            }else{
                console.log(bufSize)
                console.log(buf.toString('UTF-8'))
            }
        })
    }
})
