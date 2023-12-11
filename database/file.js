import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'

//当前文件路径
const __filename = fileURLToPath(import.meta.url)
//当前文件夹路径
const __dirname = path.dirname(__filename)
const distpath = path.join(__dirname,'file.json')








function getAllfiles(){
    const fileStr = fs.readFileSync(distpath,{flag:'r+'}).toString()
    const file = JSON.parse(fileStr)
    return{
        totalsize:file.length,
        items:file
    }
}

function addFiles(params){
    const fileStr = fs.readFileSync(distpath,{flag:'r+'}).toString()
    const file = JSON.parse(fileStr)
    file.push(params)
    fs.writeFileSync(distpath,JSON.stringify(file,null,2),{flag:'w'})
}

function delFiles(Idname){
    const fileStr = fs.readFileSync(distpath,{flag:'r+'}).toString()
    const file = JSON.parse(fileStr)
    const index = file.findIndex((obj) => (obj.uid === Idname))
    file.splice(index,1)
    console.log((index))
    fs.writeFileSync(distpath,JSON.stringify(file,null,2),{flag:'w'})

}

function editFiles(fileID,filename){
    const fileStr = fs.readFileSync(distpath,{flag:'r+'}).toString()
    const file = JSON.parse(fileStr)
    const index = file.findIndex((files) => {files.uid === fileID})
    console.log(index)
    file[index].filename = filename
    
    fs.writeFileSync(distpath,JSON.stringify(file,null,2),{flag:'w'})

}
console.log(getAllfiles())
// addFiles({
//     "uid":"2",
//     "filename":"qq截图",
//     "filesize":"20k",
//     "fileurl":"http://127.0.0.1:8000/test.txt",
//     "fileUpdateTime":"2023.9.10"
// })
editFiles('1','heihie')
