/**
 * @param {number[]} nums
 * @return {number[][]}
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 */
// 回溯

 var subsets = function(nums) {
    let tem = []
    let res = []
    function backtrack(nums,startIndex){
        res.push([...tem])  //每次都push就行
        for(let i=startIndex;i<nums.length;i++){
            tem.push(nums[i])
            backtrack(nums,i+1)
            tem.pop()
        }
    }
    backtrack(nums,0)
    return res
};