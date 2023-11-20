const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')


// console.log(secondHand);

function setTime(){
    const now = new Date()
    //获取当前的秒数
    const seconds = now.getSeconds()
    const mins = now.getMinutes()
    const hours = now.getHours()
    const secondsDegrees = seconds*6 +90
    const minDegrees = mins*6 +90
    const hourDegrees = hours*30 +90 + (mins/2)
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    minHand.style.transform = `rotate(${minDegrees}deg)`
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
    secondHand.style.background = "white"
}

setInterval(setTime,1000)

