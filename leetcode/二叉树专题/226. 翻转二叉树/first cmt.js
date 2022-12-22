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
 * @return {TreeNode}
题目：反转二叉树，即左右子树换位，根节点不动
思路：这道题用递归简直妙哉
 */
var invertTree = function(root) {
  // 直接递归
    if(!root) return root
    let tem = root.left 
    root.left=root.right
    root.right=tem
    invertTree(root.left)
    invertTree(root.right)
    return root 
};