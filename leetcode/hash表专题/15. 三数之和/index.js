/**
 * @param {number[]} nums
 * @return {number[][]}
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