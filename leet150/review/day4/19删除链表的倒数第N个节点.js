var removeNthFromEnd = function(head, n) {
    let x = new ListNode(0,head)
    let fast = x
    let slow = x
    while(n--){
        fast = fast.next
    }
    while(fast.next){
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return x.next
};

//这题很妙，维护一个快指针让快指针刚好比慢指针块N个节点，让他们同速向终点前进
// 前进到快指针刚好到尾节点时，慢指针的下一个刚好就是倒数第N个节点

// !!!!!注意这里一定要先创建一个头节点来指向head，这样才保证最后慢指针的位置正确


var removeNthFromEnd = function(head, n) {
    let x = new ListNode(0,head)
    let slow = x
    let fast = x
    while(n--) fast = fast.next
    while(fast.next){
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return x.next
};