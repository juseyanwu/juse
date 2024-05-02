var detectCycle = function(head) {
    let x = new Set()
    while(head){
        if(x.has(head)) return head
        x.add(head)
        head = head.next
    }
    return null
};

// 利用哈希表