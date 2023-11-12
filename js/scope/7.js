function foo(str,a){
    eval(str)
    console.log(a,b);
}

foo('var b = 3', 1)

// 执行结果：1 3