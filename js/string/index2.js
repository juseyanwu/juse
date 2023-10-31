// 数组有反转的方式

// let arr = [1,2,3]
// arr.reverse();
// console.log(arr);
// 打印结果为[ 3, 2, 1 ]


// 利用数组的反转方法反转字符串

// const str = 'juejin'
// let arr = str.split('')
// arr.reverse()
// let newStr = arr.join('')
// console.log(newStr);

// 精简写法

const str = 'juseyanwu'
const newStr = str.split('').reverse().join('')
console.log(newStr);
