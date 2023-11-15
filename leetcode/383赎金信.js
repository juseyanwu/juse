var canConstruct = function(ransomNote, magazine) {
    let x = new Map()
    for(i=0;i<magazine.length;i++){
        if(x.get(magazine[i])){
            x.set(magazine[i],x.get(magazine[i])+1)
        }
        else{
            x.set(magazine[i],1)
        }
    }
    let ans = 1

    for(j=0;j<ransomNote.length;j++){
        if(x.has(ransomNote[j])){
            x.set((ransomNote[j]),x.get(ransomNote[j])-1)
        }
        if(!(x.has(ransomNote[j]))){
            ans = 0
        }
    }
    for(const n of x.values()){
        if(n<0){
            ans=0
        }
    }
    return ans
};