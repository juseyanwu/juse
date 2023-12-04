var maxScore = function(s) {
    let max = 0
    for(let i=0;i<s.length-1;i++){
        let x = 0
        let y = 0
        let sum = 0
        for(let j=0;j<=i;j++){
            if(s[j]==='0'){
                x++
            }
        }
        for(let k=i+1;k<s.length;k++){
            if(s[k]==='1'){
                y++
            }
        }
        sum = x + y
        if(sum>max){
            max = sum
        }
    }
    return max
};
