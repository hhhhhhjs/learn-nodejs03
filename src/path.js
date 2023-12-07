import  {fileURLToPath}  from 'node:url' //这里fileURLToPath是函数，需要使用{}进行导入
import path from 'node:path'

//当前文件路径
const __filename = fileURLToPath(import.meta.url)//fileURLToPath是一个位于url模块下的方法，用于将文件url对象转换为文件路径
//当前文件夹路径
const __dirname = path.dirname(__filename) //直接取这个路径的父级目录
const filefather = path.join(__filename,'..') //还可以这样取上一级目录

console.log(import.meta.url,__filename,__dirname) //node.js中import 是一个变量
console.log(filefather)

console.log(process.cwd()) //进程的启动路径
process.chdir(filefather) //改变进程的启动路径
console.log(process.cwd())
