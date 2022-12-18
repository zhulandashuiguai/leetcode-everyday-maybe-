/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。如果 needle 不是 haystack 的一部分，则返回  -1 。
输入：haystack = "sadbutsad", needle = "sad"
输出：0
解释："sad" 在下标 0 和 6 处匹配。
第一个匹配项的下标是 0 ，所以返回 0 。

 */
// 方法一：思路：直接用needle长度的双指针作为滑动窗口去套，如果是就返回left，如果不是就往前滑动窗口
 var strStr = function(haystack, needle) {
    let hLen = haystack.length;
    let nLen = needle.length;
    if(nLen>hLen) return -1
     let left = 0,right = nLen-1;
     while(right<=hLen){
        if( haystack.slice(left,right+1) ==needle){
            return left
        }else{
            left++
            right++
        }
     }
     return -1
 };

//  方法二
return haystack.indexOf(needle) //也可以