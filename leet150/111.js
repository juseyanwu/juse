var minDepth = function(root) {
    if(root===null) return
    let leftmin = minDepth(root.left)
    let rightmin = minDepth(root.right)
    return 1 + Math.min(root.left,root.right)
};