/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 * 找出所有相加之和为 n 的 k 个数的组合，且满足下列条件：
只使用数字1到9
每个数字 最多使用一次 
返回 所有可能的有效组合的列表 。该列表不能包含相同的组合两次，组合可以以任何顺序返回。
 */
// 思路：利用上一题的解法，只需要改变加入res的条件即可
 var combinationSum3 = function(k, n) {
    let res = []
    let tem = []
    function backtrack(startIndex){
        if(tem.length==k&&eval(tem.join('+'))==n){ //当数组长度和和的值等于n才加入结果集
            return res.push([...tem])
        }
        
        for(let i=startIndex;i<=9;i++){
            tem.push(i)
            backtrack(i+1)
            tem.pop()
        }
    }
    backtrack(1)
    return res
};

// 剪枝var
 combinationSum3 = function(k, n) {
    let res = []
    let tem = []
    let sum = 0

    function backtrack(startIndex){
        if(sum>n) return 
        if(tem.length==k&&sum==n){
            return res.push([...tem])
        }
        //对i进行剪枝，i最大只能到9-(k-path.length)+1
        for(let i=startIndex;i<=9-(k-tem.length)+1;i++){
            if(sum>n) return//剪枝
            tem.push(i)
            sum+=i
            backtrack(i+1)
            tem.pop()
            sum-=i
        }
    }
    backtrack(1)
    return res
};