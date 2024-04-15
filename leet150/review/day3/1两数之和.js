var twoSum = function(nums, target) {
    let map = new Map()
    for(let i = 0;i<nums.length;i++){
        let targetNum = target-nums[i]
        if(map.has(targetNum)){
            return [i,map.get(targetNum)]
        }
        else{
            map.set(nums[i],i)
        }
    }
};