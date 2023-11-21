var wordPattern = function(pattern, s) {
    let hash = new Map()
    let x = s.split(' ')
    if(pattern.length!=x.length){
        return false
    }
    for(let i=0;i<pattern.length;i++){
        if(hash.has(pattern[i])){
            if(hash.get(pattern[i])!==x[i]){
                return false
            }
        }
        if(x.indexOf(x[i])!=pattern.indexOf(pattern[i])){
            return false
        }
        hash.set(pattern[i],x[i])
    }
    return true
};

// index of