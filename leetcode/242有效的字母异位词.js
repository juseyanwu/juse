var isAnagram = function(s, t) {
    let hash = new Map()
    if(s.length!=t.length){
        return false
    }
    for(let i = 0;i<s.length;i++){
        if(hash.get[s[i]]){
            hash.set(s[i],hash.get(s[i])+1)
        }
        else hash.set(s[i],1)
    }
    for(const letter of t){
        if(hash.get(letter)){
            hash.set(letter,hash.get(letter)-1)
        }
    }
    for(const value of hash.values()){
        if(value){
            return false
        }
    }
    return true
};