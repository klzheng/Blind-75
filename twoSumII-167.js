/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */


// fn -> given an array of integers and target number, find 2 numbers that add up to target and return their indices + 1
// numbers arr, target -> numbers only, arr length >= 2, arr sorted, 
// return arr of indices -> numbers only, always at least 1 solution (length === 2)


// two pointer
// initialize starting pointer
// initialize ending pointer
// while starting < ending
//      if numbers[starting] + numbers[ending] > result, starting++
//      if < result, ending ++
//      if === result, return [starting, ending]



var twoSum = function (numbers, target) {
    let starting = 0
    let ending = numbers.length - 1

    while (starting < ending) {
        const result = numbers[starting] + numbers[ending]
        if (result > target) ending--
        if (result < target) starting++
        if (result === target) return [starting + 1, ending + 1]
    }
}

// Time complexity: O(N)
// Space complexity: O(N)
