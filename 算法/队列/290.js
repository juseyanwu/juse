var wordPattern = function(pattern, s) {
    let x = new Map()
    for(const n of pattern){
        if(x.get(n)){
            x.set(n,x.get(n)+1)
        }
    }
};