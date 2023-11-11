// let arr = [1,1,2,3,3]

// let obj ={
//     a: 1,
//     b: 1,
//     c: 1
// }


// let obj ={
//     1: 1,
//     2: 2,
//     3: 3
// }


// 当对象key = value 可以写成{1，2，3}

// set 类似于数组 类数组 作用是成员唯一 本质上是一个对象

// let set = new Set([1,2,3,4])

// set.add(0)  打印结果为  Set(5) { 1, 2, 3, 4, 0 }//类似于数组的push


// console.log(set.size);  //size 是属性，不打（）

//数组去重
// var arr = [1,2,1,1,'1']

// function unique(arr){
//     let s = new Set(arr)
//     let res = Array.from(s)  // 把一个类数组变成数组
//     return res

//     // return Array.from(new Set(arr))
//     // return [...new Set(arr)]
// }
//set 能去重原始数据类型  但是把两个相同的对象用set就不能去重
// var unique = (arr)=>[...new Set(arr)]  箭头函数 不换行 相当于加了一个return


// console.log(unique(arr));


// let set = new Set([1,1,2,3,4,4])

// set.forEach((item,index,set)=>{
//     console.log(item,index,set);
// })


// console.log(set.has(2));//判断有没有2

// console.log(set.keys());
// 打印结果为  [Set Iterator] { 1, 2, 3, 4 } Iterator是迭代器 数据结构中具有Iterator就可以被遍历

// set 里有迭代器属性


// for (let item of set){
//     console.log(item);
// }


// set这种数据结构不支持随便读到任意一个值







