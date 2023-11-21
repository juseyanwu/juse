var largestNumber = function(nums) {
    let digi = []
    for(let x of nums){
        while(x>0){
            digi.push(x%10)
            x=Math.floor(x/10)
        }
    }
    for(let i = 1;i<digi.length;i++){
        let base = digi[i]
        let j = i-1
        while(j>=0 && digi[j]>base){
            digi[j+1]=digi[j]
            j--
        }
        digi[j+1]=base
    }
console.log(digi);;
};
largestNumber([3,30,34,5,9])



 