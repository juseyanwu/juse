const { log } = require('console');
const path = require('path')

console.log(path.join('a','b','c')); //多个路径的拼接

console.log(path.join(process.cwd(),'model','index'));

console.log(path.resolve('a','b','c'));

console.log(path.dirname(process.cwd())); //返回路径的目录名

console.log(path.basename('a/b/c.js','.js'));

console.log(path.basename(__filename));

console.log(path.extname(__filename));

console.log(path.normalize('a///a///a//'));

console.log(path.parse(__filename));

console.log('a\\d\\d\\s\\'.split(path.sep));