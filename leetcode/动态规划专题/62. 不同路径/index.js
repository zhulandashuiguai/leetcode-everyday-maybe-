/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
问总共有多少条不同的路径？
输入：m = 3, n = 7
输出：28
输入：m = 3, n = 2
输出：3
注意：路径不是步数
 */
 var uniquePaths = function(m, n) {
    //初始化dp数组
    let dp= new Array(m).fill(new Array(n).fill([]))
    //第一行和第一列的路径只有一种
    for(let i=0;i<m;i++){
        dp[i][0] = 1
    }
    for(let i =0;i<n;i++){
        dp[0][i] = 1
    }
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            //每一个方格的路径数是上方格的路径数加左方格的路径数
            dp[i][j] = dp[i-1][j]+dp[i][j-1]
        }
    }
    return dp[m-1][n-1]
};