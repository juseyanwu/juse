var isValid = function(s) {
    let stuck = []
    let map = new Map([
        [')','('],
        ['}','{'],
        [']','[']
    ])
    for(const x of s){
        if(map.get(x)){
            if(stuck[stuck.length-1]!==map.get(x)){
                return false
            }
            else stuck.pop()
        }
        else{
            stuck.push(x)
        }
    }
    return !stuck.length
};