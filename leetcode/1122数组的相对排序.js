var relativeSortArray = function(arr1, arr2) {
    let hash = new Map()
    let res = []
    let pai = []
    for(const n of arr1){
        if(hash.get(n)){
            hash.set(n,hash.get(n)+1)
        }
        else hash.set(n,1)
    }
    for(const x of arr2){
         for(let i=0;i<hash.get(x);i++){
            res.push(x)
        }
        hash.set(x,0)
    }
    for(const y of arr1){
        if(hash.get(y)){
            pai.push(y)
        }
    }
    for(j=1;j<pai.length;j++){
        let base = pai[j]
        let k = j-1
        while(k>=0&&pai[k]>base){
            pai[k+1]=pai[k]
            k--
        }
        pai[k+1]=base
    }
    return res.concat(pai)
};


