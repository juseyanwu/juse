var search = function(nums, target) {
    let left = 0
    let right = nums.length-1
    while(left<=right){
        let mid = Math.floor(left+(right-left)/2) //防止超出数字范围
        let num = nums[mid]
        if(num === target) return mid
        else if(num>target){
            right = mid-1
        } 
        else if(num<target){
            left = mid+1
        }
    }
    return -1
};