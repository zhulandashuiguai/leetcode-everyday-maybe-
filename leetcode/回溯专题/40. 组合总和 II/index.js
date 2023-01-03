/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
candidates 中的每个数字在每个组合中只能使用 一次 。
注意：解集不能包含重复的组合。 
 */

// 和上一个组合问题一样，多了一步去重的操作
//去重的时候，注意同一层的相同元素要去重跳过，而不同层的元素则可以重复使用
 var combinationSum2 = function(candidates, target) {
    let res = []
    let sum = 0
    let tem = []
    candidates = candidates.sort((a,b)=>a-b) //排序
    function backtrack(candidates,target,sum,startIndex){
        if(sum>target) return
        if(sum==target) return res.push(tem.slice())

        for(let i=startIndex;i<candidates.length;i++){
            // 去重核心逻辑，当i>起始index的时候就表明同一层遍历到下一个元素了，此时就开始去重
            if(i>startIndex&&candidates[i]==candidates[i-1]) continue
            tem.push(candidates[i])
            sum += candidates[i]
            backtrack(candidates,target,sum,i+1)
            tem.pop()
            sum-=candidates[i]
        }
    }
    backtrack(candidates,target,sum,0)
    return res 
};