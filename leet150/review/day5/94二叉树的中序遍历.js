var inorderTraversal = function(root) {
    let list = []
    const inorder = function(root){
        if(root === null) return
        inorder(root.left)
        list.push(root.val)
        inorder(root.right)
    }
    inorder(root)
    return list
};




var inorderTraversal = function(root){
    let list = []
    const inorder = function(root){
        if(root === null) return
        inorder(root.left)
        list.push(root.val)
        inorder(root.right)
    }
    return list
}


