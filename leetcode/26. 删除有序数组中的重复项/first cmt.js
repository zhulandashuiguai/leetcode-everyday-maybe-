/**
 * @param {number[]} nums
 * @return {number}
题目：给你一个升序排列的数组nums, 原地删除重复出现的元素，使每个元素只出现一次，返回删除后数组的新长度。元素的相对顺序应该保持一致。
示例 1：
输入：nums = [1,1,2]
输出：2, nums = [1,2,_]
示例 2：
输入：nums = [0,0,1,1,1,2,2,3,3,4]
输出：5, nums = [0,1,2,3,4]

思路：双指针，快慢指针，慢指针slow初始指向0，快指针fast初始指向1,对比快慢指针的值， 如果相同，快指针往后移，如果不同，慢指针往后移，并把值改为快指针的值，快指针也往后移，一直while循环直到fast越界
 */
var removeDuplicates = function(nums) {
    let slow = 0
    let fast = 1
    while (fast < nums.length) {
        if (nums[slow] == nums[fast]) {
            fast++
        } else {
            slow++
            nums[slow] = nums[fast]
            fast++
        }
    }
    return slow + 1
};