/**
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
示例 1：
输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
示例 2：
输入：target = 4, nums = [1,4,4]
输出：1
示例 3：
输入：target = 11, nums = [1,1,1,1,1,1,1,1]
输出：0
*/
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// 方法一：超时，暴力解法
 var minSubArrayLen = function(target, nums) {
    let length =Number.MAX_VALUE;
    for(let i =0;i<nums.length;i++){
        let arr =[],sum=0;
        for(let j =i;j<nums.length;j++){
            arr.push(nums[j])
            sum+=nums[j]
            if(sum>=target){
                length = length < arr.length? length : arr.length
                break;
            }
        }
    }
    return length==Number.MAX_VALUE? 0 :length
};
//方法二：滑动窗口
var minSubArrayLen = function(target, nums) {
    let i = 0,sum=0,length=Number.MAX_VALUE;
    for(let j=0;j<nums.length;j++){ //双指针，j用来扫描作为尾指针，i用作头指针
        sum+=nums[j];   //求和
        while(sum>=target){    //当和大于target时
            length=Math.min(length,j-i+1);  // 更新length
            sum-=nums[i]       //滑动窗口，先减去i的nums[i]
            i++                //头指针向后移 i++
        }
    }
    return length==Number.MAX_VALUE? 0: length;
};
