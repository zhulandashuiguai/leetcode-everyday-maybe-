/**
 * @param {number[]} nums
 * @return {boolean}
 * 给你一个 只包含正整数 的 非空 数组 nums 。
 * 请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
 * 输入：nums = [1,5,11,5]
输出：true
解释：数组可以分割成 [1, 5, 5] 和 [11] 。
输入：nums = [1,2,3,5]
输出：false
解释：数组不能分割成两个元素和相等的子集。
 */
// 解题思路：这个可以用背包问题的方法来解答，把问题看成target = 容量/2 的背包，是否可以被价值和重量相同的物品正好装满
 var canPartition = function(nums) {
    // const sum = (nums.reduce((p, v) => p + v));
    let sum = eval(nums.join('+'))*0.5;  // 求和/2，
    if(Math.trunc(sum)!=sum) return false //如果target不是整数就返回false
    let dp = Array(sum+1).fill(0)  //初始化dp数组
    for(let i =0;i<nums.length;i++){  //遍历物品
        for(let j = sum;j>=nums[i];j--){  //遍历背包，倒序
            dp[j] = Math.max(dp[j],dp[j-nums[i]]+nums[i])  //递推公式
        }
    }
    if(dp[sum]==sum) {
        return true
    }else{
        return false
    }
};