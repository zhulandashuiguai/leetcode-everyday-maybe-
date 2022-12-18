/**
 * @param {string} s
 * @return {boolean}
 * 
 * 给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。
 *  输入: s = "abab"
输出: true
解释: 可由子串 "ab" 重复两次构成。
输入: s = "aba"
输出: false

 */
 var repeatedSubstringPattern = function(s) {
    // 思路：如果是重复子串，那么将这个字符s+s拼接，去掉头和尾，依然能包含s即可
    let t = s+s
    t = t.slice(1,t.length-1)
    return t.indexOf(s)==-1? false:true
};