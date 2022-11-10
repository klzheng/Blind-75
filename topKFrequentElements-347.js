/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */


// fn -> array of numbers and an integer, k - return k numbers that are the most frequent
// array, integer k -> numbers only, length >= 1, k > 0, array integers can be positive/negative
// return integers -> array, length === k


// [1,1,1,2,2,3], 2 -> [1,2]
// [1], 1 -> [1]


// initialize hashmap
// initialize bucket
// initialize result
// loop through nums arr
//      make pairs in hashmap where the key == integer in nums, value == occurences in nums
// loop through nums arr
//      initialize empty subarrays in bucket
// loop through hashmap
//      add each value to bucket where the map's keys === bucket's index
// loop through bucket
//      add to result array
// slice result array (0,k)
// return result


var topKFrequent = function (nums, k) {
    const hash = new Map()
    const bucket = []
    const result = []

    for (let i = 0; i < nums.length; i++) {
        hash.set(nums[i], (hash.get(nums[i]) || 0) + 1)
    }

    for (let i = 0; i < nums.length; i++) {
        bucket.push([])
    }


    hash.forEach((value, key) => {
        bucket[value - 1].push(key)
    })


    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i].length !== 0) {
            result.push(...bucket[i])
        }
    }

    return result.slice(0, k)
}

// Time complexity: O(n)
// Space complexity: O(n)