const traffic_light = (color, duration) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('traffic_light', color);
            resolve()
        }, duration)
    })
}
const main = () => {
    Promise.resolve()
        .then(() => traffic_light('green', 5000))
        .then(() => traffic_light('yellow', 1000))
        .then(() => traffic_light('red', 2000))
        .then(() => {
            main()
        })
}
main();
