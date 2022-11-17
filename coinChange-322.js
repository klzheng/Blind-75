/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */


// DP, bottom-up with memoization
// initialize array with length amount + 1, where each item is > amount
// set the 0th element = 0, b/c the number of coins needed to get to 0 amount is 0
// loop through all the amounts
//      loop through the coins
//          if amount - coin >= 0, then we know that there is a possible solution
//              set array[i] = min(array[i], array[i-coin] + 1) -- array[i-coin] + 1 is b/c if the i is greater than coin, then we know that coin at least goes into i at least 1 time, and we can reference the number of coins needed to get i-coin
// if the last element in the array is <= amount, then we know that there is a solution, return array[amount]
// otherwise, the coins are too large for amount, return -1


var coinChange = function (coins, amount) {
    let dp = Array(amount + 1).fill(amount + 1)
    dp[0] = 0

    for (let i = 1; i < amount + 1; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1)
            }
        }
    }
    if (dp[amount] <= amount) return dp[amount]
    else return -1
};

// Time complexity: O(amount * coins.length)
// Space complexity: O(amount)


