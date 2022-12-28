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
 * @return {boolean}
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
 */
// 递归法
 var isSymmetric = function(root) {
    if(!root) return true //边界条件
    // 定义比较函数
    function compare(left,right){
        if(left==null&&right==null) return true //左右都为null 为true
        if(left==null||right==null||left.val!==right.val) return false //一个为null一个不是，或者不相等，为false
        // 递归判断左节点的左和右节点的右，左节点的右和右节点的左
        return compare(left.left,right.right)&&compare(left.right,right.left) 
    }
    return compare(root.left,root.right)
};

// 迭代法 ：思路：添加队列顺序改为l.left,r.right,l.right,r.left那么每次循环取两个元素如果对称那么这两个元素相等
var isSymmetric = function(root) {
    let queue = [root,root]
    while(queue.length) {
        // 取两个元素
        let l = queue.shift();
        let r = queue.shift();
        if(l == null && r == null) continue;
        if(l == null || r == null||l.val !==r.val) return false;
        queue.push(l.left);
        queue.push(r.right);
        queue.push(l.right);
        queue.push(r.left);
    }
    return true;
};