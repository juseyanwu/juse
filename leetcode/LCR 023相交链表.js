var getIntersectionNode = function(headA, headB) {
    if(headA==null||headB==null) return null
    let a = headA
    let b = headB
    while(a!=b){
        a = a === null ? headB : a.next
        b = b === null ? headA : b.next
        if(a==b){
            return a.val
        }
    }
    return null
};