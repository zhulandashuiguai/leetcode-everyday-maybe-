/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    s = s.split('')
    if (s.length % 2 !== 0) return false
    if (s[0] == ')' || s[0] == '}' || s[0] == ']') return false
    let pairs = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(" || s[i] == '[' || s[i] == '{') {
            pairs.push(s[i])
        } else if (s[i] == ')' && pairs[pairs.length - 1] == '(' || s[i] == ']' && pairs[pairs.length - 1] == '[' || s[i] == '}' && pairs[pairs.length - 1] == '{') {
            pairs.pop()
        } else {
            pairs.push(s[i])
        }
    }
    if (pairs.length > 0) return false
    return true
};