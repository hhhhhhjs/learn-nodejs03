///文件路径本质上是字符串的拼接

import path from 'node:path'
const arr = ['/foo','package.json']

const result = path.join(...arr) //这里会将数组里面的元素直接展示出来
const result2 = path.join('/foo','package.json')

console.log(result,result2,result3)

//当前文件夹的路径
//当前文件的路径