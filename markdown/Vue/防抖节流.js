function debounce(fn,delay){
    let timer
    return function(){
        let args = arguments
        if(timer) clearTimeout(timer)

        timer = setTimeout(()=>{
            fn.call(this,...args)
        },delay)
    }
}

function throttle(fn,delay){
    let preTime = Date.now()
    return function(){
        if(Date.now - preTime > delay){
            fn.apply(this,arguments)
            preTime = Date.now()
        }
    }
}

function debounce(fn,delay){
    let timer
    return function(){
        if(timer) clearTimeout(timer)
        let args = arguments
        timer = setTimeout(()=>{
            fn.call(this,...args)
        },delay)
    }
}