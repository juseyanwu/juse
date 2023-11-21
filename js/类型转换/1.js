// 原始类型
let num = 123
let str = "skjda"
let un = undefined
let n = null
let flag = true

let big = 123n
let sy = Symbol(123)


console.log(Boolean());  //不传值为false

console.log(Boolean(false)); //false

console.log(Boolean('')); //空字符串为false、

console.log(Boolean(' ')); //true


console.log(Number()); //转成数字  默认值为0

console.log(Number('123')); //123

console.log(Number('hello')); //NaN

console.log(Number(undefined)); //NaN

console.log(Number(null)); //0

console.log(Number(true)); //1

console.log(Number(false)); //0



console.log(String()); //空

console.log(String(123)); //字符串123
console.log(String()); //传啥变啥