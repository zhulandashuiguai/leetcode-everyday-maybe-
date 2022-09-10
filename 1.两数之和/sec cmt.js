/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
你可以按任意顺序返回答案。
示例 1：
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

解题思路：利用hash的方法，新建一个Map
循环数组，使用target减去当前得到的数，判断Map里是否有这个数，有则返回num的下标和当前遍历的索引
没有就把 当前循环的值nums[i]作为key，以及索引作为值存到map里
 */
var twoSum = function(nums, target) {
    let map = new Map()
    for(let i=0;i<nums.length;i++){
        let num = target-nums[i]
        if(map.has(num)){
            return [map.get(num),i]
        }else{
            map.set(nums[i],i)
        }
    }
};