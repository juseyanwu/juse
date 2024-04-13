var reverseBetween = function(head, left, right) {
    if (!head || left === right) return head; // 处理边界情况

    let dummy = new ListNode(-1); // 创建一个虚拟头节点
    dummy.next = head; // 将虚拟头节点指向原链表的头节点
    let pre = dummy;

    for (let i = 1; i < left; i++) {
        pre = pre.next; // 找到要反转区间的前一个节点
    }

    let cur = pre.next; // cur 指向要反转的第一个节点
    for (let j = left; j < right; j++) {
        let next = cur.next; // 记录 cur 的下一个节点
        cur.next = next.next; // 删除 cur 节点
        next.next = pre.next; // 将 next 节点插入到 pre 和 pre.next 之间
        pre.next = next; // 更新 pre 的指向
    }

    return dummy.next; // 返回虚拟头节点的下一个节点作为新的头节点
};
