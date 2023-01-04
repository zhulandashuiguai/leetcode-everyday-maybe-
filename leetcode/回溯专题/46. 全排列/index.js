/**    
 * @param {number[]} nums
 * @return {number[][]}
 题目：给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 示例 1：
输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */
//  思路：回溯法
var permute = function(nums) {
    let res = []
    let tem = []

    function backTracking(nums) {
        if (tem.length == nums.length) {
            res.push([...tem])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (!tem.includes(nums[i])) {
                tem.push(nums[i])
            } else {
                continue    
            }

            backTracking(nums)
            tem.pop()
        }
    }
    backTracking(nums, tem)
    return res
};