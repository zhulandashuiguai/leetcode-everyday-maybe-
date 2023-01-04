/**
 * @param {number} n
 * @return {string[][]}
 * 按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。
n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
输入：n = 4
输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
解释：如上图所示，4 皇后问题存在两个不同的解法。

 */
 var solveNQueens = function(n) {
    //将棋盘转换为标准格式的函数，js的字符串不能通过索引更改，所以要将单独的字符串合并才是标准格式
    function transformCheeseboard(cheeseBoard){
        console.log(cheeseBoard,cheeseBoard.map(item=> item.join()))
        return cheeseBoard.map(item=> item.join(''))
    }
    //生成棋盘，用[['.','.','.','.'],['.','.','.','.'],['.'],['.']]...的形式来当棋盘
    let res = [], cheeseBoard=new Array(n).fill([]).map(item=>new Array(n).fill('.'))
    // console.log(cheeseBoard)
    function isValid(cheeseBoard,row,j){   //判断在当前位置是否有效
        for(let i =0;i<n;i++){
            //相同的列有的话就不合法
            if(cheeseBoard[i][j]=='Q') return false
        }
        // 45°角有Q则不合法
        for(let i=row-1,col=j-1;i>=0&&col>=0;col--,i--){
            if(cheeseBoard[i][col]=='Q') return false
        }
        //135°角
        for(let i=row-1,col=j+1;i>=0&&col<=n-1;col++,i--){
            if(cheeseBoard[i][col]=='Q') return false
        }
        return true
    }
    //回溯
    function backtrack(cheeseBoard,row,j){
        //如果row==n，表示row已经超出数组范围，收集结果
        if(row==n) return res.push(transformCheeseboard(cheeseBoard))
        for(let i = 0;i<n;i++){
            if(isValid(cheeseBoard,row,i)){
                cheeseBoard[row][i]='Q'
                backtrack(cheeseBoard,row+1,0)
                cheeseBoard[row][i]='.'
            }else{
                continue
            }
        }
    }
    backtrack(cheeseBoard,0,0)
    return res
};