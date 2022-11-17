/**
 * @param {number[]} nums
 * @return {number}
 */


// DP
// initialize currentSum which will keep track of the current subarray we are focusing on, and max which will keep track of the highest subarray total
// loop through nums
//      all we care about is if the numbers before the current number is going to increase the currentSum or not, so if currentSum < 0, reset it to 0
//      add number to currentSum
//      find the max between currentSum and previous value of max, and set the higher value to max
// return max


var maxSubArray = function (nums) {
    let currentSum = nums[0]
    let max = nums[0]

    for (let i = 1; i < nums.length; i++) {
        if (currentSum < 0) currentSum = 0
        currentSum += nums[i]
        max = Math.max(currentSum, max)
    }
    return max
};

// Time complexity: O(N)
// Space complexity: O(1)




