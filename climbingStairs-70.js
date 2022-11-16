/**
 * @param {number} n
 * @return {number}
 */

// DP, bottom-up approach
// edge case: if n === 1, return 1
// initialize dp arr with value of 0
// starting from step 0, we can either take 1 or 2 steps up - dp[1] = 1, dp[2] = 2
// to get to step 3, we can either take 1 step from the (3-1)th step, or 2 steps from the (3-2)th step 
// so the total number of ways to reach step 3 is the number of ways to reach step 1 + # of ways to reach step 2 - dp[i+1] = dp[i] + dp[i-1]
// return the last element in the array - dp.pop()


var climbStairs = function (n) {
    if (n === 1) return 1

    let dp = [0]
    dp[1] = 1
    dp[2] = 2

    for (let i = 2; i < n; i++) {
        dp[i + 1] = dp[i] + dp[i - 1]
    }
    return dp.pop()
};

// Time complexity: O(N)
// Space complexity: O(N)