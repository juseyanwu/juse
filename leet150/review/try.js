function curry (fn) {
    return function curried (...args){
        if(args.length>=fn.length){
            return fn.apply(this,args)
        }
        else{
            return function(...args2){
                return curried.apply(this,args.concat(args2))
            }
        }
    }
}

function sum (a,b){
    console.log(a + b);
}

let _sum = curry(sum)

_sum(1)(2)