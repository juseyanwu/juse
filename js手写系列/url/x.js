function debounce (fn,delay) {
    let timer
    return  function(){
        if(timer) timer = null
        timer = setTimeout(()=>{
            fn()
        },delay)
    }
}