var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(0)
    let current = dummy
    let x =list1
    let y = list2
    while(x&&y){
        if(x.val>=y.val){
            current.next = x
            current = current.next
            x = x.next
        }
        if(y.val>x.val){
            current.next = y
            current = current.next
            y = y.next
        }
    }
    if(!y.next){
        current.next = x
    }
    if(!x.next){
        current.next = y
    }

    return dummy.next
};