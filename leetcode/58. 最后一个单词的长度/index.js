/**
 * @param {string} s
 * @return {number}
题目：给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。
单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。
示例 2：
输入：s = "   fly me   to   the moon  "
输出：4
解释：最后一个单词是“moon”，长度为4。
输入：s='a '
out:1
 */
//  思路1：直接split(' ')分裂成数组，然后set去重去掉重复的空格，然后再删掉最后的那个空格
// set.delete('') 直接计算最后一个字符长度即可
var lengthOfLastWord = function(s) {
    s = s.split(' ')
    s = new Set(s)
    s.delete('')
    s = Array.from(s)
    return s[s.length - 1].length
};

// 方法2:直接转化成数组，然后过滤掉空字符串
var lengthOfLastWord = function(s) {
    var arr = s.split(' ').filter((e) => e !== '') //转成成数组后过滤''
    return arr[arr.length - 1].length

};