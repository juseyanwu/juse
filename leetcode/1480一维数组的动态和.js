var runningSum = function(nums) {
    let res = []
    let x = 0
    for(i=0;i<nums.length;i++){
        x+=nums[i]
        res.push(x)
    }
    return res
};