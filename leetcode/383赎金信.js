var canConstruct = function(ransomNote, magazine) {
    let hash = new Map()
    let x = ransomNote
    for(const letter of magazine){
        if(hash.get(letter)){
            hash.set(letter,hash.get(letter)+1)
        }
        else hash.set(letter,1)
    }
    for(const lett of ransomNote){
        if(!hash.get(x)){
            return false
        }
        else{
            x = x.relace(lett,'')
            hash.set(lett,hash.get(lett)-1)
        }
    }
    if(x){
        return true
    }
    else return  false
};