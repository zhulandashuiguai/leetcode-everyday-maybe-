/**
 * @param {string} s
 * @return {string[][]}
题目：给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
回文串 是正着读和反着读都一样的字符串。
示例 1：
输入：s = "aab"
输出：[["a","a","b"],["aa","b"]]
 */
//  思路：回溯法
function ishuiwen(s) {
    if (s == s.split('').reverse().join('')) {
        return true
    } else {
        return false
    }
}
// [startIndex,i]就是切割的子串
var partition = function(s) {
    let tem = []
    let res = []

    function backTracking(s, startIndex) {
        // 终止条件
        if (startIndex >= s.length) {
            // 这里要拷贝字符串数据
            res.push(JSON.parse(JSON.stringify(tem)))
            return
        }
        for (let i = startIndex; i < s.length; i++) {
            let char = s.slice(startIndex, i + 1)
            if (ishuiwen(char)) {
                tem.push(char)
            } else {
                continue
            }
            backTracking(s, i + 1)
            tem.pop()
        }
    }
    backTracking(s, 0)
    return res
};