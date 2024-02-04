var preorderTraversal = function(root) {
    if(root === null) return []
    let res = []
    res.push(root.val)
    preorderTraversal(root.left)
    preorderTraversal(root.right)
    return res
};