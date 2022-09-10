/**
 * @param {string} s
 * @return {number}
 题目：给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 示例 1:
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

解题思路：参考：BV113411v7Ak
首先定义左右指针left，right指向起始位置，这里以for循环的i为右指针
定义一个set表来装子串
循环字符串，每次循环都判断，set表里面是否有重复的字符
如果有：先删除这个字符，再让左指针向右移，直到set里没有当前的这个字符为止。
没有之后再把当前字符添加进set里。
如果没有：就直接把这个字符放进set里，再判断最大长度。
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set()
    let letf =0;
    let maxLength=0;
    //i当右指针
    for(let i=0;i<s.length;i++){
        // 如果set里有这个字符
        if(set.has(s[i])){
            //删除左指针指向的字符，并向右移，直到set没有当前指向的字符为止。
            while(set.has(s[i])){
                set.delete(s[letf])
                letf++
            }
            //无重复之后再添加当前字符
            set.add(s[i])
        }else{
            // 如果没有就直接添加并计算长度
        set.add(s[i])
            if(set.size>maxLength){
                maxLength=set.size
            }
        }
    }
    return maxLength
};  