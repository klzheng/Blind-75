/**
 * @param {number[]} nums
 * @return {number}
 */

// Greedy Algorithm
// If the array is sorted, there are 2 ways to make the maximum product
//      1. multiply the largest 3 numbers
//      2. multiply the smallest 2 numbers (most negative) and the largest number
// return the max of the 2 numbers

var maximumProduct = function(nums) {
    nums = nums.sort((a,b) => a - b)
    const len = nums.length

    const highestThree = nums[len - 1] * nums[len - 2] * nums[len - 3]
    const lowestTwo = nums[0] * nums[1] * nums[len - 1]

    return Math.max(highestThree, lowestTwo)
};