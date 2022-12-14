//快排时间复杂度：

let arr = [2, 3, 8, 5, 1, 4, 9, 7, 6]

function quickSort(arr) {
    // 递归结束条件,数组里只有一个数组或者没有元素就直接返回
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = []
    let right = []
    let pivot = arr.splice(mid, 1)[0]

    arr.forEach(item => {
        // 比pivot大的放右边，小的放左边
        if (item <= pivot) {
            left.push(item)
        } else {
            right.push(item)
        }
    });
    //返回拼接数组
    return quickSort(left).concat([pivot], quickSort(right))
}
console.log(
    quickSort(arr)
);

//写法优化
function quickSort(arr) {
    // 递归结束条件,数组里只有一个数组或者没有元素就直接返回
    if (arr.length <= 1) return arr
    let flag = arr[0]
    let left = []
    let right = []

    for (let i = 1; i < arr.length; i++) {
        // 比pivot大的放右边，小的放左边
        if (arr[i] <= flag) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    //返回拼接数组
    return quickSort(left).concat([flag], quickSort(right))
}
console.log(
    quickSort(arr)
);
