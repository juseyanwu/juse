function getParams(url){
    const res = {}
    if(url.indexOf('?') != -1 )
    if(url.includes('?')){
        const str = url.split('?')[1]

        const arr = str.split('&')

        arr.forEach(item => {
            // const key = item.split('=')[0]
            // const val = item.split('=')[1]
            const [key,val] = item.split('=')
            res[key] = decodeURIComponent(val)
        });
    }


    return res
}

const user = getParams(
    'http://www.baidu.com?user=%E9%98%BF%E9%A3%9E&age=16'
)

console.log(user);
