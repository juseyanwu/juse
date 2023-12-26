var numIdenticalPairs = function(nums) {
    if(nums.length == 1){
        return 0;
    }
    const bucket = Array(101).fill(0);
    for(let i = 0; i < nums.length; i++){
        bucket[nums[i]]++;
    }
    let res = 0;
    for(let i = 1; i < bucket.length; i++){
        if(bucket[i]){
            res += bucket[i] * (bucket[i] - 1)  / 2;
        }
    }
    return res;
};
