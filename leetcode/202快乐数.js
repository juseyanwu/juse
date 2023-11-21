var  next = function(x){
    let sum = 0
    while(x>0){
        sum=sum+Math.pow(x%10,2)
        x = Math.floor(x/10)
    }
    return sum
}

var isHappy = function(n) {
    let hash = new Map()
    while(n!==1){
        if(hash.get(n)==1){
            return false
        }
        hash.set(n,1)
        n = next(n)
    }
    if(n==1) return true
    
}

console.log(isHappy(19));