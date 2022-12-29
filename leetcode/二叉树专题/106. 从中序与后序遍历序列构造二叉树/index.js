/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 * 给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。
 */
// 
 var buildTree = function(inorder, postorder) {
    if(postorder.length==0) return null  //空节点
    let rootVal = postorder.at(-1)  //后续数组的最后一个元素为根元素的值
    let node = new TreeNode(rootVal) //创建根节点
    if(postorder.length==1) return node // 递归终止条件：后续数组只有一个值时，返回该根节点
    //以根节点来切割数组
    let index = inorder.indexOf(rootVal)
    let leftInorder = inorder.slice(0,index)  //左中序数组
    let rightInorder = inorder.slice(index+1)  //右中序数组
    let leftPostorder = postorder.slice(0,leftInorder.length) //左后续数组
    let rightPostorder = postorder.slice(leftInorder.length,-1) //右后续数组
    node.left = buildTree(leftInorder,leftPostorder) // 一个中序和一个后续数组能确定一个根节点
    node.right = buildTree(rightInorder,rightPostorder)
    return node
};