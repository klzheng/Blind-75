/**
 * @param {number[]} nums
 * @return {number[]}
 */


// fn -> takes in an array of numbers where at each index, the numbers are multiplied with each other except for the number at the current index and all results are returned as an array
// array -> positive/negative, numbers only, length >= 2
// return array -> numbers only, length === array.length


// [1,2,3,4] -> [24, 12, 8, 6]
// [-1,1,0,-3,3] -> [0,0,9,0,0]


// ~~~~~~~~~~~~~~ UNOPTIMAL ~~~~~~~~~~~~~~~~~~~~
// Time complexity: O(N)
// Space complexity: O(N)

// initialize prefix arr with 1s
// initialize postfix arr with 1s
// initialize result arr with 1s
// loop through nums
//      multiply the current integer with the value before it
// loop through nums in reverse
//      multiply the current integer with the value before it
// loop through nums
//      multiply the prefix value at index - 1 with postfix value with index + 1


var productExceptSelf = function (nums) {

    const prefix = Array(nums.length).fill(0)
    const postfix = Array(nums.length).fill(0)
    const result = Array(nums.length).fill(0)

    for (let i = 0; i < nums.length; i++) {
        if (prefix[i - 1] == null) prefix[i] = nums[i]
        else prefix[i] = prefix[i - 1] * nums[i]
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        if (postfix[i + 1] == undefined) postfix[i] = nums[i]
        else postfix[i] = postfix[i + 1] * nums[i]
    }

    for (let i = 0; i < nums.length; i++) {
        if (i === 0) result[i] = postfix[i + 1]
        else if (i === nums.length - 1) result[i] = prefix[i - 1]
        else result[i] = prefix[i - 1] * postfix[i + 1]
    }


    return result
};






// ~~~~~~~~~~~~~ OPTIMAL ~~~~~~~~~~~~~~~~~
// Time complexity: O(N)
// Space complexity: O(1)

// initialize result array with length of nums, values of 1
// initialize pre = 1
// initialize post = 1
// loop through nums arr 
//      result[i] *= pre
//      pre *= nums[i]
// loop through nums arr (in reverse)
//      result[i] *= post
//      post *= nums[i]


var productExceptSelf = function (nums) {

    const result = Array(nums.length).fill(1)
    let pre = 1
    let post = 1

    for (let i = 0; i < nums.length; i++) {
        result[i] *= pre
        pre *= nums[i]
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= post
        post *= nums[i]
    }

    return result
};