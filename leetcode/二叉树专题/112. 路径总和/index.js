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
 * @param {number} targetSum
 * @return {boolean}
 * 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。
叶子节点 是指没有子节点的节点。
 */

// 回溯法
 var hasPathSum = function(root, targetSum) {
    if(!root) return false  //边界条件
    let res = 0; 
    let flag = false;       //结果
    function back_trace(node){  
        if(flag) return true //剪枝操作，如果flag为true表示已经有符合题意的路径了
        res+=node.val        
        if(node.left==null&&node.right==null){
            if(res==targetSum) return flag=true
        }
        if(node.left) {
            back_trace(node.left)
            //上面递归执行完之后表示已经回到node.left的上一层了，所以下面要减回来
            res-=node.left.val  //此时表示已经回到上一层了
        }
        if(node.right){
            back_trace(node.right)
            res-=node.right.val
        }
    }
    back_trace(root)
    return flag
};