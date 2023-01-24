/**
 * @param {number} n
 * @return {number}
 * 给定一个正整数 n ，将其拆分为 k 个 正整数 的和（ k >= 2 ），并使这些整数的乘积最大化。
返回 你可以获得的最大乘积 。
 输入: n = 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1。
 */
// 思路：
 var integerBreak = function(n) {
    let dp=[0,0,1,2] //dp[i]表示i的最大的因数积 dp[1]=0,dp[2]=1,dp[3]=2
    for(let i=4;i<=n;i++){ //从4开始遍历填充数组
        for(let j=1;j<=Math.trunc(i/2);j++){ // 每个数的因数只需要遍历到一半，避免重复，对每个因数进行试探运算
            //每次都更新dp[i]的最大值
            dp[i] = Math.max(j*(i-j),j*dp[i-j],dp[i]||0)
        }
    }
    return dp[n]
};