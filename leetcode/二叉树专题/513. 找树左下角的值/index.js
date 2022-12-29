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
 * 给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。
假设二叉树中至少有一个节点。
 */
// 解题思路：层序遍历，手机每层的元素，最后返回最后一层的第一个元素即可
 var findBottomLeftValue = function(root) {
    let queue = [root]
    let res = []
    while(queue.length){
        let len = queue.length
        let temArr = []
        while(len--){
            let tem=queue.shift()
            temArr.push(tem.val)    
            tem.left&&queue.push(tem.left)
            tem.right&&queue.push(tem.right)
        }
        res.push(temArr)
    }
    return res[res.length-1][0]
};
// 优化
var findBottomLeftValue = function(root) {
    let queue = [root]
    let res = 0
    while(queue.length){
        let len = queue.length
        while(len--){
            let tem=queue.shift()
            tem.right&&queue.push(tem.right) //先放右节点，再放左节点，这样最后一个操作的元素就是最左侧的节点
            tem.left&&queue.push(tem.left)
            res=tem.val
        }
    }
    return res
};
// 递归法：待完成