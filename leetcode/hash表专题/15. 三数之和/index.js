/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 思路：算法流程：
/**
 * 特判，对于数组长度 nn，如果数组为 nullnull 或者数组长度小于 33，返回 [][]。
对数组进行排序。
遍历排序后数组：
若 nums[i]>0：因为已经排序好，所以后面不可能有三个数加和等于 00，直接返回结果。
对于重复元素：跳过，避免出现重复解
令左指针 L=i+1 右指针 R=n-1当 L<R 时，执行循环：
当 nums[i]+nums[L]+nums[R]==0，执行循环，判断左界和右界是否和下一位置重复，去除重复解。并同时将 L,R 移到下一位置，寻找新的解
若和大于 0，说明 nums[R]太大，RR 左移
若和小于 0，说明 nums[L]太小，LL 右移
 * 
*/
 var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    if(nums[0]>0 || nums.length<3) return []
    let res =[]
    for(let i =0;i<nums.length;i++){
        let left = i+1;
        let right = nums.length-1;
        // 去重i
        if(nums[i-1]!==undefined && nums[i]==nums[i-1]) continue
        while(left<right){
            let sum = nums[i]+nums[left]+nums[right] 
            if(sum>0){
                right--
            }else if(sum<0){
                left++
            }else{
            // 去重left 和right
                res.push([nums[i],nums[left],nums[right]])
                while(left<right && nums[left]==nums[left+1]) left++
                while(left<right && nums[right]==nums[right-1]) right--
                right--
                left++
            }
        }
    }
    return res
};
console.log(threeSum([-2,0,3,-1,4,0,3,4,1,1,1,-3,-5,4,0]));