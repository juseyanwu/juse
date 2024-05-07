var inorderTraversal = function(root) {
    let list = []  // 创建空数组接收遍历到的值
    const inorder = function(root){  // 创建递归函数
        if(root === null) return   // 递归出口->root === null
        inorder(root.left)
        list.push(root.val)  // 中序遍历就是左中右
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


