var intersect = function(nums1, nums2) {
    let x = new Map()
    let y = new Map()
    for(i=0;i<nums1.length;i++){
        for(j=0;j<nums2.length;j++){
            if(nums1[i]==nums2[j]){
                if(x.has(nums1[i])){
                    x.set(nums1[i],x.get(nums1)++)
                }
                else{
                    x.set(nums1[i],1)
                }
            }
        }
    }
    for(i=0;i<nums2.length;i++){
        for(j=0;j<nums1.length;j++){
            if(nums1[i]==nums2[j]){
                if(y.has(nums2[i])){
                    y.set(nums2[i],y.get(nums2)++)
                }
                else{
                    y.set(nums2[i],1)
                }
            }
        }
    }
};