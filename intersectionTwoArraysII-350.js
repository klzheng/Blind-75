/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */


// fn -> given 2 arrays, return an array that contains numbers from both arrays
// nums1, nums2 -> length >= 1, numbers only, can be of different length
// return arr -> numbers, length <= nums1/nums2


// [1,2,2,1], [2,2] -> [2,2]
// [4,9,5], [9,4,9,8,4] -> [4,9]


// initializing hashmap
// initialize result arr
// loop through nums1 
//      add integers to hashmap with frequencies
// loop through nums2
//      check if element is in map, if true add to result arr


var intersect = function (nums1, nums2) {
    const map = new Map()
    const result = []

    for (let i = 0; i < nums1.length; i++) {
        map.set(nums1[i], (map.get(nums1[i]) || 0) + 1)
    }

    for (let j = 0; j < nums2.length; j++) {
        if (map.get(nums2[j]) > 0) {
            result.push(nums2[j])
            map.set(nums2[j], map.get(nums2[j]) - 1)
        }
    }

    return result
};

// Time complexity: O(N) [technically - O(n+m)]
// Space complexity: O(N) [technically - O(n)]