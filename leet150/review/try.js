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


function debounce (fn,delay){
    let timer
    return function (){
        if(timer) clearTimeout(timer)
        let args = arguments
        timer = setTimeout(()=>{
            fn.apply(this,args)
        },delay)
    }
}

function throttle(fn,delay){
    let pretime = Date.now()
    return function(){
        if(Date.now() - pretime > delay){
            fn.apply(this,arguments)
            pretime = Date.now()
        }
    }
}

function curry (fn){
    return function curried(...args){
        if(args.length >= fn.length){
            return fn.apply(this,args)
        }
        else{
            return function(...args2){
                return curried(this,args.concat(args2))
            }
        }
    }
}