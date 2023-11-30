var getDecimalValue = function(head) {
    let box = ''
    let x = head
    while(x&&x.next){
        box+=x.val
        x = x.next
    }
    box+=x.val
    return parseInt(box,2)
};

console.log(parseInt('10',2));