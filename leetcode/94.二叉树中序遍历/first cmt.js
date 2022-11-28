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
 思路：左根右
 */
var inorderTraversal = function(root) {
    if(!root) return []
    let arr =[]
    var fun= (root)=>{   
        if(root){
            fun(root.left)
            arr.push(root.val)
            fun(root.right)
        }
    }
    fun(root)
    return arr
};