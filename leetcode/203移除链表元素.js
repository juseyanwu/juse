var removeElements = function(head, val) {
    let dummy = new ListNode(0)
    let current = dummy
    current.next = head
    while(current&&current.next){
        if(current.next.val == val){
            current.next = current.next.next
        }
        else
        current = current.next
    }
    return dummy.next
};