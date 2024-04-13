var fib = function(n) {
    if(n===0)return 0
    if(n===1 || n===2) return 1
    let a = 1
    let b = 1
    for(let i = 3;i<=n;i++){
        let tmp = b
        b = a + b
        a = tmp
    }
    return b
};