/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 题目：给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
        如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
输入：p = [1,2,3], q = [1,2,3]
输出：true
思路： 利用递归，先判断两个棵树是否同时到达终点，再判断值是否不相等，只能先判断不相等。再递归判断左右节点即可
 */
var isSameTree = function(p, q) {
    if(!p&&!q) return true
    //利用递归
    //如果同时到达终点
    if(p==null&&q==null) return true 
    //未同时到达终点,即只有一个条件为true
    if(p==null||q==null) return false
    //上面两个条件都没有达到就判断值是否不相等
    //只能判断不相等，否则只要有一个相等就return true了
    if(p.val!==q.val) return false
    return isSameTree(p.left,q.left)&&isSameTree(p.right,q.right)
};