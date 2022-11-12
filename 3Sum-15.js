/**
 * @param {number[]} nums
 * @return {number[][]}
 */



// fn -> takes in array integer, and returns 2D array that have subarrays where the numbers add up to 0
// nums arr -> length >= 3, numbers only,
// return array that contains triplets that add up to 0, can be empty array, numbers only


// sort nums
// initialize result arr
// loop through nums
//      set left pointer to i+1
//      set right pointer to nums.length-1
//      while left < right
//          calculate sum of i, left, right
//          if sum === 0, push [i,left,right] to results
//              while loop left++, right++ until left !== left+1, right !== right+1
//              increment/decrement left/right
//          if sum < 0 increment left
//          if sum > 0 decrement right
//      while i === i+1, i++
// return result


var threeSum = function (nums) {

    nums.sort((a, b) => a - b)
    const result = []

    for (let i = 0; i < nums.length; i++) {
        let left = i + 1
        let right = nums.length - 1

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]])
                while (nums[left] === nums[left + 1]) left++
                while (nums[right] === nums[right - 1]) right--
                left++
                right--
            } else if (sum < 0) {
                left++
            } else {
                right--
            }
        }

        while (nums[i] === nums[i + 1]) i++
    }
    return result
}

// Time complexity: O(n^2)
// Space complexity: O(n)