var arr = [1,[2,[3,4]]]

var newArr = arr.flat(2)

console.log(newArr);

//arr.flat(2)，数组扁平化，可以把三维数组变成一维数组，三维数组写2就变成一维数组，扁平化两次的意思

// arr.flat(Infinity)  Infinity 是无穷大的意思， 可以无穷次扁平化数组，用在不知道数组是几维数组的情况下

