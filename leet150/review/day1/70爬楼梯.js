
//空间优化
var climbStairs = function(n) {
    if(n===1 || n===2) return n
    let a = 1
    let b = 2
    for(let i = 3;i<=n;i++){
        let tmp = b
        b = a + b
        a = tmp
    }
    return b
};  


var climbStairs = function(n){
    let dp = new Array(n+1).fill(-1)
    dp[0] = 1
    dp[1] = 1
    for(let i = 2;i<=n;i++){
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
}