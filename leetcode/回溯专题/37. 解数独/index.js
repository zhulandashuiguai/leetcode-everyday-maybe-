/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * 编写一个程序，通过填充空格来解决数独问题。

数独的解法需 遵循如下规则：

数字 1-9 在每一行只能出现一次。
数字 1-9 在每一列只能出现一次。
数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
数独部分空格内已填入了数字，空白格用 '.' 表示。

 */
 var solveSudoku = function(board) {
    // 判断当前位置是否能放当前的数字
    function isValid(board,row,col,num){
        // 行列是否重复
        for(let i=0;i<board.length;i++){
            if(board[row][i]==num) return false
            if(board[i][col]==num) return false
            let startRow = Math.trunc(row/3)*3
            let startCol = Math.trunc(col/3)*3
            //判断9宫格是否重复
            for(let i=startRow;i<startRow+3;i++){
                for(let j =startCol;j<startCol+3;j++){
                    if(board[i][j]==num){
                        return false
                    }
                }
            }
        }
        return true
    }
    //回溯
    function backtrack(board){
        for(let i=0;i<board.length;i++){
            for(let j=0;j<board.length;j++){
                //遍历行列整个棋盘
                if(board[i][j]=='.'){ //如果当前是'.'说明需要放数字
                    for(let k=1;k<=9;k++){  //1-9个数字依次放入
                        if(isValid(board,i,j,k)){  //如果可以放
                            //如果有效
                            board[i][j]=k+'' 
                            let isFull = backtrack(board); //递归
                            if(isFull) return true  //如果返回true就直接返回
                            board[i][j]='.' //回溯
                        }
                    }
                    // 如果9个数字都不行，都没有返回true就return fasle
                    return false
                }
            }
        }
        // 棋盘被填满，上面就走不到false，直接返回true
        return true
    }

    return backtrack(board)
};