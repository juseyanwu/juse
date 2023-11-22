var mergeTwoLists = function(list1, list2) {
    let x = list1
    let y =list2
    while(x.next!==null&&y.next!==null){
        if(x.val>=y.val){
            y=y.next
            y.next = x
        }
        else{
            x=x.next
            x.next = y
        }
    }
    if(list1.val>=list2.val){
        return list1
    }
    else return list2
};