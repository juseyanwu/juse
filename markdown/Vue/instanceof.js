function myInstanceOf(father,child){
    let fp = father.prototype
    let cp = child.__proto__
    while(cp){
        if(cp === fp){
            return true
        }
        cp = cp.__proto__
    }
    return false
}

// 当cp存在时循环并把cp赋值为cp.__protp__，如果cp = fp return true 
// 如果循环结束都没找到，return false
