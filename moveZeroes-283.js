/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// fn -> takes in arr of integers, moving all 0 values to end of array. Need to perform operations in-place
// array -> only numbers, length >= 1, always has at least 1 zero value
// return array -> length === array.length, only numbers, all zero values at end of array


// [0,1,0,3,12] -> [1,3,12,0,0]
// [0] -> [0]


// initialize pointer
// loop through arr
//      if number !== 0, set num[pointer] = nums[i], pointer++ 
// loop through arr (from pointer -> arr.length) 
//      num[i] = 0



var moveZeroes = function (nums) {
    let pos = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[pos] = nums[i]
            pos++
        }
    }

    for (let i = pos; i < nums.length; i++) {
        nums[i] = 0
    }
};

// Time complexity: O(N)
// Space complexity: O(1)