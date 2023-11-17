var firstMissingPositive = function(nums) {
    let x = new Map()
    for(i=0;i<nums.length;i++){
        x.set(nums[i],1)
    }
    for(i=0;i<nums.length;i++){
        if(!x.get(i)){
            return i
        }
    }
};