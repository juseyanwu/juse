function a () {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('a');
            resolve('ok')
        },1000)
    })
}

function b () {
    return new Promise ((resolve)=>{
        setTimeout(() => {
            console.log('b');
            resolve('yes')
        }, 500);
    })
}


a().then((res)=>{
    b()
    console.log(res);
})