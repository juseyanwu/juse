/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 2两数相加
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



var addTwoNumbers = function (l1,l2){
    let head = new ListNode(0)
    let cur = head
    let carry = 0
    while(l1||l2){
        let n1 = l1? l1.val : 0
        let n2 = l2? l2.val : 0
        let sum = carry + n1 + n2
        carry = Math.floor(sum/10)
        cur.next = new ListNode(sum%10)
        cur = cur.next
        l1 = l1? l1.next : null
        l2 = l2? l2.next : null
    }
    if(carry > 0) cur.next = new ListNode(carry)

    return head.ne
}


// 5.3      cur = cur.next
var addTwoNumbers = function(l1,l2){
    let head = new ListNode(0)
    let cur = head
    let carry = 0
    while(l1||l2){
        let n1 = l1?l1.val : 0
        let n2 = l2?l2.val : 0
        let sum = carry + n1 + n2
        carry = Math.floor((carry + n1 + n2)/10)
        cur.next = new ListNode(sum%10)
        l1 = l1?l1.next:null
        l2 = l2?l2.next:null
    }
    if(carry>0) cur.next = new ListNode(carry)

    return head.next

}

var addTwoNumbers = function (l1,l2){
    let head = new ListNode(0)
    let cur = head
    let carry = 0
    while(l1 || l2){
        let n1 = l1.val? l1.val : 0
        let n2 = l2.val? l2.val : 0
        let sum = n1 + n2 + carry
        cur.next = new ListNode(sum%10)
        carry = Math.floor(sum/10)
        cur = cur.next
        l1 = l1?l1.next:null
        l2 = l2?l2.next:null
    }
    if (carry > 0) cur.next = new ListNode(carry)
    
    return head.next
}