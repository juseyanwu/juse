var deleteDuplicates = function(head) {
    let cur = head
    while(cur !== null && cur.next){
        if(cur.next.val==cur.val){
            cur.next=cur.next.next
        }
        else{
            cur = cur.next
        }
    }
    return head
};