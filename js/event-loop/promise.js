const { log } = quire("async")

function A(){
    setTimeout(()=>{
        console.log('异步A完成');
    },1000)
}

function B(){
    setTimeout(()=>{
        console.log('异步B完成');
    },500)
}
function c(){
    
}

async function foo(){
    await A()
    console.log(1);
    await B()
    await C()
}
// await 会阻塞后续代码的执行，将后续代码推入到微任务队列
// 封装
// async等同于 return 一个promise 对象