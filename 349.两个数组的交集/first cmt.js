/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 题目：
给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
示例 1：
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
 示例 2：
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
解释：[4,9] 也是可通过的

解题思路：直接foreach遍历一个数组看另一个数组里有没有这个数组里的数，有就push，最后Set去重
 */
var intersection = function(nums1, nums2) {
    let arr = []
    nums1.forEach((num1)=>{
        if(nums2.includes(num1)){
            arr.push(num1)
        }
    })
    return Array.from(new Set(arr))
};