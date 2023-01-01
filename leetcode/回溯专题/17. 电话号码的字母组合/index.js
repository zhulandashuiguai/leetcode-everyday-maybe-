/**
 * @param {string} digits
 * @return {string[]}
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

 */

// 回溯
 var letterCombinations = function(digits) {
    let res = [] //结果集
    let tem = ''    //收集的字符
    if(digits.length==0) return []
    let obj = {
        '2':['a','b','c'],
        '3':['d','e','f'],
        '4':['g','h','i'],
        '5':['j','k','l'],
        '6':['m','n','o'],
        '7':['p','q','r','s'],
        '8':['t','u','v'],
        '9':['w','x','y','z']
    } 
    // 回溯，index用来标记要遍历的字符数组
    function backtrack(digits,index){
        if(tem.length==digits.length){  //终止条件：tem的长度和digits的长度一样的收集
            return res.push(tem)
        }
        let digitsNum = digits[index]    //
        let letter = obj[digitsNum]   //找到index对应的字符数组
        for(let i=0;i<letter.length;i++){  //遍历字符
            tem+=letter[i]         //组合 
            backtrack(digits,index+1)  // 开启另一个遍历  从index+1的位置开始
            tem=tem.slice(0,-1)  //回溯
        }
    }
    backtrack(digits,0)
    return res
};