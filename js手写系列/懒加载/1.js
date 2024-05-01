const imgs = document.getElementsByTagName('img')

function lazyload(imgs){

    //浏览器可视窗口的高度
    const windowHeight = window.innerHeight
    //可视窗口滚动过的距离
    const scrollHeight = document.documentElement.scrollTop
    for(let i=0;i<imgs.length;i++){
        if(windowHeight + scrollHeight > imgs[i].document.scrollTop)
    }
}