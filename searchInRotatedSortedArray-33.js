/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


// fn -> takes in an integer array and returns the index of the target value
// integer array, target -> numbers only, length >= 1, target can be positive/negative, array elements are unique
// return integer -> number, -1 if target value not found


// [4,5,6,7,0,1,2], 0 -> 4
// [4,5,6,7,0,1,2], 3 -> -1
// [1], 0 -> -1


// binary search, two pointers
// initialize left, right pointers
// while (left <= right)
//      calculate middle
//      if (nums[middle] === target) return middle
//      if left value <= middle value, then we know that the left side is sorted correctly
//          if middle < target, then we know that target is on right side (b/c left is also <= middle), move left pointer
//          OR if left > target, then we know target is on right side (b/c middle > left, so target cannot be between left and middle), move left pointer
//          else move right pointer closer
//      otherwise (left > middle)
//          if middle > target, then we know target on left side (b/c all items after middle are in ascending order, so target has to be left side), move right pointer 
//          if right < target, then we know that all items btwn middle and right are < target, so target has to be left side, move right pointer
//          else move left pointer closer
// return -1


var search = function (nums, target) {

    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        const middle = Math.floor((left + right) / 2)
        if (nums[middle] === target) return middle

        if (nums[left] <= nums[middle]) {
            if (target > nums[middle] || target < nums[left]) {
                left = middle + 1
            } else {
                right = middle - 1
            }
        } else {
            if (target < nums[middle] || target > nums[right]) {
                right = middle - 1
            } else {
                left = middle + 1
            }
        }
    }
    return -1
};


// Time complexity: O(logN)
// Space complexity: O(1)