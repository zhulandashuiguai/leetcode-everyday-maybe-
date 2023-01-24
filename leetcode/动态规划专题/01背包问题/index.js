/**
 * 完全背包的物品数量是无限的。
 * 01 背包:
 * 有n件物品和一个最多能背重量为w 的背包。第i件物品的重量是weight[i]，得到的价值是value[i] 。每件物品只能用一次，求解将哪些物品装入背包里物品价值总和最大。
 *举一个例子：
背包最大重量为4。有三个物品
      重量 价值
物品0	1	15
物品1	3	20
物品2	4	30 
使用动态规划解决：
1.dp数组：二维数组，即dp[i][j] 表示从下标为[0-i]的物品里任意取，放进容量为j的背包，价值总和最大是多少。
dp[i][j]：
      背包重量j
        0  1  2  3  4  5  6 ...
物品0	x	
物品1		
物品2
2.递推公式
那么可以有两个方向推出来dp[i][j]，
不放物品i：由dp[i - 1][j]推出，即背包容量为j，里面不放物品i的最大价值，此时dp[i][j]就是dp[i - 1][j]。(其实就是当物品i的重量大于背包j的重量时，物品i无法放进背包中，所以被背包内的价值依然和前面相同。)
放物品i：由dp[i - 1][j - weight[i]]推出，dp[i - 1][j - weight[i]] 为背包容量为j - weight[i]的时候不放物品i的最大价值，那么dp[i - 1][j - weight[i]] + value[i] （物品i的价值），就是背包放物品i得到的最大价值

所以递归公式： dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
3.dp数组如何初始化	
首先从dp[i][j]的定义出发，如果背包容量j为0的话，即dp[i][0]，无论是选取哪些物品，背包价值总和一定为0,第一列为0
第一行为不同背包容量装物品0时的最大价值，也就是背包容量大于物品重量那么就是物品0的价值，否则为0
 j <  weight[0]的时候，dp[0][j] 应该是 0，因为背包容量比编号0的物品重量还小。
 j >= weight[0]时，dp[0][j] 应该是value[0]，因为背包容量放足够放编号0物品。	
 代码初始化如下：

for (int j = 0 ; j < weight[0]; j++) {  // 当然这一步，如果把dp数组预先初始化为0了，这一步就可以省略，但很多同学应该没有想清楚这一点。
    dp[0][j] = 0;
}
// 正序遍历
for (int j = weight[0]; j <= bagweight; j++) {
    dp[0][j] = value[0];
} 
一开始就统一把dp数组统一初始为0，更方便一些。
// 初始化 dp
vector<vector<int>> dp(weight.size(), vector<int>(bagweight + 1, 0));
for (int j = weight[0]; j <= bagweight; j++) {
    dp[0][j] = value[0];
}

// weight数组的大小 就是物品个数
for(int i = 1; i < weight.size(); i++) { // 遍历物品
    for(int j = 0; j <= bagweight; j++) { // 遍历背包容量
        if (j < weight[i]) dp[i][j] = dp[i - 1][j];  //不放
        else dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
    }
}
 */
//weight是物品重量的数组，size背包容量
function testWeightBagProblem (weight, value, size) {
    // 定义 dp 数组
    const len = weight.length,
          dp = Array(len).fill().map(() => Array(size + 1).fill(0));
          
    // 初始化
    for(let j = weight[0]; j <= size; j++) {
        dp[0][j] = value[0]; //第一行初始化
    }

    // weight 数组的长度len 就是物品个数
    for(let i = 1; i < len; i++) { // 遍历物品
        for(let j = 0; j <= size; j++) { // 遍历背包容量
            if(j < weight[i]) dp[i][j] = dp[i - 1][j];
            else dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
        }
    }

    console.table(dp)

    return dp[len - 1][size];
}

function test () {
    console.log(testWeightBagProblem([1, 3, 4, 5], [15, 20, 30, 55], 6));
}

test();

/**
 * 把二维数组降为一维数组，就是用dp[j]代替dp[i][j],相当于把每一层拷贝到下一层
 * 递归公式为：
 * dp[j] = max(dp[j], dp[j - weight[i]] + value[i]);
 * dp数组在推导的时候一定是取价值最大的数，如果题目给的价值都是正整数那么非0下标都初始化为0就可以了。
这样才能让dp数组在递归公式的过程中取的最大的价值，而不是被初始值覆盖了。
那么我假设物品价值都是大于0的，所以dp数组初始化的时候，都初始为0就可以了。
 *一维数组，遍历时会有重复遍历的问题，所以需要倒序遍历
 //需要倒序遍历
 for(int i = 0; i < weight.size(); i++) { // 遍历物品
    for(int j = bagWeight; j >= weight[i]; j--) { // 遍历背包容量
        dp[j] = max(dp[j], dp[j - weight[i]] + value[i]);

    }
}
 * */ 

function testWeightBagProblem(wight, value, size) {
    const len = wight.length, 
      dp = Array(size + 1).fill(0); //初始化全0
    for(let i = 1; i <= len; i++) {
      for(let j = size; j >= wight[i - 1]; j--) { //倒序遍历背包
        dp[j] = Math.max(dp[j], value[i - 1] + dp[j - wight[i - 1]]);
      }
    }
    return dp[size];
  }
  
  
  function test () {
    console.log(testWeightBagProblem([1, 3, 4, 5], [15, 20, 30, 55], 6));
  }
  
  test();