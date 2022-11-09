/**
 * @param {number[]} nums
 * @return {boolean}
 */


// fn -> takes in arr and returns true if theres a duplicate in array, and false if no duplicates
// array -> integers only, length >= 1, can be negative, 0, or positive
// return boolean -> true/false


// [1,2,3,1] -> true
// [1,2,3,4] -> false
// [1,1,1,3,3,4,3,2,4,2] -> true


// ~~~~~~~~~~~~~~~~ BRUTE FORCE ~~~~~~~~~~~~~~~~~~~~~
//     nested loops
//     check if loop elements are the same
//     return true if so
//     otherwise return false

var containsDuplicate = function(nums) {

    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] === nums[j]) return true
        }
    }
    return false
};



// ~~~~~~~~~~~~~~~~ OPTIMIZED ~~~~~~~~~~~~~~~~~~~~~
// initialize empty object
// loop through nums arr
// check if number is in object 
//      if true -> return true
//      if false -> create an key-value pair with the number inside object
// return false (if loop ends without returning true)

var containsDuplicate = function(nums) {

    const duplicates = {}
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in duplicates) return true
        else duplicates[nums[i]] = true
    }
    return false
};