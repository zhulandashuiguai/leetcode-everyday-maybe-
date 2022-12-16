/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 */
// 思路：我们用数组 merged 存储最终的答案。

// 首先，我们将列表中的区间按照左端点升序排序。然后我们将第一个区间加入 merged 数组中，并按顺序依次考虑之后的每个区间：
// 如果当前区间的左端点在数组 merged 中最后一个区间的右端点之后，那么它们不会重合，我们可以直接将这个区间加入数组 merged 的末尾；
// 否则，它们重合，我们需要用当前区间的右端点更新数组 merged 中最后一个区间的右端点，将其置为二者的较大值。

 var merge = function(intervals) {
    let arr2 = intervals.sort((a,b)=>a[0]-b[0]) //排序
    let newArr = [arr2[0]]  //放第一个元素
    for(let i = 0;i<arr2.length;i++){ 
        if( newArr[newArr.length-1][1] >= arr2[i][0]){  //如果有覆盖
            newArr[newArr.length-1][1] =Math.max(newArr[newArr.length-1][1],arr2[i][1]) //改变最后一个值
        }else{
            newArr.push(arr2[i]) //否则push进去
        }
    }
    return newArr
};