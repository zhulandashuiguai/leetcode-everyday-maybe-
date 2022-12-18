/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 * 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。

 输入: s = "lrloseumgh", k = 6
输出: "umghlrlose"

 */
 var reverseLeftWords = function(s, n) {
    return s.slice(n)+ s.slice(0,n)
};

//先做整体反转，再做两次局部的反转
//gfedcba   cdefgba  cdefgab
 var reverseLeftWords = function(s, n) {
    /** Utils */
  function reverseWords(strArr, start, end) {
      let temp;
      while (start < end) {
          temp = strArr[start];
          strArr[start] = strArr[end];
          strArr[end] = temp;
          start++;
          end--;
      }
  }
  /** Main code */
  let strArr = s.split(''); //改变不了字符串只能改数组
  let length = strArr.length; 
  reverseWords(strArr, 0, length - 1); //先整体反转
  reverseWords(strArr, 0, length - n - 1); //再反转
  reverseWords(strArr, length - n, length - 1); // 再反转
  return strArr.join('');
};