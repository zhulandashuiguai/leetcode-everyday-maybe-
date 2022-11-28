/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
题目概括：给你一个1-n的范围猜数字，利用guess()函数检查结果，猜对返回0，猜大了返回-1，猜小了返回1
示例 1：
输入：n = 10, pick = 6
输出：6
思路：就是二分查找的一个应用。直接二分找就行
 */
var guessNumber = function(n) {
    let low =1,high = n
    while(low<=high){
        let mid = Math.floor((low+high)/2)
        if(guess(mid)==0){
            return mid
        }else if(guess(mid)==-1){
            high = mid-1
        }else {
            low = mid+1
        }
    }
    return -1
};