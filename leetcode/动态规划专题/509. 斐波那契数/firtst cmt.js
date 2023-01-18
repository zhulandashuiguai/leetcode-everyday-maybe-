/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    dp = [0, 1]
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};

// 空间优化
var fib = function(n) {
    if (n < 2) {
        return n;
    }
    let p = 0,
        q = 0,
        r = 1;
    for (let i = 2; i <= n; i++) {
        p = q;
        q = r;
        r = p + q;
    }
    return r;
};