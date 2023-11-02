// var obj = {
//     a:1,
//     b:2,
//     c:3
// }

// with(obj){
//     a=2,
//     b=3,
//     c=4
// }

// // with 用作批量修改对象


// console.log(obj);



function foo(obj){
    with(obj){
        a=2
    }
}

var o2 = {
    b:3
}

foo(o2)

console.log(a);
