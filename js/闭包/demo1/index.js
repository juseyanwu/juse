showName()   //函数声明 整体提升 当前作用域的最顶端

console.log(myName);  //undefined

var myName = '王艺杰'

function showName(){
    console.log('杰哥'); //杰哥
}



// console.log(myName);  //undefined

// var myName = '王艺杰'

// 在v8眼里他其实是

// var myName
// console.log(myName)
// myName='王艺杰'

