var merge = function(nums1, m, nums2, n) {
    let l1 = nums1.length
let l2 = nums2.length
let j =0
for(let i = 0 ; i<l1 ; i++){
    if(nums1[i]==0){
        if(j<nums2.length){
            nums1[i]=nums2[j]
            j++
        }
    }
}
nums1.sort((a, b) => a - b);
};
