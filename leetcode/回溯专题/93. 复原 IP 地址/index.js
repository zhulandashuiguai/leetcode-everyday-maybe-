/**
 * @param {string} s
 * @return {string[]}
 * 
 * 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。
例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。

 */
// 暴力回溯无优化，我也不知道怎么做对的

var restoreIpAddresses = function(s) {
    function isvalid(s) {
        if((s-0)>=0&&(s-0)<=255){
            if(s=='0') return true
            if(s.startsWith('0')) return false
            return true
        }
        return false
    }
    let res = []
    let temArr = []
    function backtrack(s,startIndex,pointNum=3){
        let str =  temArr.join('')
        if(pointNum==0&&str.length==s.length+3&&!res.includes(str)){
            return res.push(str)
        }

        for(let i=startIndex;i<s.length;i++){
            if(i-startIndex>3) return
            let char = s.slice(startIndex,i+1)
            if(pointNum==0) char = s.slice(startIndex)
            if(isvalid(char)){
               if(!temArr.length) {
                   temArr.push(char)
                   pointNum--
               }else{
                   temArr.push('.')
                   temArr.push(char)
                    if(pointNum) pointNum--
               }
            }else{
                continue
            }
            backtrack(s,i+1,pointNum)
            pointNum++
            temArr.pop()
            if(temArr.at(-1)=='.') temArr.pop()
        }
    }
    backtrack(s,0)
    return res
}
// 剪枝优化（自己写的）
var restoreIpAddresses = function(s) {
    function isvalid(s) {
        if((s-0)>=0&&(s-0)<=255){
            if(s=='0') return true
            if(s.startsWith('0')) return false
            return true
        }
        return false
    }
    let res = []
    let temArr = []
    function backtrack(s,startIndex,pointNum=4){
        let str =  temArr.join('')
        if(pointNum==0&&str.length==s.length+3){
            return res.push(str)
        }

        for(let i=startIndex;i<s.length;i++){
            if(i-startIndex>3||pointNum<0) return //剪枝第一次pointnum==0继续，小于0就直接return
            let char = s.slice(startIndex,i+1)
            if(pointNum==0) char = s.slice(startIndex)
            if(isvalid(char)){
               if(!temArr.length) {
                   temArr.push(char)
                   pointNum--
               }else{
                   temArr.push('.')
                   temArr.push(char)
                 pointNum--
               }
            }else{
                continue
            }
            backtrack(s,i+1,pointNum)
            pointNum++
            temArr.pop()
            if(temArr.at(-1)=='.') temArr.pop()
        }
    }
    backtrack(s,0)
    return res
}

// 标准答案
var restoreIpAddresses = function(s) {
    const res = [], path = [];
    backtracking(0)
    return res;
    function backtracking(i) {
        const len = path.length;
        if(len > 4) return;
        if(len === 4 && i === s.length) {
            res.push(path.join("."));
            return;
        }
        for(let j = i; j < s.length; j++) {
            const str = s.slice(i, j + 1);
            if(str.length > 3 || +str > 255) break;
            if(str.length > 1 && str[0] === "0") break;
            path.push(str);
            backtracking(j + 1);
            path.pop()
        }
    }
};