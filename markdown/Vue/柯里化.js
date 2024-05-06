// 什么是柯里化
// 将使用多个参数的一个函数转换成一系列使用一个参数的函数

// js中的柯里化函数可以传递一个或者多个参数

// 提高参数的复用性，例如用正则去校验邮箱或者手机号的时候
//利用柯里化后的函数可以让代码简洁很多

function sum(a,b,c){
    console.log(a + b + c);
}

function curry(fn){
    return function curried(...args){
        if(args.length >= fn.length){
            return fn.apply(this,args)
        }
        else{
            return function(...args2){
                return curried.apply(this,args.concat(args2))
            }
        }
    }
}

let _sum = curry(sum)

_sum(1,2)(3)
