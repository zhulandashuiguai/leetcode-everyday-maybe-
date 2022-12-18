/**
 * 
  问题：给一个括号字符串"{([])}"，判断是否有效，必须匹配

 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    s = s.split('')
    if (s.length % 2 !== 0) return false
    if (s[0] == ')' || s[0] == '}' || s[0] == ']') return false
    let pairs = [] //栈
    for (let i = 0; i < s.length; i++) {
        // 当为左括号时push
        if (s[i] == "(" || s[i] == '[' || s[i] == '{') {
            pairs.push(s[i])
            // 当为右括号并且 pairs的最后一个为对应的左括号时，pop
        } else if (s[i] == ')' && pairs[pairs.length - 1] == '(' || s[i] == ']' && pairs[pairs.length - 1] == '[' || s[i] == '}' && pairs[pairs.length - 1] == '{') {
            pairs.pop()
        } else {
            // 当为右括号，但是没有对应的左括号时
            pairs.push(s[i])
        }
    }
    if (pairs.length > 0) return false
    return true
};

// 简化版
var isValid = function(s) {
    // 用map存储对应的括号
    let map ={
        '{':'}',
        '[':']',
        '(':')'
    }
    let stack = []; //栈

    for(let x of s){ //遍历字符s
        if(x in map){ //如果是左括号
            stack.push(x) //push
        }else if(map[stack.pop()]!==x){ //如果是右括号，看一下stack最后一个左括号的对象值是不是当前右括号
            return false
        }
    }
    return !stack.length
};