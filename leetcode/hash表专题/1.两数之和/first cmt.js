/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
你可以按任意顺序返回答案。
示例 1：
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 
暴力循环
 */
var twoSum = function(nums, target) {
    var number=[];
    for(var i =0;i<nums.length-1;i++) {
        for(var j =i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                number.push(i);
                number.push(j);
            }
        }
    }
    return number;
};