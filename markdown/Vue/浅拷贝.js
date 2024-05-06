function shalldowCopy(obj){
    if(typeof obj !== 'object' || obj === null) return
    let objCopy = obj instanceof Array ? [] : {}

    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            objCopy[key] = obj[key]
        }
    }
    return objCopy
}

// for in 遍历数组，拿到的是下标

// for in 遍历对象  深入骨髓，会把隐式继承到的属性也遍历到

// hasOwnProperty 可以判断这个key是不是obj显示具有的属性