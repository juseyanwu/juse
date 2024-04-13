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
