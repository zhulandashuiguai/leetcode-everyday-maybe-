/**
 * @param {number[]} bills
 * @return {boolean}
示例 1：
输入：bills = [5,5,5,10,20]
输出：true
解题思路：就按逻辑正常写
 */
var lemonadeChange = function(bills) {
    let fiveNum = 0
    let tenNum = 0
    for (i = 0; i < bills.length; i++) {
        if (bills[i] == 5) {
            fiveNum++
        }
        if (bills[i] == 10) {
            if (fiveNum > 0) {
                fiveNum--
                tenNum++
            } else {
                return false
            }
        }
        if (bills[i] == 20) {
            if (tenNum > 0 && fiveNum > 0) {
                tenNum--
                fiveNum--
            } else if (tenNum == 0 && fiveNum > 2) {
                fiveNum -= 3
            } else {
                return false
            }
        }
    }
    return true
};