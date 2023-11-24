var partition = function(head, x) {
    let dummy = new ListNode(0)
    let current = dummy
    let fast = head
    let slow = head
    while(slow){
        if(slow.val<x){
            current.next = slow
            current = current.next
        }
        slow = slow.next
    }
    while(fast){
        if(fast.val>=x){
            current.next = fast
            current = current.next
        }
        fast = fast.next
    }
    return dummy.next
};