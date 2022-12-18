/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 *  给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：
        输入：nums = [1,0,-1,0,-2,2], target = 0
输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

 */
/**
 *   四数之和与前面三数之和的思路几乎是一样的，
 如果前面的三数之和会做的话，其实就是在前面的基础上多添加一个遍历的指针而已。
 使用四个指针(a<b<c<d)。固定最小的a和b在左边，c=b+1,d=_size-1 移动两个指针包夹求解。
 保存使得nums[a]+nums[b]+nums[c]+nums[d]==target的解。偏大时d左移，偏小时c右移。c和d相
 遇时，表示以当前的a和b为最小值的解已经全部求得。b++,进入下一轮循环b循环，当b循环结束后。
 a++，进入下一轮a循环。 即(a在最外层循环，里面嵌套b循环，再嵌套双指针c,d包夹求解)。
 * 
 * 在三数之和的基础上，多套一层循环
*/
 var fourSum = function(nums, target) {
    nums.sort((a,b)=>a-b);
    let res = [];
    let len = nums.length
    if(target>0&&nums[0]>target) return []
    for(let i=0;i<len;i++){
        // 去重i
        while(i>0&&nums[i]==nums[i-1]) i++
        for(let j=i+1;j<len;j++){
            // j的去重操作从i+1开始！！！重点，默认的第一次是不用去重的
            while(j>i+1&&nums[j]==nums[j-1]) j++
            let left =j+1
            let right = len-1
            while(left<right){
                let sum = nums[i]+nums[j]+nums[left]+nums[right]
                if(sum>target){
                    right--
                }else if(sum<target){
                    left++
                }else{
                    res.push([nums[i],nums[j],nums[left],nums[right]])
                    while(left<right&&nums[left]==nums[left+1]) left++
                    while(left<right&&nums[right]==nums[right-1]) right--
                    left++
                    right--
                }
            }
        }
    }
    return res
};