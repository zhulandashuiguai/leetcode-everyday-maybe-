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
迭代：可以参照前序遍历根左右的做法：调整push顺序即可
 */
var postorderTraversal = function(root) {
    if(!root) return []
    let arr=[]
    let stack=[root]
    while(stack.length){
       let tem = stack.pop()
       //从数组头部插入
       arr.unshift(tem.val)
       //先push左节点
       if(tem.left) stack.push(tem.left)
       if(tem.right) stack.push(tem.right)
    }
    return arr
};  