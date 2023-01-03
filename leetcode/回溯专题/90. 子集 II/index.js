/**
 * @param {number[]} nums
 * @return {number[][]}
 * 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。
解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。
输入：nums = [1,2,2]
输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
 */
// 这题比子集1多了一步去重的操作，还是以前一样的同层去重，同一层去重
 var subsetsWithDup = function(nums) {
    let tem = []
   let res = []
   nums.sort((a,b)=>a-b)
   function backtrack(nums,startIndex){
       res.push([...tem])  //每次都push就行
       for(let i=startIndex;i<nums.length;i++){
           //同层去重逻辑
           if(i>startIndex&&nums[i]==nums[i-1]) continue
           tem.push(nums[i])
           backtrack(nums,i+1)
           tem.pop()
       }
   }
   backtrack(nums,0)
   return res
};