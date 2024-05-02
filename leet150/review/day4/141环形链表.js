var hasCycle = function(head) {
    let slow = head
    let fast = head
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
        if(slow === fast) return true
    }
    return false
};
// 注意这里因为用到了fast.next.next 需要判断fast存在并且，fast.next存在
var hasCycle = function(head) {
    let slow = head
    let fast = head
    while(fast&&fast.next){
        if(slow === fast) return true
        slow = slow.next
        fast = fast.next.next
    }
    return false
};


var hasCycle = function(head) {
    let x = new Set()
    while(head){
        if(x.has(head)) return true
        x.add(head)
        head = head.next
    }
    return false
};

// 这里用哈希表也可做