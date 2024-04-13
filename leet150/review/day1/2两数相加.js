var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0)
    let cur = head
    let carry = 0
    while(l1||l2){
        let n1 = l1? l1.val : 0
        let n2 = l2? l2.val : 0
        let sum = n1 + n2 + carry
        carry = Math.floor(sum/10)
        cur.next = new ListNode(sum%10)
        cur = cur.next
        l1 = l1?l1.next : null
        l2 = l2?l2.next : null
    }
    if(carry > 0) cur.next = new ListNode(carry)

    return head.next
};

// 这里创建一个head用于返回链表的头节点以代表整个链表，而让cur去走接下来的路