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
 * @return {string[]}
 * 给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。
叶子节点 是指没有子节点的节点。
输入：root = [1,2,3,null,5]
输出：["1->2->5","1->3"]
*/

// 解题思路：回溯法
 var binaryTreePaths = function(root) {
    let path = [],result=[];
    function back_trace(node,path,result){ //回溯的递归函数//先确定参数
        path.push(node.val)                // 处理节点
        if(node.left==null&&node.right==null){      //终止条件，此节点为叶子节点
            return result.push(path.join('->'))
        }
        if(node.left){    //单层处理逻辑
            back_trace(node.left,path,result)
            path.pop()  //弹出节点
        } 
         if(node.right){ 
            back_trace(node.right,path,result)
            path.pop()
        } 
    }

    back_trace(root,path,result)
    return result
};
