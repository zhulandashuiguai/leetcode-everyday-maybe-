/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
 */
 var topKFrequent = function(nums, k) {
    let map = {}; //对象统计字符的次数
    nums.forEach(ch=>{
        map[ch] = ( map[ch] || 0 ) + 1
    })
    // console.log(map);
    let arr = Object.entries(map) //转为数组
    arr.sort((a,b)=>b[1]-a[1])  //排序从大到小
    let res = [] 
    for(let i=0;i<k;i++){
        res.push(arr[i][0])
    }
    return res
};
nums = [1,1,1,2,2,3], k = 2
console.log( topKFrequent(nums,k));