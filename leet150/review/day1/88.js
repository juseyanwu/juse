// var merge = function(nums1, m, nums2, n) {
//     nums1.splice(m,n,...nums2).sort(()=>a-b)

//     return nums1
// };


var merge = function(nums1, m, nums2, n) {
    let p1 = m-1
    let p2 = n-1
    let p = m+n-1
    while(p2){
        if(nums1[p1]>nums2[p2]&&p1){
            nums1[p--] = nums1[p1--]
        }
        else{
            nums1[p--] = nums2[p2--]
        }
    }
};




var merge = function(nums1, m, nums2, n) {
    let p1 = m-1
    let p2 = n-1
    let p = m+n-1
    while(p2>=0){
        if(nums1[p1]>nums2[p2]){
            nums1[p--] = nums1[p1--]
        }
        else{
            nums1[p--] = nums2[p2--]
        }
    }
};



var merge = function(nums1, m, nums2, n){
    let n1 = m-1
    let n2 = n-1
    let p = n+m-1
        while(n2>=0){
            nums1[p--] = nums1[n1]>nums2[n2]?nums1[n1--]:nums2[n2--]
        }
}





















