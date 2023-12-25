const fs = require('fs')

fs.writeFileSync('./target.md','?')

const img = fs.readFileSync('./1.jpg')

fs.writeFileSync('./pic/x.jpg',img)

console.log(fs.statSync('./target.md'));


