/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 * 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。
高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的
 */
// 思路：递归
 var sortedArrayToBST = function(nums) {
    if(!nums.length) return null //数组没数了就返回null
    let midIndex = Math.trunc(nums.length/2)  //中间索引
    let node = new TreeNode(nums[midIndex])  //用中间值创建节点
    node.left = sortedArrayToBST(nums.slice(0,midIndex))  //左节点
    node.right = sortedArrayToBST(nums.slice(midIndex+1)) //右节点
    return node 
};
//指针
var sortedArrayToBST = function (nums) {
    const buildTree = (Arr, left, right) => {
        if (left > right)
            return null;

        let mid = Math.floor(left + (right - left) / 2);

        let root = new TreeNode(Arr[mid]);
        root.left = buildTree(Arr, left, mid - 1);
        root.right = buildTree(Arr, mid + 1, right);
        return root;
    }
    return buildTree(nums, 0, nums.length - 1);
};