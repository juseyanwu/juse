var intersect = function(nums1, nums2) {
    let ans = []
    let x = new Map()
    for(const n1 of nums1){
        if(x[n1]){
            x[n1]++
        }
        else{
            x[n1]=1
        }
    }
    for(const n2 of nums2){
        if(x[n2]>0){
            ans.push(n2)
            x[n2]--
        }
    }
    return ans
};




