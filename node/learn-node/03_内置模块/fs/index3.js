const { log } = require('console')
const fs = require('fs')

const info = fs.statSync('./target.md')

console.log(info.isFile());