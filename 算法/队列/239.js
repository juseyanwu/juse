var maxSlidingWindow = function(nums, k) {
    let deque = []
    let res = []
    const len = nums.length
    for(let i = 0;i<len;i++){
        while(deque.length && nums[deque[deque.length-1]]<=nums[i]){
            deque.pop()
        }
        deque.push(i)

        if(deque[0]<=i-k){
            deque.shift()
        }

        if(i>=k-1){ //开始记录最大值
            res.push(nums[deque[0]])
        }
    }
    return res
};