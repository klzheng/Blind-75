/**
 * @param {number[]} nums
 * @return {number}
 */


// DP, bottom-up with tabulation

var rob = function (nums) {
    const dp = []
    dp[0] = 0
    dp[1] = nums[0]

    for (i = 1; i < nums.length; i++) {
        dp[i + 1] = Math.max(dp[i], nums[i] + dp[i - 1])
    }
    return dp[dp.length - 1]
}

// Time complexity: O(N)
// Space complexity: O(N)




// DP, bottom-up
// since we only care about the total money robbed 1 houses before or 2 houses before we can initialize rob1 = 0, rob2 = 0
// loop through houses
//      find the maximum between robbing the current house + the total when robbing 2 houses before and robbing 1 house before the current one
//      set the total from 2 houses before to the one from 1 houses before
//      set the total from 1 house before to the calculated max value
// return the total from 1 house before


var rob = function (nums) {

    let rob1 = 0
    let rob2 = 0

    for (let i = 0; i < nums.length; i++) {
        let temp = Math.max(nums[i] + rob2, rob1)
        rob2 = rob1
        rob1 = temp
    }
    return rob1
};

// Time complexity: O(N)
// Space complexity: O(1)



