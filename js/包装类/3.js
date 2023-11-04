// 对象的创建
// 1. var obj ={}  //对象字面量|对象直接量


// js中内置的函数来创建函数
// 2. let obj = new Object() //构造函数

// 两种方法一样的

// 3. 自定义构造函数

// function Car(){
//     this.name = 'BMW'
//     this.height = '1400'
//     this.lang = '4900'
//     this.weight = 1000
// }

// let car1 = new Car()

// console.log(car1);

// Car()就是一个构造函数

function Car(){
    this.name = 'BMW'
    this.height = '1400'
    this.lang = '4900'
    this.weight = 1000
    this.color = color
}

// let car1 = new Car() 实例对象
// let car2 = new Car()

// car1.name = '玛莎'

// console.log(car2);
// 打印结果会发现car2的内容没有被改变，


let car1 = new Car('pink')
let car2 = new Car('green')


// 4. Object.create({})
// 可以创建一个空的对象


