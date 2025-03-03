let middleware = []

middleware.push(function(next) {
    console.log('1')
    next()
    console.log('end 1')
})

middleware.push(function(next) {
    console.log('2')
    next()
    console.log('end 2')
})

middleware.push(function(next) {
    console.log('3')
    next()
    console.log('end 3')
})

function compose(middleware) { //传入一个中间件数组
    function dispatch(i) {
        if (i === middleware.length) return
        const next = () => {
            dispatch(i+1)
        }

        let fn = middleware[i]
        fn(next)
    }
    dispatch(0)
}

compose(middleware) // 1 2 3 end 1 end 2 end 3