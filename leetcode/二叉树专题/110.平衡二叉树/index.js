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
 * @return {boolean}
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
本题中，一棵高度平衡二叉树定义为：
一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。
 */
// 解题思路：
 var isBalanced = function(root) {
    if(!root) return true  //空节点是平衡的
    function getHeight(node){   //求节点树的最大深度
        if(!node) return 0
        return Math.max(getHeight(node.left),getHeight(node.right))+1
    }
    // 如果左右子树的最大深度之差大于1就说明此时二叉树不是平衡的
    if(Math.abs(getHeight(root.left)-getHeight(root.right))>1) return false
    return isBalanced(root.left)&&isBalanced(root.right)  //左子树和右子树都平衡，整个树就平衡了
};