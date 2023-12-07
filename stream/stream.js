import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { Buffer } from 'node:buffer'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const namepath = path.join(__dirname,'../package.json')

const readstream = fs.createReadStream(namepath,{
    highWaterMark:2  //一次两个字节
    //规定一次buffer的大小，默认最大为64kb
})
readstream.on('data',(chunk) => {
    console.log(chunk)
})
readstream.on('end',() => {
    console.log('文件读完了')
})
