// 16:01
// XKL面试
// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
// 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

// 输入：intervals = [[1,4],[4,5],[7,8]]
// 输出：[[1,5]]   
// 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。

// 输入：intervals = [[8,10],[1,3],[15,18],[2,6]]   [[1,6],[8,10],[15,18]]
let intervals = [[8,10],[1,3],[15,18],[2,6]];

function fn(arr){
    let arr2 = arr.sort((a,b)=>a[0]-b[0]) 
    let newArr = []
    // console.log(arr2);
    for(let i =0;i<arr2.length;i++){
        if(arr2[i+1]&&arr2[i][1]>=arr2[i+1][0]){
            let newTem = [arr2[i][0],Math.max(arr2[i+1][1],arr2[i+1][0])];
            newArr.push(newTem)
        }else{
            if(arr2[i+1]){
                newArr.push(arr2[i+1])
            }
        }
    }
    return newArr
}


console.log('result---',fn(intervals));

