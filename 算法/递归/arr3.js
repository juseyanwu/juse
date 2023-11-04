var arr = [1,[2,[3,4]]]


// arr = [1,2,3,4,5,6,7]

// var sum = arr.reduce(function(pre,item,index,arr){
//     return pre + item   //return会把 pre + item 赋给pre 到下一次遍历的时候pre会变成0+1=1  用reduce做累计的方法很方便
// },0)


// console.log(sum);

function flaten (arr){
    return arr.reduce(function(pre,item){
        return pre.concat(Array.isArray(item)?flaten(item):item)
    },[])
}

console.log(flaten(arr));

// 优雅
