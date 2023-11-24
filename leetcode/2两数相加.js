var addTwoNumbers = function(l1, l2) {
    let x = l1
    let y = l2
    let carry = 0
    let dummy = new ListNode(0)
    let current = dummy
    while(x&&y){
        
        if(x.val + y.val + carry <10){
            x.val = x.val + y.val + carry
            carry = 0
        }
        else if(x.val + y.val + carry>=10){
            x.val = (x.val + y.val + carry)%10
            carry = 1
        }
        
        if(x&&!y.next&&x.next){
            y.next = new ListNode(0)
        }
        if(y&&!x.next&&y.next){
            x.next = new ListNode(0)
        }
        current.next = x
        current = current.next
        x = x.next
        y = y.next  
    }
    if(carry == 1){
        current.next = new ListNode(1)
    }
    return dummy.next
};