/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
题目：
给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
示例 1：
输入：nums = [3,2,2,3], val = 3
输出：2, nums = [2,2]
如果val不在nums数组里面，直接返回数组
s
思路：找到val的index下标，把这个值改为MAX_VALUE,循环此步骤，然后对数组原地排序，返回MAX_VALUE的下标即可
 */
var removeElement = function(nums, val) {
    // 边界条件
    if (!nums.includes(val)) return nums.length

    let idx = nums.indexOf(val)
    let max = Number.MAX_VALUE
    while (idx != -1) {
        nums[idx] = max
        idx = nums.indexOf(val)
    }
    nums.sort((a, b) => a - b)
    return nums.indexOf(max)
};

// 双指针思路
var removeElement = function(nums, val) {
    // 边界条件
    if (!nums.includes(val)) return nums.length
        // 双指针思路，定义两个指针，j指针用来赋值，i指针用来遍历，每次都比较i指向的值，如果i指向的值为val，什么也不做，如果i指的值不是val，让j指向的值赋为i指向的值
    let j = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            continue
        } else {
            nums[j] = nums[i]
            j++
        }
    }
    return j
};