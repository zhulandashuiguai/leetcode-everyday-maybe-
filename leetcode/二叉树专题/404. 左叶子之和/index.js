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
 * 给定二叉树的根节点 root ，返回所有左叶子之和。
 * 输入: root = [3,9,20,null,null,15,7] 
输出: 24 
解释: 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24

 */
// 解题思路:递归 根节点的左叶子节点和就等于左子树+右子树叶子节点和
 var sumOfLeftLeaves = function(root) {
    // 终止条件
    if(!root ) return 0
    if(root.left==null&&root.right==null) return 0
    //左节点叶子数
    let leftNum = sumOfLeftLeaves(root.left)
    //单层处理逻辑，
    if(root.left!==null&&(root.left.left==null&&root.left.right==null)){
         leftNum = root.left.val
    }
    let rightNum = sumOfLeftLeaves(root.right)
    return leftNum+rightNum
};

// 层序遍历也可以，只需要判断此节点是否是符合条件的节点然后作累加即可
var sumOfLeftLeaves = function(root) {
    //采用层序遍历
  if(root === null) {
      return 0;
  }
  let queue = [root];
  let sum = 0;
  while(queue.length) {
    let node = queue.shift();
    if(node.left !== null && node.left.left === null && node.left.right === null) {
        sum+=node.left.val;
    }
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
  return sum;
};