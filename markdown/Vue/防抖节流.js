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
        if(Date.now - timer > delay){
            fn.apply(this,arguments)
            preTime = Date.now()
        }
    }
}