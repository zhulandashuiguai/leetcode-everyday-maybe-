/**
 * @param {string[]} tokens
 * @return {number}
 * 有效的算符包括 +、-、*、/ 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。
 * 输入：tokens = ["2","1","+","3","*"]
输出：9
解释：该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9
 */
    // 思路：遇到数字就push到栈里，遇到操作符就取出两个数字进行对应的运算再push进栈里
 var evalRPN = function(tokens) {
    let stack = [];
    tokens.forEach(ch=>{
        if(ch == '+' || ch == '-' ||ch == '*' ||ch == '/'){
            let num1 = stack.pop()
            let num2 = stack.pop()
            if(ch=='+') stack.push(num1+num2)
            if(ch=='-') stack.push(num2-num1)
            if(ch=='*') stack.push(num1*num2)
            // 注意点：除法保留整数不能用Math.floor()应该用parseInt()
            if(ch=='/') stack.push(parseInt(num2/num1))
        }else{
            stack.push(Number(ch))
        }
    })
    return stack.pop()
};