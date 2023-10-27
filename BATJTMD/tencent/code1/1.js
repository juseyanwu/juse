//console.log('hello world!!!')
/**
 * @func 返回固定格式的电话号码   
 * @params array [1,2,3,4,5,6,7,8,9,0]
 * @return (123) 456-7890
 * @author juse
 */
// 函数定义
// function phoneNumber(numbers){
//     return "(" + numbers[0] + numbers[1] + numbers[2]
//      + ")" + " " + numbers[3] + numbers[4] + numbers[5] 
//      + "-" + numbers[6] + numbers[7] + numbers[8] + numbers[9] + ""
// }


//es6 箭头函数
//phoneNumber 是对象 函数也是对象
//在js中变量的类型由值决定

// const phoneNumber = (numbers)=> {
//     return "(" + numbers[0] + numbers[1] + numbers[2]
//      + ")" + " " + numbers[3] + numbers[4] + numbers[5] 
//      + "-" + numbers[6] + numbers[7] + numbers[8] + numbers[9] + ""
// }

let phoneNumber;//弱类型的语言  undefined 类型  null 值为空
// 函数表达式
// 简版的函数 箭头函数
phoneNumber = (numbers)=>  "(" + numbers[0] + numbers[1] + numbers[2]
       + ")" + " " + numbers[3] + numbers[4] + numbers[5] 
       + "-" + numbers[6] + numbers[7] + numbers[8] + numbers[9] + ""


// phoneNumber = (numbers)=>
// `(${numbers[0]}${numbers[1]}${numbers[2]})
//  ${numbers[3]}${numbers[4]}${numbers[5]}
//  -${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`



console.log(phoneNumber([1,2,3,4,5,6,7,8,9,0]));