/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
题目：g代表孩子的胃口，s代表饼干，求满足最多孩子的个数
思路：利用双指针，一个指向饼干，一个指向孩子，如果满足大于胃口就都++，不满足则饼干++
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    let num = 0
    let r1 = 0,
        r2 = 0
    while (r1 < s.length && r2 < g.length) {
        if (s[r1] >= g[r2]) {
            num++
            r2++
            r1++
        } else {
            r1++
        }
    }
    return num
};