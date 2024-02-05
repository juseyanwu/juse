var hasPathSum = function(root, targetSum) {
    if(!root) return 0
    let res = false
    const dfs = (root,sum)=>{
    if(!root) return
    if(sum==targetSum && (!root.left && !root.right) ){
        res = true
    }
    if(root.left)  dfs(root.left,sum+root.left.val)
    if(root.right)  dfs(root.right,sum+root.right.val)
    }
    dfs(root, root.val)
    return res
};