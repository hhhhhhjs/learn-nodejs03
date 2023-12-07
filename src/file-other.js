import path, { resolve } from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import fsPromise from 'node:fs/promises'

//当前文件的路径
const __filename = fileURLToPath(import.meta.url)
//当前文件夹的路径
const __dirname = path.dirname(__filename)
const uploadpath = path.join(__dirname,'../upload/name.txt')


//这里是直接读文件，不需要先open(打开文件)，直接传路径即可

//虽然不会阻塞nodejs主线程
//但是对于大文件的读取会有性能问题
fs.readFile(uploadpath,{flag:'r'},(err,buf) => {
    //flag是fs.open()中的参数，flag参数用于指定文件的打开方式或者行为
    //readFile上的buffer是自动分配的，文件有多大，buffer就分配多大
    if(err){
        console.log('err,出错啦')
        return
    }else{
        console.log(buf.toString()) //toString()方法中默认是utf-8
    }
})

//使用同步
const filebuf = fs.readFileSync(uploadpath) //直接返回一个buffer，返回值是buffer
console.log(filebuf)
//先打印出哈哈，后打印出buffer，可以看出callback是异步


//依然保持异步，但是想使用promise;
function readFilepromise(filepath){
    return new Promise((resolve,reject) => {
        fs.open(filepath,(err,fd) => {
            if(err){
                reject('err,出错啦')
                return
            }else{
                resolve(fs.read(fd,(err,bufSize,buffer) => {
                    if(err){
                        reject('err,出错啦')
                    }else{
                        resolve(console.log(bufSize,buffer.toString()))
                    }
                }))
            }
        })
    })
}
readFilepromise(uploadpath)
const result = await fsPromise.readFile(uploadpath) //这里promise前面加上await会等待promise被解析为res或者rej状态之后直接返回promise的值
console.log('第三个',result)
