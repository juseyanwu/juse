var containsDuplicate = function(nums) {
    let x = new Map()
    for(i=0;i<nums.length;i++){
        if(x.has(nums[i])){
            return true
        }
        else{
            x.set(nums[i],0)
        }
    }
    return false
};






