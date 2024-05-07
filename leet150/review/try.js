function curry(fn) {
    // 保存预置参数
    const presetArgs = [].slice.call(arguments, 1)
    // 返回一个新函数
    return function() {
      // 新函数调用时会继续传参
      const restArgs = [].slice.call(arguments)
      const allArgs = [...presetArgs, ...restArgs]
      if (allArgs.length >= fn.length) {
        // 如果参数够了，就执行原函数
        return fn.apply(this, allArgs)
      } else {
        // 否则继续柯里化
        return curry.call(null, fn, ...allArgs)
      }
    }
  }
  


function sum (a,b,c,d){
    console.log(a + b +c +d);
}

let _sum = curry(sum)

_sum(1)(2)(3)(4)