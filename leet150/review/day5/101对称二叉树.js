const isSymmetric = (root) => {
  
    const check = (left, right) => {
        if (left == null && right == null) { // 两个子树都为null，是对称的
           return true;
        }
        if (left && right) { // 两个子树都存在，则需要：root值相同，且他们的子树也满足镜像
            return left.val == right.val && check(left.left, right.right) && check(left.right, right.left);
        }
        return false;        // 一个子树存在一个不存在，肯定不对称
    };

          
    return check(root.left, root.right); // 否则，判断它的左右子树是否满足对称
};

// 思路 1. 定义一个递归函数，函数作用是判断该节点的左右子树是否对称
//      2. 三种情况：1.左右子树都为null的话，对称，返回true 2.左右子树都存在，需要满足 左右节点值相同 左左子树和右右子树相等 左右子树和右左子树相等
//         3. 一个子树存在一个子树不存在 return false
//      3. 最后把根节点的左右子树传进这个递归函数