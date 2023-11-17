// 栈
// 用数组表示，没有特定的表示方式
// let stack = []

// 队列
// let queue = []
// 也没有特定的表达方式
// 只能用push和shift
// 先进先出，后进后出

// 也可以用unshift和pop

let queue = []
queue.push('宫保鸡丁')
queue.push('辣椒炒辣椒')
queue.push('红烧肉')

// 取元素

while(queue.length){
    const top = queue[0]
    console.log(top);
    queue.shift()
}

while(queue.length){
    const top =queue.shift()  //queue.shift()会提供一个值
    console.log(top);
}
