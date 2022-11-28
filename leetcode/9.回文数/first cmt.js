/**
 * @param {number} x
 * @return {boolean}
 题目：给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
例如，121 是回文，而 123 不是。
思路： 数组的reverse()方法会原地更改数组，所以如果y=x.reverse()的话其实x和y还是相等的
所以直接让y=x.tostring().split('').reverse().join('')就不会原地操作到x数组
 */
var isPalindrome = function(x) {
    let y = x.toString().split('').reverse().join('')

    if (x == y) {
        return true
    } else {
        return false
    }
};