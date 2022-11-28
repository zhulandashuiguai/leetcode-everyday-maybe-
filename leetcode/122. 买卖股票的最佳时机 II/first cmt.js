/**
 * @param {number[]} prices
 * @return {number}
题目：给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。
在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。
返回你能获得的最大利润。
示例 1：
输入：prices = [7,1,5,3,6,4]
输出：7
思路：比较简单的做法就是，只要后一天的数比今天的大，就把总利润加上这两天的差值
只要后一天比前一天大 就把这两天的差值加一下
 */
var maxProfit = function(prices) {
    let earn = 0
    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i + 1] > prices[i]) {
            earn += prices[i + 1] - prices[i]
        }
    }
    return earn
};