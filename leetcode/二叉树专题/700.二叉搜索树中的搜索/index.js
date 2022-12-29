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
 * @param {number} val
 * @return {TreeNode}
 */
// 利用迭代法遍历二叉树
 var searchBST = function(root, val) {
    let queue = [root] 
    while(queue.length){
            let tem = queue.shift()
            if(tem.val==val) return tem
            tem.left&&queue.push(tem.left)
            tem.right&&queue.push(tem.right)
    }
    return null
};