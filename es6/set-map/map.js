// let obj = {
//     a: 1,
//     b: 2
// }

// var arr = [1,2]
// obj[arr] = 3

// console.log(obj);


// Map可以用任意数据结构作为key
let map = new Map([['name','老王']])

map.set({a:1},'hello')

// console.log(map.get({a:1}));   打印结果为undefined 
// {} === {}  不相等，引用类型相等 需要引用地址也相等

// 用这种方式便可以让对象地址相等
// let obj = {a:1}
// map.set(obj,'hello')
// console.log(map.get(obj));

// map.forEach((value,key,map)=>{
//     console.log(value,key,map);
// })


// console.log([...map]);
// [ [ 'name', '老王' ], [ { a: 1 }, 'hello' ] ]  map可以被解构，解构出了一个二维数组


// console.log(map);