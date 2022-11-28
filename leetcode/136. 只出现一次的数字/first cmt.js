/**
 * @param {number[]} nums
 * @return {number}
 题目：
 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
示例 1:
输入: [2,2,1]
输出: 1
解题思路：利用异或的性质，a是任何数  0^a = a  a^a=0,
异或有交换律和结合律 即： a^b^c = a^c^b
 所以此题只需要循环与0异或最后，相同的数会被消为0，剩下的即为那个单个数
 */
var singleNumber = function(nums) {
    let ans = 0
    nums.forEach(item => {
        ans = ans ^ item
    })
    return ans
};