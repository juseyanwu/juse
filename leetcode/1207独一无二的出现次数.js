var uniqueOccurrences = function(arr) {
    let hash = new Map()
    let set = new Set()
    let seto = new Set()
    for(const digi of arr){
        seto.add(digi)
    }
    for(let i=0;i<arr.length;i++){
        if(hash.get(arr[i])){
            hash.set(arr[i],hash.get(arr[i])+1)
        }
        else{
            hash.set(arr[i],1)
        }
    }   
    for(const[key,value] of hash){
        set.add(value)
    }
    if(seto.size==set.size){
        return true
    }
    else return false
};

console.log(uniqueOccurrences([1,2]));