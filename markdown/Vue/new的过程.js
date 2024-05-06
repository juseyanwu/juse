function myNew(fn,...args){  //fn为构造函数
    // 1.定义一个空对象
    const obj = {}
    // 2. 隐式原型指向构造函数的显示原型
    obj.__proto__ = fn.prototype
    // 3. 执行构造函数，this指向空对象
    fn.apply(obj,args)
    // 4. 返回对象
    return obj
}