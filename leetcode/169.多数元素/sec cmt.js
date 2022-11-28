/**
 * @param {number[]} nums
 * @return {number}
题目：给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
你可以假设数组是非空的，并且给定的数组总是存在多数元素。
示例 1：
输入：nums = [3,2,3]
输出：3
解题思路：排序法，排序后在中间的必然是多数数
 */
var majorityElement = function(nums) {
    nums.sort()
    return nums[Math.floor(nums.length / 2)]
};