var diameterOfBinaryTree = function (root) {
    let ans = 1 // 默认为1是因为默认了根节点自身的深度（高度）
    function depth (node) {
      if (!node) return 0
      let L = depth(node.left) // 递归，获取左子树的深度（高度）
      let R = depth(node.right) // 递归，获取右子树的深度（高度）
      ans = Math.max(ans, L + R + 1) // 取最大深度 （高度）
      return Math.max(L, R) + 1 // 返回最大深度 （高度）
    }
    depth(root)
    return ans - 1 // 那么树的直径就是：最大深度（高度） - 1, 也就是：最大节点数 - 1
  }