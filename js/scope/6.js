function foo(){
    a = 2
}
foo()

console.log(a);

//打印结果为 2
// 无论在哪，如果不用var 或者 let 声明一个变量，它一定会被当成全局变量