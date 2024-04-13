var reverseList = function(head) {
    let tail = null
    let cur = head
    while(cur){
        let next = cur.next
        cur.next = tail
        tail = cur
        cur = next
    }
    return tail
};

// 用一个next去存储cur的下一个值，然后让cur去指向tail
// 迭代法