/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// fn -> takes in an arr of nums and a target number and return the indices of the 2 numbers that add up to target
// arr of numbers, integer -> always integers, never empty arr, always 1 solution, length >= 2, can be negative/positive
// return arr -> indices of the 2 numbers that add up to target, cannot have same numbers


// [2,7,11,15], 9 -> [0,1]
// [3,2,4], 6 -> [1,2]
// [3,3], 6 -> [0,1]


// BRUTE FORCE
// O(n^2)
// nested loops
// check if element from outer loop + element from inner loop === target
// if true, return indices

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i,j]
        }
    }
};


// OPTIMIZED
// O(n)
// initialize empty hashmap
// loop through nums arr
// subtract number from target
//      check if resulting val is inside hashmap
//      if false, add num (not resulting val), index to hashmap as key-value pair
//      if true, grab and return num index, val index

var twoSum = function(nums, target) {
    
    const numIndex = {}
    
    for (let i = 0; i < nums.length; i++) {
        let result = target - nums[i]
        if (result in numIndex) return [i, numIndex[result]]
        numIndex[nums[i]] = i
    }
};