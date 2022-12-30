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
 *
给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。
有效 二叉搜索树定义如下：
节点的左子树只包含 小于 当前节点的数。
节点的右子树只包含 大于 当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。
 */
// 思路：首先：二叉搜索树中序遍历 结果是一个从小到大的有序数组
// 所以可以先中序遍历手机元素，然后判断数组是否有序即可
 var isValidBST = function(root) {
    let arr = []
    function inorder(root){  //中序遍历收集元素
        if(!root) return
        inorder(root.left)
        arr.push(root.val)
        inorder(root.right)
    }
    inorder(root)
    // 判断数组是否有序
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>=arr[i+1]){
            return false
        }
    }
    return true
};
// 中序迭代法
var isValidBST = function(root) {
    let stack = [];
    let inorder = -Infinity;
    while (stack.length || root !== null) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        // 如果中序遍历得到的节点的值小于等于前一个 inorder，说明不是二叉搜索树
        if (root.val <= inorder) {
            return false;
        }
        inorder = root.val;
        root = root.right;
    }
    return true;
};

// 递归法
var isValidBST = function(root) {
    //注意：leetcode中 不能把变量定义到函数外部否则会报一些莫名其妙的错误
    let pre =null
    function isValid(root){
        if(!root) return true
        let left = isValid(root.left) //中序遍历+双指针判断是否有序
        if(pre&&pre.val>=root.val) return false  //pre保存的是上一个左节点
        pre = root  //移动指针
        let right = isValid(root.right)
        return left&&right
    }
    return isValid(root)
};