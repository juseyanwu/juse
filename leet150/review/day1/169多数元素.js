var majorityElement = function(nums) {
    let hash = new Map()
    for(let item of nums){
        if(!hash.get(item)){
            hash.set(item,1)
        }
        else hash.set(item,hash.get(item)+1)
        if(hash.get(item)>nums.length/2) return item
    }

};