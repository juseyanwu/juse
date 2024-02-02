var majorityElement = function(nums) {
    let x = new Map()
    let half = nums.length / 2
    for(let num of nums){
        if(x.has(num)){
            x.set(num,x.get(num)+1)
        }
        else{
            x.set(num,1)
        }

        if(x.get(num)>half) return num
    }
};