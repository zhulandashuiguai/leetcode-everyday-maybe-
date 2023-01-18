/**
 * @param {number[]} nums
 * @return {number}
 */
// 暴力超时
 var maxSubArray = function(nums) {
    let maxSum =-Infinity;
    let count = 0;
    for(let i = 0;i<nums.length;i++) { //起点
        count =0 ;
        for(let j=i;j<nums.length;j++) {
            count+=nums[j];
            if(count>maxSum) maxSum=count
        }
    }
    return maxSum;
};
// 贪心
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let maxSum = -Infinity //定义最大和
    let count = 0  //累加和
    for(let i =0;i<nums.length;i++){ //遍历
        count+=nums[i]  // 先累加
        if(count>maxSum) maxSum = count  //如果累加和大于maxSum更新最大和
        if(count<0) count=0   //count如果变成负数，重新置为0
    }
    return maxSum
};