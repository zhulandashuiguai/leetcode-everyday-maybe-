/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let tem = Number(digits.join(''))
    tem++
    tem = String(tem).split('')
    console.log(tem);
};


plusOne([1, 2, 3])