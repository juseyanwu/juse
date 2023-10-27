function setTime(){
    const now= new Date()

    const seconds = now.getSeconds()
    const secondsDegrees = seconds*6 + 90
    secondHand.style.transform = `rotate()`
}