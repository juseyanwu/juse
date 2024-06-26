var rob = function(nums) {
    let len = nums.length
    if(len === 0) return
    let dp = new Array(len+1)
    dp[0] = 0
    dp[1] = nums[0]
    for(let i = 2;i<=len;i++){
        dp[i] = Math.max(dp[i-1],dp[i]+nums[i-1])
    }
    return dp[len]
};