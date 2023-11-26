var numJewelsInStones = function(jewels, stones) {
    let sum = 0
    let hash = new Map()
    for(const stone of stones){
        if(hash.get(stone)){
            hash.set(stone,hash.get(stone)+1)
        }
        else hash.set(stone,1)
    }
    for(const jl of jewels){
        if(hash.get(jl)){
            sum+=hash.get(jl)
        }
    }
    return sum
};