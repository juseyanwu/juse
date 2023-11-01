// var arr = []

// for (var i = 0; i<10; i++){
//     arr[i] = function(){
//         console.log(i);
//     }
// }

// for(var j = 0 ; j<arr.length; j++){
//     arr[j]()
// }

// 执行结果为十个十

// 把var 改成 let 可以解决这个问题,还有一个解决方案就是 闭包！在2.js中

var arr = []

for (let i = 0; i<10; i++){
    arr[i] = function(){
        console.log(i);
    }
}

for(var j = 0 ; j<arr.length; j++){
    arr[j]()
}