/**
 * @param {number} n
 * @return {number}
题目：假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
        每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

具体思路：上当前台阶的方法，就是上前两个台阶的方法的总和，递归会爆栈，所以手动循环加和即可。
 */
var climbStairs = function(n) {
    if (n == 1 || n == 0 || n == 2) return n
    dp = [0, 1, 2, 3];
    //手动计算出每个楼梯数的方法数，存到数组中
    for (let i = 4; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
}


//滚动数组的方法：因为每次循环只用到了两个数据，所以用大数组来存放数据显得没有必要。空间复杂度为o(n)
//当前层的方法数等于前两层方法的和，只需要记录前两层的数据即可
var climbStairs = function(n) {
    let first = 0,
        sec = 1
        // i表示楼梯的阶数，third表示当前阶数的方法。
    for (let i = 1; i <= n; i++) {
        let third = first + sec
        first = sec
        sec = third
    }
    return sec
}