var flatten = function(root) {
    let x = []
    var pre = (root) => {
        if(root === null) return
        x.push(root)
        pre(root.left)
        pre(root.right)
    }
    pre(root)
    let n = x.length
    for(let i = 1;i<n;i++){
        let cur = x[i]
        let pre = x[i-1]
        pre.left = null
        pre.right = cur
    }
};



