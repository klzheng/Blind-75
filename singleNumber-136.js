/**
 * @param {number[]} nums
 * @return {number}
 */


// fn -> takes in arr and returns the num that appears only once
// arr -> numbers only, length >= 1
// return integer -> number


// [2,2,1] -> 1
// [4,1,2,1,2] -> 4
// [1] -> 1


// initialize hashmap
// loop through nums arr
//      add number and frequency as key-value pair to map
// loop through hashmap
//      return key that has value === 1


var singleNumber = function (nums) {
    let map = new Map()

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }

    for (let [key, value] of map) {
        if (value === 1) return key
    }
};

// Time complexity: O(N)
// Space complexity: O(N)