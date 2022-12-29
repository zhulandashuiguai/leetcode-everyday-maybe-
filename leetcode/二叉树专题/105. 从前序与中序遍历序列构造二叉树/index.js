/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// 做法同106中序和后续的步骤一样
 var buildTree = function(preorder, inorder) {
    if(preorder.length==0) return null  //空姐点
    let rootVal =  preorder[0]  //前序数组的第一个元素为根元素的值
    let node = new TreeNode(rootVal) //创建根节点
    if(preorder.length==1) return node // 递归终止条件：后续数组只有一个值时，返回该根节点
    //切割数组
    let index = inorder.indexOf(rootVal)
    let leftInorder = inorder.slice(0,index)
    let rightInorder = inorder.slice(index+1)
    let leftPreorder = preorder.slice(1,leftInorder.length+1)
    let rightPreorder = preorder.slice(leftInorder.length+1)
    node.left = buildTree(leftPreorder,leftInorder)
    node.right = buildTree(rightPreorder,rightInorder)
    return node
};