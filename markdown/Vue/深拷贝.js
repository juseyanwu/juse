function deepCopy(obj){
    let objCopy = {}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            if(obj[key] instanceof Object){
                objCopy[key] = deepCopy(obj[key])  //利用递归
            }
            else{
                objCopy[key] = obj[key]
            }
        }
    }

    return objCopy
}