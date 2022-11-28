/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
题目：给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
请必须使用时间复杂度为 O(log n) 的算法。
示例 1:
输入: nums = [1,3,5,6], target = 5
输出: 2
输入: nums = [1,3,5,6], target = 2
输出: 1
 */
//  思路：还比较简单：直接用indexOf方法判断有则返回，没有就把这个值push进数组，然后sort排序，在返回index
var searchInsert = function(nums, target) {
    let index = nums.indexOf(target)
    if (index > 0) return index
    else {
        nums.push(target)
        nums.sort((a, b) => a - b)
        return nums.indexOf(target)
    }
};

// 二分法
var searchInsert = function(nums, target) {
    let left = 0,
        right = nums.length - 1
    while (left <= right) { //当左指针小于等于右指针
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] == target) {
            return mid
        } else if (nums[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    // 如果没找到这个数，左指针会大于右指针，这时候这个指针就是这个数应该在的位置 
    return left
};