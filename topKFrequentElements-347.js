/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */


// fn -> takes in an array of nums and an integer k, return the k most frequent numbers in the nums arr
// array, integer -> only numbers, array length >= 1, integer will always be in range btwn array length and 1
// return array -> only numbers, at least 1 solution, length >= 1


// initialize hashmap
// initialize bucketSort
// initialize result arr
// loop through nums
//      if nums[i] not in hashmap, create key-value pair
//      if nums[i] in hashmap, increment value of key by 1
// loop through hashmap
//      match each hash's value to the bucket's index, and set the hash's key as the bucket's value
// loop through the bucket in reverse order
//      push each item in bucket to result arr
//      break loop if result length === k 
// return result


var topKFrequent = function(nums, k) {
    const hash = new Map()
    const bucket = []
    const result = []
    
    for (let i = 0; i < nums.length; i++) {
        hash.set(nums[i], (hash.get(nums[i]) || 0) + 1)
    } 
    
    hash.forEach((value,key) => {
        if (bucket[value]) {
            bucket[value] = bucket[value].add(key)
        } else {
            bucket[value] = new Set().add(key)
        }
    })
    
    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i]) result.push(...bucket[i])
        if (result.length === k) break
    }
    
    return result
};


// Time complexity: O(n)
// Space complexity: O(n)