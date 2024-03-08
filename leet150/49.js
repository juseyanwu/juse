var groupAnagrams = function(strs) {
    let map = new Map()
    for(let str of strs){
        let x = Array.from(str)
        let array = x.sort()
        let key = array.toString()
        let list = map.get(key) ? map.get(key) : new Array()
        list.push(str)
        map.set(key,list)
    }
    return Array.from(map.values())
};