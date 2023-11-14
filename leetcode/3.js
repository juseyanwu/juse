var intersect = function(nums1, nums2) {
    let x = new Map()
    let y = new Map()
    let z = []
    for(i=0;i<nums1.length;i++){
        if(x.has(nums1[i])){
            x.set(nums1[i],x.get(nums1)++)
        }
        else{
            x.set(nums1[i],1)
        }
    }
    for(i=0;i<nums2.length;i++){
        if(y.has(nums2[i])){
            y.set(nums2[i],y.get(nums2)++)
        }
        else{
            y.set(nums2[i],1)
        }
    }
    for(const [key1 , value1] of x){
        for(const [key2 , value2] of y){
            if(key1==key2){
                if(value1>value2){
                    
                }
            }
        }
    }
};