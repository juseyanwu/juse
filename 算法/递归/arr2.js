

var arr = [1,[2,[3,4]]]

function flatten (arr){
    var result = []
    for (var i = 0 ; i<arr.length ; i++){
        if(Array.isArray(arr[i])){
            var nextArr = flatten(arr[i])
            result = result.concat(nextArr)
        }
        else{
            result.push(arr[i])
        }
    }

    return result 
}

console.log(flatten(arr));

// type of 一个数组 结果为object ,数组是一种对象类型

// arr instanceof Array

// Array.isArray(arr)

