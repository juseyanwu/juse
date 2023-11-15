var missingNumber = function(nums) {
    let x = new Map()
    for(i=0;i<nums.length;i++){
        x.set(nums[i],1)
    }
    for(j=0;j<nums.length+1;j++){
        if(!(x.has(j))){
            return j
        }
    }
    if(nums.length==1){
        return 1
    }
};