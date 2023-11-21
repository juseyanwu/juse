// 对象转数字    valueOf
console.log(Number({}));




// 对象转字符串  toString
a.toString()
Object.prototype.toString.call(a)

let arr = [1,2,3]
toString(arr) //'1,2,3'

let time = new Date()

time.toString() //把时间变成可读的字符串
