var inorderTraversal = function(root) {
    let res = []
    let x = (root) => {
        if(root===null){
            return
        }
        x(root.left)
        res.push(root.val)
        x(root.right)
    }
    x(root)
    return res
};