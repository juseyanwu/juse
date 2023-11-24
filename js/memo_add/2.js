const memoized = require('./memo.js')

var count = 0
var fibonacci = function(n){
    count++

    return n < 2? n :fibonacci(n-1) + fibonacci (n-2)

}


const memoizedFibonacci = memoized(fibonacci)
console.time("fibonacci")
fibonacci(10)
console.log(count);
console.timeEnd("fibonacci")