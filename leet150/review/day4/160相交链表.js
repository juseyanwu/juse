var getIntersectionNode = function(headA, headB) {
    const visited = new Set()
    let temp = headA
    while(temp != null){
        visited.add(temp)
        temp = temp.next
    }
    temp = headB
    while(temp != null){
        if(visited.has(temp)){
            return temp
        }
        temp = temp.next
    }
    return null
};

//利用哈希集合存储链表headA的所有节点，然后遍历链表headB去查询哈希集合中是否has相同的节点
// 如果有就返回  
// 时间复杂度O(m+n) m是headA的链表长度,n是headB的链表长度



//解法二  指针

// 时间复杂度O(m+n) 空间复杂度O(1)

// 非常妙啊

// 1. 首先判断两个链表是否为空,如果其中有一个为空就返回null
// 2. 让两个指针同时遍历两个节点,每次都走一步
// 3. 如果两个链表会相交,并且相交前节点数一样的话,那么刚好第一轮一步一步往下走就会pA = pB
// 4. 如果两个链表相交,但相交前节点数不一样,那就让pA指向headB的头节点,pB指向headA的头节点
// 5. 这样两个指针走过的距离一定相等

var getIntersectionNode = function(headA, headB) {
    let pA = headA
    let pB = headB
    if(headA === null || headB === null){  
        return null
    }
    while(pA != pB){   //注意这里的循环条件是pA != pB
        pA = pA === null? headB : pA.next
        pB = pB === null? headA : pB.next
    }

    return pA
};
