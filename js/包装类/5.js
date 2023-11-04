// 包装类

// var obj = {}
// console.log(obj.a);

// 打印结果为undefined


// var num = new Number(123)
// num.abc = 'hello'
// console.log(num.abc);

// 打印结果为undefined

// var num = new Number(123)
// num.abc = 'hello'

// console.log(num.abc);打印结果为hello
// console.log(num*2);打印结果为246  参与四册运算v8把它当作数字


// var str = 'abcd'
// console.log(str.length);

// var num = 4
// num.len = 3

// 在原始值上强加属性，v8会把代码执行成这样
// var num = new Number(4)
// num.len = 3
// delete num.len


// new Number(4).len //隐式包装类
// // console.log(num.len);



// 考点
// var arr =[1,2,3,4,5]
// arr.length = 2
// console.log(arr);

// 打印结果为[ 1, 2 ] 他强行让他只能放两个


// var str = 'abcd'

// str.length = 2
// // new String('abcd').length

// console.log(str);


// 面试题
var str = 'abc'
str += 1
// 字符串加任何东西都为字符串
var test = typeof(str)
 if   (test.length == 6){
        test.sign = 'typeOf的返回结果可能为String'
    }
    console.log(test.sign);

