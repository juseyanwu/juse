var removeElement = function(nums, val) {
    let left = 0
    for(let right = 0;right<nums.length;right++){
        if(nums[right] != val){
            nums[left] = nums[right]
            left++
        }
    }
    return left
};

// 双指针












var removeElement = function(nums, val) {
    let l = 0
    for(let r =0;r<nums.length;r++){
        if(nums[r]!=val){
            nums[l] = nums[r]
            l++
        }
    }
    return nums
};