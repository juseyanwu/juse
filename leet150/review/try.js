// function dfs(i) {
//     // 已知 dp[1] 和 dp[2] ，返回之
//     if (i === 1 || i === 2) return i;
//     // dp[i] = dp[i-1] + dp[i-2]
//     const count = dfs(i - 1) + dfs(i - 2);
//     return count;
// }

// /* 爬楼梯：搜索 */
// function climbingStairsDFS(n) {
//     return dfs(n);
// }

// console.log(climbingStairsDFS(5));



// console.log({}>null);


















function a(n){
    if(n===1||n===2) return n
    let res = a(n-1) + a(n-2)
    return res
}

console.log(a(5));