var buildTree = function(inorder, postorder) {
    if(!postorder){
        return
    }
    let root = new TreeNode(postorder[postorder.length-1])
    let mid = inorder.indexof(root.val)
    let left = inorder.slice(0,mid)
    let right = inorder.slice(mid+1)
    let postleft = postorder.slice(0,mid)
    let postright = postorder.slice(mid,postorder.length-1)
    root.left = buildTree(left,postleft)
    root.right = buildTree(right,postright)
    return root
};