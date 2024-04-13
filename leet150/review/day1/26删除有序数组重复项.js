var removeDuplicates = function(nums) {
    let left = 0
    for(let right = 1;right<nums.length;right++){
        if(nums[left]!=nums[right]){
            left++
            nums[left] = nums[right]
        }
    }
    return left+1
};


var removeDuplicates = function(nums) {
    const n = nums.length;
    if (n === 0) {
        return 0;
    }
    let fast = 1, slow = 1;
    while (fast < n) {
        if (nums[fast] !== nums[fast - 1]) {
            nums[slow] = nums[fast];
            ++slow;
        }
        ++fast;
    }
    return slow;
};

// 作者：力扣官方题解