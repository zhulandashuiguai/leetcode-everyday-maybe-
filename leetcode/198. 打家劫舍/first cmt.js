/**
 * @param {number[]} nums
 * @return {number}
示例 1：
只能偷不相邻的房间，求能偷的最大值
输入：[1,2,3,1]
输出：4
解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。
S数组表示前n家能偷的最大数量
// 这题主要是要找到规律，找到通项公式
每间房都有两种选择，偷或者不偷，偷，就是当前值加上 上上次之前的最大值，不偷就是上次之前的最大值
 */
var rob = function(nums) {
    let s = [0, nums[0]]
    for (var i = 2; i <= nums.length; i++) {
        s[i] = Math.max(nums[i - 1] + s[i - 2], s[i - 1])
    }
    return s[i - 1]
};

//同样可以用动态数组来优化存储空间
//优化
/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    if(nums.length<=1) return nums[0]
    let dp=[];
    dp[0]=nums[0];
    dp[1] = Math.max(nums[0],nums[1]);
    for(var i = 2;i<nums.length;i++){
        dp[i] = Math.max(dp[i-2]+nums[i],dp[i-1]);
    }    
    return dp[i-1]
};