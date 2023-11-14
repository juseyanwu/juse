var isHappy = function(n) {
    let a = function(n){
        let sum = 0
        while(n){
        sum = sum + (n%10)*(n%10)
        n = parseInt((n/10))
        }
        return sum
    }
    let x = new Map()
    
};




