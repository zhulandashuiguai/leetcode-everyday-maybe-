/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    s = s.trim().split('').reverse()
    let res = ''
    for(let i=0 ;i<s.length;i++) {
        if(s[i]!==''){
            res = res + s[i]+' '
        }
    }
    return res.trim()
};
console.log(reverseWords("a good   example"));