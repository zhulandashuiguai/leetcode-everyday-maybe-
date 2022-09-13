/**
 * @param {number[]} nums
 * @return {boolean}
题目：
给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
数组中的每个元素代表你在该位置可以跳跃的最大长度。
判断你是否能够到达最后一个下标。
解题思路：
定义数组记录当前能到达的最远的数组索引，如果当前索引大于最大能到达的索引就返回false，否则就是true
示例 1：
输入：nums = [2,3,1,1,4]
输出：true
解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
 */
var canJump = function(nums) {
    let len = nums.length
    let tem = [0]
    for (let i = 0; i < len; i++) {
        if (i > Math.max(...tem)) return false
        tem[i] = i + nums[i]
    }
    return true
};

// 对上述进行优化：可以不用数组保存最大索引，只需要一个变量记录最大变量即可
var canJump = function(nums) {
    let len = nums.length
    let k = 0 //保存能跳到的最大索引
    for (let i = 0; i < len; i++) {
        if (i > k) return false;
        k = Math.max(k, i + nums[i]);
    }
    return true
};

//另一种解法
// 如果不存在为 0 的数，那么肯定能到达最后一个位置
// 除最后一位外，如果 i 位置为 0，那么向前查找是否存在 j 位置使得 j + nums[j] > i
// 最后一位是否为 0 不影响结果，所以不用判断
var canJump = function(nums) {
    let len = nums.length;
    let pos = undefined;
    for (let i = len - 2; i >= 0; i--) {
        if (nums[i] === 0 && pos === undefined)
            pos = i;
        if (pos !== undefined && i + nums[i] > pos)
            pos = undefined
    }
    return pos === undefined
};