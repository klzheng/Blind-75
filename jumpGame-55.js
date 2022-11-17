/**
 * @param {number[]} nums
 * @return {boolean}
 */

// initialize goalpost that starts at the end of the array
// loop through nums in reverse
//      see if the nums[index] + index >= goalpost, if true, then we know that we can get to the goalpost from nums[index] - move goal post left
// if goalpost is at index 0, then we know that we can reach the goalpost from the starting position - return true
// else, return false


var canJump = function (nums) {
    let goal = nums.length - 1

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] + i >= goal) goal = i
    }

    if (goal === 0) return true
    else return false
};

// Time complexity: O(N)
// Space complexity: O(1)