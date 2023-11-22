var addTwoNumbers = function(l1, l2) {
    let x = l1
    let y = l2
    let a = 0
    while(x&&y){
        if((x.val + y.val + a) < 10){
            x.val = x.val + y.val + a
            x = x.next
            y = y.next
            a = 0
            x?x.val : 0
            y?y.val : 0
        }
        else{
            x.val = Math.floor((x.val + y.val + a)%10)
            a = 1
            x = x.next
            y = y.next
            x?x.val : 0
            y?y.val : 0
        }
    }
    if(a==1){
        x.next = new ListNode(1)
    }
    return l1
};

243
564

703