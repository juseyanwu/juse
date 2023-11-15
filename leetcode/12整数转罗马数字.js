var intToRoman = function(num) {
    let ans = []
    let x = new Map()
    x.set(1000, "M")
    x.set(900, "CM")
    x.set(500, "D")
    x.set(400, "CD")
    x.set(100, "C")
    x.set(90, "XC")
    x.set(50, "L")
    x.set(40, "XL")
    x.set(10, "X")
    x.set(9, "IX")
    x.set(5, "V")
    x.set(4, "IV")
    x.set(1, "I")
    for([key,value] of x){
        while(num>=key){
            num = num-key
            ans.push(value)
        }
    }
    return ans.join('')
};


console.log(intToRoman(28));
