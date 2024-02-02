var removeDuplicates = function(nums) {
    let slow = 0
    for(let fast = 2 ; fast < nums.length ; fast++){
        if(nums[slow]!=nums[fast]){
            nums[slow+2] = nums[fast]
            slow = slow + 1
        }
    }
    return slow + 2
};