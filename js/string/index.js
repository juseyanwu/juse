let str = 'abcdefg'

// console.log(str[2]);
// console.log(str.charAt(2));
// 效果是一样的，喜欢用哪个用哪个，charAt是字符串的方法，[]是借鉴了数组


// 增加字符

// console.log(str.concat('hi'));
// 可以用来在尾部增加字符，得到一个新的字符串，不影响原字符串

// console.log(str+'hi');
// 绝大多数情况直接用str+一个字符串来实现

// 删除字符串中的元素

// 字符串没有官方自带的删除的方法
// 数组有自带的splice这个方法可以删除元素
// 所以我们先把字符串转换成数组，然后再进行删除，再将数组变成一个新的字符串

// 假设 let arr = str.split('d')   （'d'是指从d切成两份）
// 我们会得到一个['abc','efg']的数组

// 假设 let arr = str.split('')  以一个空字符来分割，则会把每个元素分开

//    let arr = str.split('')
//    arr.splice(4,3)  
// // 从第四位开始删除，删除三个元素 假设只写（4）则删到底
// // 并且splice会将原数组改变
//    console.log(arr);

// 把数组变成字符串的方法 join()

let arr = str.split('')
arr.splice(4,3)
let newStr = arr.join('-')
// 其中-是指把数组变化为字符串后用来拼接的东西

console.log(newStr);
// 打印结果为  a-b-c-d



