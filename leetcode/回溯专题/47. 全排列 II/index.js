/**
 * @param {number[]} nums
 * @return {number[][]}
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 * 输入：nums = [1,1,2]
    输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]
 */
 var permuteUnique = function(nums) {
    let res = []
    let tem = []
    nums.sort((a,b)=>a-b)
    //used数组用来记录对应下标的数字是否使用过(是唯一的，不同的递归层里是不一样的)，用过的话就是true，否则是false
    function backTracking(nums,used) {
        if (tem.length == nums.length) {
            return res.push([...tem])
        }
        for (let i = 0; i < nums.length; i++) {
            // 树层去重，同一层开始时，前面时没用过的也就是false
            if(i>0&&nums[i]==nums[i-1]&&!used[i-1]) continue
            //下标没有使用过才添加，避免重复添加
            if(used[i]==true) continue
            tem.push(nums[i])
            used[i]=true
            backTracking(nums,used)
            tem.pop()
            used[i]=false
        }
    }
    backTracking(nums,[])
    return res
};