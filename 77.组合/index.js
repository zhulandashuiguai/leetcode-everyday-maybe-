/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
题目:给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
你可以按 任何顺序 返回答案。
示例 1：
输入：n = 4, k = 2
输出：
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
 */
//  思路1：回溯算法  回溯函数： 1.先判断终止条件, 2.for循环 3.for循环里：1.先处理节点，2.递归 3.回溯pop
var combine = function(n, k) {
    var res = []
    var tem = []
        // 回溯函数
    function backTracking(n, k, startIndex) {
        // 1.终止条件  
        if (tem.length == k) {
            res.push([...tem]) //注意这里要对引用进行处理
            return
        }
        // 2.for循环
        for (let i = startIndex; i <= n; i++) {
            //处理节点 
            tem.push(i)
                // 递归
            backTracking(n, k, i + 1)
                // 回溯  
            tem.pop()
        }
    }
    backTracking(n, k, 1)
    return res
};

// 剪枝操作：如果n=4，k=4，那么算法里的循环，除了1开始的，之后的都是没有必要的，减去分支以提高效率
// 剪枝从循环中的i<=n开始操作，缩小i的范围即可实现剪枝，只需要让i小于最大的有效范围即可
// 如果n=4,k=2,那么，i的有效搜索范围就是1-3，k=3，有效搜索范围就是1-2，k=4,i的有效范围就只剩1开始了
// i<=n-(k-tem.length)+1 ,表示已经选了几个元素的条件下，至多能从哪个下标开始选。直接替换条件即可
// 2.for循环
for (let i = startIndex; i <= n - (k - tem.length) + 1; i++) {
    //处理节点 
    tem.push(i)
        // 递归
    backTracking(n, k, i + 1)
        // 回溯  
    tem.pop()
}