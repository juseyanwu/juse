var longestConsecutive = function(nums) {
    let set = new Set()
    for(let num of nums){
        set.add(num)
    }
    let res = 0
    for(let num of set){
        if(!set.has(num-1)){
            let curnum = num
            let curlong = 1
            while(set.has(curnum+1)){
                curnum = curnum+1
                curlong+=1
            }
            res = Math.max(res,curlong)
        }
    }
    return res
};