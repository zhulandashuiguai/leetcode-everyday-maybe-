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
题目：
给定一个二叉树，找出其最小深度。
最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
说明：叶子节点是指没有子节点的节点。
示例：
输入：root = [3,9,20,null,null,15,7]
输出：2
思路：利用层序遍历的思想，每开始遍历一层就让深度+1，当遇到没有左右子节点的节点时，就返回深度即可
 */
var minDepth = function(root) {
    if(!root) return 0
    let depth = 0
    let stack = [root]
    while(stack.length){
        let count = stack.length
        depth++
        while(count--){
            let tem = stack.shift()
            if(!tem.left&&!tem.right) return depth
            if(tem.left) stack.push(tem.left)   
            if(tem.right) stack.push(tem.right)   
        }
    }
    return -1
};

// 递归
var minDepth = function(root) {
    if(!root) return 0
    let leftH =Number.MAX_VALUE,rightH=Number.MAX_VALUE;
    if(!root.left&&!root.right) return 1 //没有子节点返回1
    if(root.left) leftH = minDepth(root.left) //记录左节点最小高度
    if(root.right) rightH = minDepth(root.right) //记录右节点最新高度
    return Math.min(leftH,rightH)+1  //最小高度为左右节点中最小的那个+1
};