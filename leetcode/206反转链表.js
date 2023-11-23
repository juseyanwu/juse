var reverseList = function(head) {
    if(!head) return head
    let slow = head
    let fast = head.next
    while(slow.next&&slow.next.next){
        let p = slow.next.next
        let q = slow.next
        fast.next = slow
        fast = p
        slow = q
        q = q.next
        p = p.next
    }
    return fast
};