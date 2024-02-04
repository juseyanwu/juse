// const buildTree = (preorder, inorder) => {
//     if (inorder.length == 0) return null;
//     const root = new TreeNode(preorder[0]);
//     const mid = inorder.indexOf(preorder[0]);
//     root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
//     root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
//     return root;
//   };



const buildTree = (preorder, inorder) => {
    if(preorder.length == 0){
        return null
    }
    let root = new TreeNode(preorder[0])
    let mid = inorder.indexOf(preorder[0])
    let left = inorder.slice(0,mid)
    let right = inorder.slice(mid+1)
    let leftpre = preorder.slice(1,mid+1)
    let rightpre = preorder.slice(mid+1)
    root.left = buildTree(leftpre,left)
    root.right = buildTree(rightpre,right)
    return root
}

