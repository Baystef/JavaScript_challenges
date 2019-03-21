function countChange(money, coins) {
   let n = coins.length;
   let dp = Array(money + 1).fill().map(() => Array(n).fill(0))

   for (let i = 0; i < n; i++) {
       dp[0][i] = 1
   }

   for (let i = 1; i <= money; i++) {
       for (let j = 0; j < n; j++) {
           let x = i - coins[j] >= 0 ? dp[i - coins[j]][j] : 0

           let y = j > 0 ? dp[i][j - 1] : 0
           dp[i][j] = x + y;
       }
   }
   return dp[money][n - 1];
}


console.log(countChange(4, [1,2]));