/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    // 默认为 1（根节点）
    let ans = 1;
    
    function depth(rootNode){
        if(!rootNode){
            return 0;
        }
        // 递归获取 左/右 子树的深度（节点数）
        let left = depth(rootNode.left);
        let right = depth(rootNode.right);
        // 最长路径（节点数）
        ans = Math.max(ans, left + right + 1);
        // 以根节点为数的最大深度
        return Math.max(left, right) + 1;
    }

    depth(root);
    // 节点数 - 1
    return ans - 1;
};
