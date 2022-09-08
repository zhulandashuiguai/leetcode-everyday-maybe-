/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    //（【{()（）}】）  (}{)
    if (s.length % 2 == 1) return false
    if (s[0] == ']' || s[0] == '}' || s[0] == ']') return false
    const stack = []
    for (let item of s) {
        if (item == '(' || item == '[' || item == '{') {
            stack.push(item)
        } else {
            if (item == '}' && stack[stack.length - 1] == '{' ||
                item == ']' && stack[stack.length - 1] == '[' ||
                item == ')' && stack[stack.length - 1] == '(') {
                stack.pop()
            } else {
                return false
            }
        }
    }
    if (stack.length == 0) return true
    else return false
};