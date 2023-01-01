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
 * 给出二叉 搜索 树的根节点，该树的节点值各不相同，请你将其转换为累加树（Greater Sum Tree），使每个节点 node 的新值等于原树中大于或等于 node.val 的值之和。

 */
 var convertBST = function(root) {
    let pre =0
    function traversal(root){
        if(!root) return
        //右
        traversal(root.right)
        //中
        root.val += pre
        pre = root.val
        traversal(root.left)
    }
    traversal(root)
    return root
};