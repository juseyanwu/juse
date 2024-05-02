var reverseList = function(head) {
    let prev = null
    let curr = head
    while (curr){
        var next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
};

//时间复杂度O(n) n是链表的长度
// 空间复杂度O(1)


var reverseList = function(head) {
    let prev = null
    let cur = head
    while(cur){
        var nextcur = cur.next
        cur.next = prev
        prev = cur
        cur = nextcur
    }
    return prev
};