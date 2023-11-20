var firstMissingPositive = function(nums) {
    let hash = new Map()
    for(const x of nums){
        hash.set(x,1)
    }
    for(i=1;i<=nums.length+1;i++){
       if(!hash.has(i)) {
        return i
       }
    }
};