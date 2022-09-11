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
 * @return {number[]}
 常规做法：递归左右根
 */
var postorderTraversal = function(root) {
    if(!root) return []
    let arr=[]
    var fun = (root)=>{
        if(root){
            fun(root.left)
            fun(root.right)
            arr.push(root.val)
        }
    }
    fun(root)
    return arr
};  