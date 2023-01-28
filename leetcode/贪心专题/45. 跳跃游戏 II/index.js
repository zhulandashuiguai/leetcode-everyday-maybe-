/**
 * @param {number[]} nums
 * @return {number}
 * 同跳跃游戏1
 * 返回到达 nums[n - 1] 的最小跳跃次数。
 * 输入: nums = [2,3,1,1,4]
输出: 2
解释: 跳到最后一个位置的最小跳跃数是 2。
     从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
 */
var jump = function (nums) {
  //边界条件
  if (nums.length <= 1) return 0
  //cover:当前覆盖范围，next当前覆盖范围的下一步的最大覆盖范围，res最小步数
  let cover = 0, next = 0, res = 0
  for (let i = 0; i < nums.length; i++) {
    //记录下一步的最大覆盖范围
    next = Math.max(next, nums[i] + i)
    //当i遍历到了当前覆盖范围的尽头
    if (i == cover) {
      //如果没遍历到最后
      if (i !== nums.length - 1) {
        //就增加覆盖范围
        cover = next
        //增加覆盖范围就是走一步
        res++
        //增加覆盖范围之后要判断这个范围是否到终点
        if (cover >= nums.length - 1) return res
      }
    }
  }
}

//方法二：将上述特殊情况一起处理了
var jump = function (nums) {
  let cover = 0, next = 0, res = 0
  //i条件变为i<nums.length-1只需要到达倒数第二个
  for (let i = 0; i < nums.length - 1; i++) {
    next = Math.max(next, nums[i] + i)
    //i遍历到了当前覆盖范围的尽头
    if (i == cover) {
      //增加覆盖范围
      cover = next
      //增加覆盖范围就是走一步
      res++
    }
  }
  return res
}