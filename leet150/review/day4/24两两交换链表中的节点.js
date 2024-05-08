var swapPairs = function(head) {
    if(head===null || head.next === null){
        return head
    }
    const newhead = head.next
    head.next = swapPairs(newhead.next)
    newhead.next = head
    return newhead
};


// 递归的方法，非常妙
// 递归出口：如果链表中只剩一个节点，或者没有节点了，就交换不了了，return head
// 从子问题入手，化解大问题


var swapPairs = function(head) {
    if(head===null||head.next === null){
        return head
    }
    let nexthead = head
    head.next = swapPairs(nexthead.next)
    nexthead.next = head

    return nexthead
};