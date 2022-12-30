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
 * 给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。
差值是一个正数，其数值等于两值之差的绝对值。
 */
// 方法一：暴力，先把所有节点搜集到数组中，然后排序，再遍历数组找出最小的差值
 var getMinimumDifference = function(root) {
    let arr = [root]
    let nums = []
    while(arr.length){  //遍历收集节点值
        let tem = arr.shift()
        nums.push(tem.val)
        tem.left&&arr.push(tem.left)
        tem.right&&arr.push(tem.right)
    }
    nums.sort((a,b)=>a-b) //排序
    let min = Number.MAX_VALUE
    for(let i=0;i<nums.length-1;i++){ //找最小差值
        let tem = nums[i+1]-nums[i]
        if(tem<=min) min=tem 
    }
    return min
};
//暴力法的优化，使用中序遍历收集节点自动就是有序的
 var getMinimumDifference = function(root) {
    let arr = [];
    const buildArr = (root) => {
        if (root) {
            buildArr(root.left);
            arr.push(root.val);
            buildArr(root.right);
        }
    }
    buildArr(root);
    let diff = arr[arr.length - 1];
    for (let i = 1; i < arr.length; ++i) {
        if (diff > arr[i] - arr[i - 1])
            diff = arr[i] - arr[i - 1];
    }
    return diff;
};

// 利用二叉搜索树的特性，一提到二叉搜索树，就要想到中序遍历，双指针法
var getMinimumDifference = function(root) {
    let min = Number.MAX_VALUE
    let pre = null  
    function inorder(root){
        if(!root) return 
        inorder(root.left)  //左
        if(pre){       
            let tem = root.val-pre.val   //中
            if(tem<=min) min = tem
        }
        pre = root
        inorder(root.right)  //右
    }
    inorder(root)
    return min
};
//中序遍历迭代法
 var getMinimumDifference = function(root) {
    let stack = []
    let cur = root
    let res = Infinity
    let pre = null
    while(cur || stack.length) {
        while(cur) {
            stack.push(cur)
            cur = cur.left
        } 
            cur = stack.pop()
            if(pre) res = Math.min(res, cur.val - pre.val)
            pre = cur
            cur = cur.right
    }
    return res
}