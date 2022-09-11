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
题目：给定一个二叉树，找出其最大深度。
二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
说明: 叶子节点是指没有子节点的节点。
解题思路：利用前面最小深度和层序遍历的经验，直接暴力层序遍历，最后返沪结果的数组长度即为最大深度
 */
var maxDepth = function(root) {
    if(!root) return 0
    let stack = [root]
    let ans = []
    while(stack.length){
        let count = stack.length
        while(count--){
            var temArr=[]    
            let temRoot = stack.shift()
            temArr.push(temRoot.val)
            if(temRoot.left) stack.push(temRoot.left)
            if(temRoot.right) stack.push(temRoot.right)
        }
    ans.push(temArr)
    }
    return ans.length
};

//这个思路可以优化内存，不需要把结果存下来，直接定义一个depth记录深度即可，每循环一次就深度加1

var maxDepth = function(root) {
    if(!root) return 0
    let stack = [root]
    let depth = 0 //深度
    while(stack.length){
        let count = stack.length
        //每循环一层就让深度加1，可以大大优化内存
        depth++
        while(count--){
            let temRoot = stack.shift()
            if(temRoot.left) stack.push(temRoot.left)
            if(temRoot.right) stack.push(temRoot.right)
        }
    }
    return depth
};