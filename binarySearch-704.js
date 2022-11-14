/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


// fn -> takes in array of integers and return the integer of the target num in arr
// array of integers, target -> only numbers, length of arr >= 1, all items in array are unique, sorted
// return index value -> number only, if target not found return -1


// [-1,0,3,5,9,12], 9 -> 4
// [-1,0,3,5,9,12], 2 -> -1


// two pointers
// initialize left, right pointers starting from beginning/end of array
// while left <= right
//      calculate middle point
//      check if nums[middle] > target, then we know the target is below the mid way point, move right pointer closer
//      check if nums[middle] < target, move left pointer closer
//      if nums[middle] == target, return middle (we found the target number)
// return -1 (default value if no target is found)


var search = function (nums, target) {
    let right = nums.length - 1
    let left = 0

    while (right >= left) {
        const middle = Math.trunc((right + left) / 2)
        if (nums[middle] > target) {
            right = middle - 1
        } else if (nums[middle] < target) {
            left = middle + 1
        } else if (nums[middle] === target) return middle
    }
    return -1
};

// Time complexity: O(logN)
// Space complexity: O(1)
