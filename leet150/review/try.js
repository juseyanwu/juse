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
    let now = Data().now
    return function(){
        if(Data.now() - now > delay){
            fn.apply(this,arguments)
            now = Data.now()
        }
    }
}