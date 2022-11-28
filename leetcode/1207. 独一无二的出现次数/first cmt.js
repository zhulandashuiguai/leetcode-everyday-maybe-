/**
 * @param {number[]} arr
 * @return {boolean}
 题目：给你一个整数数组 arr，请你帮忙统计数组中每个数的出现次数。
如果每个数的出现次数都是独一无二的，就返回 true；否则返回 false。
示例 1：
输入：arr = [1,2,2,1,1,3]
输出：true
解释：在该数组中，1 出现了 3 次，2 出现了 2 次，3 只出现了 1 次。没有两个数的出现次数相同。
示例 2：
输入：arr = [1,2] 都只出现一次，重复
输出：false

思路：用Map统计每个数字的次数，再取出出现的次数，对次数Set去重，判断去重后的size和Map的size即可
 */
var uniqueOccurrences = function(arr) {
    let map =new Map()
    arr.forEach((num)=>{
      if(map.has(num)){
          map.set(num,map.get(num)+1)
      }else{
          map.set(num,1)
      }
    })
    // 好了，现在有一个map统计了每个数字的次数
    //只需要判断，次数有没有重复即可
    let count = new Set()
    for(let [key,val] of map){
        count.add(val)
    }
    //map的长度等于count的长度，代表没有重复的次数，不相等就表示有重复
    return map.size==count.size
};