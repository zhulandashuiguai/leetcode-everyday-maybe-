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
题目：给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
思路：比较简单，根左右，先判断根节点是否为null，不是则访问他的val，再递归左节点和右节点。
示例：
输入：root = [1,null,2,3]
输出：[1,2,3]
 */

var preorderTraversal = function(root) {
    let num = []
    var fun = (root) => {
        if (root) {
            num.push(root.val)
            fun(root.left)
            fun(root.right)
        }
    }
    fun(root)
    return num
};

// 思路：迭代的方式也可以，新建一个栈，循环这个栈，只要有节点就把节点取出来，把值push到数组
// 然后把右节点左节点依次入栈，

var preorderTraversal = function(root) {   
    if(!root) return []
    let num=[]
    let stack=[]
    stack.push(root)
    while(stack.length){
        let o = stack.pop()
        num.push(o.val)
        if(o.right) stack.push(o.right)
        if(o.left) stack.push(o.left)
    }
    return num
};