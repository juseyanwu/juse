// 构造函数
function Person(name,age,sex){
    this.name = name
    this.age = age
    this.sex = sex
    

    // 其实new干了个这么一个操作
    // let this = {
    //     name:name,
    //     age:age,
    //     sex:sex
    // }

    // return this
}

let p = new Person('海军',18,'boy')


console.log(p);