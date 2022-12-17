/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 * 本题解题步骤：
首先定义 一个map，key放a和b两数之和，value 放a和b两数之和出现的次数。
遍历大A和大B数组，统计两个数组元素之和，和出现的次数，放到map中。
定义变量count，用来统计 a+b+c+d = 0 出现的次数。
在遍历大C和大D数组，找到如果 0-(c+d) 在map中出现过的话，就用count把map中key对应的value也就是出现次数统计出来。
最后返回统计值 count 就可以了
 */
 var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let obj = new Map()
    let count = 0
    nums1.forEach(item1=>{
        nums2.forEach(item2=>{
            obj.set(item1+item2,(obj.get(item1+item2) ||0) +1)
        })
    })
    nums3.forEach(item3=>{
        nums4.forEach(item4=>{
            let target = -(item3+item4);
            if(obj.has(target)){
                count = count+obj.get(target)
            }
        })
    })
    return count
};