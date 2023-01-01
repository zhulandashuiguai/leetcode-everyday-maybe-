/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 题目：给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。
  candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。 

 */
// 思路：依旧是回溯算法，不过这次略微改动，回溯还加了数组和，
// 记住，如果是组合和排序先后没有要求，那么每次循环都要从这个元素之后的元素开始搜索
var combinationSum = function(candidates, target) {
    let res = []
    let tem = []
    let sum = 0

    function backTracking(candidates, target, sum, startIndex) {
        if (sum > target) return
        if (sum == target) {
            res.push([...tem])
            return
        }
        for (let i = startIndex; i < candidates.length; i++) {
            tem.push(candidates[i])
            sum += candidates[i]
            backTracking(candidates, target, sum, i)
            sum -= candidates[i]
            tem.pop()
        }
    }
    backTracking(candidates, target, sum, 0)
    return res
};

// 剪枝,先对数组进行排序，再加和的时候，如果当前已经大于target那么之后的就都不用操作了

var combinationSum = function(candidates, target) {
    let res = []
    let tem = []
    let sum = 0
    candidates.sort((a, b) => a - b) //对数组进行排序

    function backTracking(candidates, target, sum, startIndex) {
        if (sum > target) return
        if (sum == target) {
            res.push([...tem])
            return
        }
        for (let i = startIndex; i < candidates.length; i++) {
            if (sum > target) return //剪枝操作优化，只要sum大于target就直接不用操作了
            tem.push(candidates[i])
            sum += candidates[i]
            backTracking(candidates, target, sum, i)
            sum -= candidates[i]
            tem.pop()
        }
    }
    backTracking(candidates, target, sum, 0)
    return res
};