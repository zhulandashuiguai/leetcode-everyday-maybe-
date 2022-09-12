/**
 * @param {number[]} nums
 * @return {number}
题目：给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
你可以假设数组是非空的，并且给定的数组总是存在多数元素。
示例 1：
输入：nums = [3,2,3]
输出：3
解题思路：直接循环这个数组，利用Map，记录每个数字的出现次数，并在每次循环时，判断当前数字的出现次数是否大于n/2即可
 */
var majorityElement = function(nums) {
    if (nums.length == 1) return nums[0]
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
            if (map.get(nums[i]) > Math.floor(nums.length / 2)) {
                return nums[i]
            }
        } else {
            map.set(nums[i], 1)
        }
    }
};

// 优化
var majorityElement = function(nums) {
    let half = nums.length / 2;
    let obj = {};
    for (let num of nums) {
        obj[num] = (obj[num] || 0) + 1;
        if (obj[num] > half) return num;
    }
};