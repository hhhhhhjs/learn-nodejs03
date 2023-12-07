import {Buffer} from 'node:buffer'
const buffer = Buffer.from([255,0])  //buffer存贮从0-255
const buffer1 = Buffer.from([1256,0])  //超过的部分会截取低八位，显示出二进制的第八位，并且显示其16进制
const buffer2 = Buffer.from('哈哈')
const buffer3 = Buffer.from([0x01]) //可以直接显示16进制，但是x只能在第二个
console.log(buffer)
console.log(buffer1)
console.log(buffer2)
console.log(buffer3)