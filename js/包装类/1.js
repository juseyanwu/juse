// 第一类：原始数据类型
// let a = 'hello'
// let b = 123
// let c = true
// let u = undefined
// let n = null


// 第二类：引用类型
// let obj ={
//     name:'老王'
// }

// 数组也是一种特殊的对象
// 函数也是一种对象

// let a = 1
// let b = a
// a = 2

// console.log(b);

// 打印结果为1

let obj ={
    name:'小花'
}

let lw = obj
obj.name = '小红'

console.log(lw.name);

// 打印结果为 '小红'
// 原因是引用对象会储存在堆里，用指针指向，所以obj和lw指向的是同一个地址，obj改变lw也就改变

