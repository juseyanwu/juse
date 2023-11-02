function foo(str,a){
    eval(str)
    console.log(a,b);
}

foo('var b = 3',1)

// eval 的作用是把原本不在此处的语句搬过来变成语句

