/**
 * @param {number} n
 * @return {boolean}
题目：给你一个整数 n，请你判断该整数是否是 2 的幂次方。如果是，返回 true ；否则，返回 false 。
如果存在一个整数 x 使得 n == 2x ，则认为 n 是 2 的幂次方。
示例 1：
输入：n = 1
输出：true
解释：2**0 = 1
思路1： 直接暴力解法,循环乘2，在这个数大于n之前，看是否能等于n，能则true不能则false
 */
var isPowerOfTwo = function(n) {
    if (n < 1) return false
    if (n == 1) return true
    let p = 1;
    while (p <= n) {
        p = p * 2
        if (p == n) return true
        if (p > n) return false
    }
};

// 思路2： n ->2的整数幂，二进制都是1开头，后面是0，n-1则所有的位都与n相反，
// 比如：2->10 和 1->01
// 所以可以用与&的方式来辨别
//  */
var isPowerOfTwo = function(n) {
    return n > 0 && (n & n - 1) === 0
};