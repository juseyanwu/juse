var connect = function(root) {
    const pre = []
    let dfs = (node,depth) => {
        if(node === null) return
        if(depth === pre.length) pre.push(node)
        else{
            pre[depth].next = node
            pre[depth] = node
        }
        dfs(node.left,depth+1)
        dfs(node.right,depth+1)
    }
    dfs(root,0)
    return root
};