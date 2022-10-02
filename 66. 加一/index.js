/**
 * @param {number[]} digits
 * @return {number[]}
题目：给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
你可以假设除了整数 0 之外，这个整数不会以零开头。
示例 1：
输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。
 */

//  思路1：一开始先给数组最后一位加上1，然后从后往前遍历这个数组，如果这个数是10，就把这个数变为0，前一位加1，如果这个数的下标是0，就在数组最前面加一个数1
var plusOne = function(digits) {
    let len = digits.length
    digits[len - 1] = digits[len - 1] + 1
    for (let i = len - 1; i >= 0; i--) {
        if (digits[i] == 10) {
            digits[i] = 0
            if (i != 0) {
                digits[i - 1] = digits[i - 1] + 1
            } else {
                digits.unshift(1)
            }
        }
    }
    return digits
};