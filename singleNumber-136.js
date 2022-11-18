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


// ~~~~~~ GOOD ~~~~~~~~
// initialize hashmap
// loop through nums arr
//      add number and frequency as key-value pair to map
// loop through hashmap
//      return key that has value === 1


var singleNumber = function(nums) {
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




// ~~~~~ OPTIMAL ~~~~~~
// initialize result var
// loop through nums
//      set result to the number XOR result, b/c if 2 numbers use the XOR operator, the result is 0, and if any number XOR 0, the result is the         number, so if every number appears twice except for 1 number, then all the duplicates will evaluate to 0, and 0 XOR unique number ==             unique number
// return result


var singleNumber = function(nums) {
    let result
    
    for (let i = 0; i < nums.length; i++) {
        result = nums[i] ^ result
    }
    return result
}

// Time complexity: O(N)
// Space complexity: O(1)