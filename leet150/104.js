// var maxDepth = function(root) {
//     if(root===null) return 0
//     let leftMaxDep = maxDepth(root.left)
//     let rightMaxDep = maxDepth(root.right)
//     return 1 + Math.max(leftMaxDep,rightMaxDep)
// };






















var maxDepth = function(root) {
    if(root === null) return 0
    let leftmax = maxDepth(root.left)
    let rightmax = maxDepth(root.right)
    return 1 + Math.max(leftmax,rightmax)
};