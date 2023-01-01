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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 * 给你二叉搜索树的根节点 root ，同时给定最小边界low 和最大边界 high。通过修剪二叉搜索树，使得所有节点的值在[low, high]中。修剪树 不应该 改变保留在树中的元素的相对结构 (即，如果没有被移除，原有的父代子代关系都应当保留)。 可以证明，存在 唯一的答案 。
 */
// 递归法：由于被修剪的是二叉搜索树，因此修剪过程必然能够顺利进行。
/**
容易想到使用原函数作为递归函数：

若 root.val 小于边界值 low，则 root 的左子树必然均小于边界值，我们递归处理 root.right 即可；
若 root.val 大于边界值 high，则 root 的右子树必然均大于边界值，我们递归处理 root.left 即可；
若 root.val 符合要求，则 root 可被保留，递归处理其左右节点并重新赋值即可。
 */
 var trimBST = function(root, low, high) {
    if(!root) return null
    if(root.val<low) return trimBST(root.right, low, high)
    if(root.val>high) return trimBST(root.left, low, high)
    root.left = trimBST(root.left, low, high)
    root.right = trimBST(root.right, low, high)
    return root
};