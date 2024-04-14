var canConstruct = function(ransomNote, magazine) {
    let map = new Map()
    for(let item of ransomNote){
        if(!map.get(item)){
            map.set(item,1)
        }
        else{
            map.set(item,map.get(item)+1)
        }
    }
    for(let s of magazine){
        if(map.get(s)){
            map.set(s,map.get(s)-1)
        }
    }
    let sum = 0
    map.forEach((val)=>{
        sum = val + sum
    })
    if(sum<=0) return true
    else return false
};

console.log(canConstruct('asaac','b'));