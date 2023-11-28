var numberOfSteps = function(num) {
    let step = 0
    while(num>0){
        if(num%2){
            num--
            step++
        }
        else{
            num = num/2
            step++
        }
    }
    return step
};

