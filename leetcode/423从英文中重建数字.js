var originalDigits = function(s) {
    let x = [
        ["five" , 5],
        ["one", 1],
        ["two", 2],
        ["three" , 3],
        ["four ", 4],
        ["six ", 6],
        ["seven", 7],
        ["eight", 8],
        ["nine " ,9],
        ["ten" , 10]
    ]
    let hash = new Map(x)
    return hash.get('five')
};

console.log(originalDigits());