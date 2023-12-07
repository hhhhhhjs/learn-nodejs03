import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { Buffer } from 'node:buffer'
//当前文件的路径
const __filename = fileURLToPath(import.meta.url)
//当前文件夹的路径
const __dirname = path.dirname(__filename)
const sourcepath = path.join(__dirname,'../package.json')
const distpath = path.join(__dirname,'../upload/name.txt')
const onlyreadstream = fs.createReadStream(sourcepath)
const onlywritestream = fs.createWriteStream(distpath,{flags:'a+'})
onlyreadstream.pipe(onlywritestream)