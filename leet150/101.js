var isSymmetric = function(root) {
    var isSameTree = (q,p) => {
        if(q==null && p==null) return true
        if(q==null || p==null) return false
        return q.val===p.val && isSameTree(q.left,p.right) && isSameTree(q.right,p.left)
    }
    return isSameTree(root.left,root.right)
};