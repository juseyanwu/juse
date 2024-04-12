const debounce = (fn,delay) => {
    let timer
    return function(){
        
        if (timer) clearTimeout(timer)

        let args = arguments

        timer = setTimeout(()=>{
            fn.call(this,...args)
        },delay)
    }
    
}


const throttle = (fn,delay) => {
    let now = Data.now()
    return function(){
        let args = arguments
        if(Data.now()-now > delay){
            fn().apply(this,args)
            now = Data.now()
        }
    }
}