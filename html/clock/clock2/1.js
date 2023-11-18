const secondHand = document.querySelector('.second-hand')

// console.log(secondHand);

function setTime(){
    const now = new Date()
    //获取当前的秒数
    const seconds = now.getSeconds()
    const secondsDegrees = seconds*6 +90
}
