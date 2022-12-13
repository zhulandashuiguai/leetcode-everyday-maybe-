//题目：给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
/*
示例 1：
输入：nums = [-4,-1,0,3,10]
输出：[0,1,9,16,100]
解释：平方后，数组变为 [16,1,0,9,100]
排序后，数组变为 [0,1,9,16,100]
示例 2：

输入：nums = [-7,-3,2,3,11]
输出：[4,9,9,49,121]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 方法一，直接全部平方后排序，快排的方式，时间复杂度nlogn
 var sortedSquares = function(nums) {
    let newArr = nums.map(item=>{
        return item**2
    })
    return newArr.sort((a,b)=>a-b);
};

// 方法2，双指针的方式，时间复杂度O(n),因为有负数，所以平方后两边是最大的，中间是最小的，从两头开始比较，大的依次塞进数组里就可以了
var sortedSquares = function(nums) {
    let newArr = [];
    let i = 0,j=nums.length-1;
    while(i<=j){
        if(nums[i]**2>=nums[j]**2){
            newArr.unshift(nums[i]**2)
            i++
        }else{
            newArr.unshift(nums[j]**2)
            j--
        }
    }
    return newArr
};