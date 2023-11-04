var arr = [1,[2,[3,4]]]


function flaten(arr){
     return arr.toString().split(',').map(function(item){
        return +item
    })
}
console.log(flaten(arr));

// parseInt('1')

// Number('1')

// +'1'


       // NAN为number类型


