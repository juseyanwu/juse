const fs = require('fs')

const info = fs.readdirSync('./test')

// console.log(info)

// fs.mkdirSync('./tet/xxx',{recursive:true})

// fs.rmdirSync('./tet',{recursive:true})

fs.watch('./',{recursive:true},(filename,eventType)=>{
    console.log(`666${filename}文件变更为:${eventType}`);
})
