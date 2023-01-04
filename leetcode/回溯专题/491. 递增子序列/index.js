/**
 * @param {number[]} nums
 * @return {number[][]}
 * 给你一个整数数组 nums ，找出并返回所有该数组中不同的递增子序列，递增子序列中 至少有两个元素 。你可以按 任意顺序 返回答案。
数组中可能含有重复元素，如出现两个整数相等，也可以视作递增序列的一种特殊情况。

输入：nums = [4,6,7,7]
输出：[[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]

 */
// 回溯，同层不能使用已出现过的元素，还是要去重，但是和前面的去重方式不一样
 var findSubsequences = function(nums) {
    let res = []
    let tem = []
    function backtrack(nums,startIndex){
        if(tem.length>=2) res.push([...tem]) 
        //记录用过的元素
        let uset =new Set()  //这里去重是在每一层，加一个set，每次遍历判断是否出现过这个元素
        for(let i = startIndex;i<nums.length;i++){
            if(i>startIndex&&uset.has(nums[i])) continue  //如果用过就continue
            if(nums[i]>=(tem.at(-1) ?? -Infinity)){   //空值合并运算符（??）当左侧的操作数为 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数。
                uset.add(nums[i])  //记录每层使用过的元素
                tem.push(nums[i])
            }else{
                continue
            }
            backtrack(nums,i+1)
            tem.pop()
        }
    }
    backtrack(nums,0)
    return res
};