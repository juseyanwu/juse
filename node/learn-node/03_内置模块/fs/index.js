// 文件系统
const { log } = require('console')
const fs = require('fs/promises')

// //同步的方式
// const syncData = fs.readFileSync('./data.txt','utf8')

// console.log(syncData);

fs.readFile('./data.txt',{encoding:'utf-8'}).then(res=>{
    console.log(res);
})