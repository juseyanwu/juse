isPowerOfThree(21);
var isPowerOfThree = function(n) {
    if(n==1){
        return true
    }
    if(n%3!==0&&n<=0){
        return false
    }
    return isPowerOfThree(n/3)
}
// 注意isPowerOfThree



// 官方题解
var isPowerOfThree = function(n) {
    while (n !== 0 && n % 3 === 0) {
        n = Math.floor(n / 3);
    }
    return n === 1;
};

// Math.floor 为向下取整
// Math.floor(4.9); // 返回 4
// Math.floor(2.1); // 返回 2
// Math.floor(-3.5); // 返回 -4
