var swapPairs = function(head) {
    let slow = new ListNode(0)
    let fast = new ListNode(0)
    slow = head
    fast = head.ne
    let dummy = new ListNode(0)
    dummy.next = head
    let current = dummy
    while(fast.next&&fast.next.next){
        current.next = fast
        current.next.next = slow
        slow = slow.next.next
        fast = fast.next.next
    }
    return dummy.next
};