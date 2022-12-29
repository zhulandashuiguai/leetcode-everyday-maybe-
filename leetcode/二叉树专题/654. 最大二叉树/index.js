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
 * 给定一个不重复的整数数组 nums 。 最大二叉树 可以用下面的算法从 nums 递归地构建:
创建一个根节点，其值为 nums 中的最大值。
递归地在最大值 左边 的 子数组前缀上 构建左子树。
递归地在最大值 右边 的 子数组后缀上 构建右子树。
返回 nums 构建的 最大二叉树 。
 */
//递归法，类似上一题，中序和后续生产二叉树一样的思路
 var constructMaximumBinaryTree = function(nums) {
    if(nums.length==1) return new TreeNode(nums[0])// 剪枝，终止条件，如果数组只有一个元素，直接返回这个节点
    let max = Math.max(...nums) //最大值
    let root = new TreeNode(max) //生成节点
    let index = nums.indexOf(max)  //分割数组
    let leftNums = nums.slice(0,index) //左
    let rightNums = nums.slice(index+1)   //右
    root.left = leftNums.length==0 ?null: constructMaximumBinaryTree(leftNums) //递归
    root.right= rightNums.length==0?null: constructMaximumBinaryTree(rightNums)
    return root
};
// 优化，上面的代码有个不好的地方就是要频繁的创建新的数组，不断的开辟新的内存空间，所以可以用操作指针的方法，来节省时间开销
var constructMaximumBinaryTree = function (nums) {
    const BuildTree = (arr, left, right) => { //自定义节点生成函数
        if (left > right)
            return null;
        let maxValue = -1;
        let maxIndex = -1;
        for (let i = left; i <= right; ++i) {
            if (arr[i] > maxValue) {
                maxValue = arr[i];
                maxIndex = i;
            }
        }
        let root = new TreeNode(maxValue);
        root.left = BuildTree(arr, left, maxIndex - 1);
        root.right = BuildTree(arr, maxIndex + 1, right);
        return root;
    }
    let root = BuildTree(nums, 0, nums.length - 1);
    return root;
};