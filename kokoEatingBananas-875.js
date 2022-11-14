/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */


// fn -> takes in an array of numbers, and an integer h, returns minimum number of bananas/hour
// array of integers, h -> only numbers, element >= 1, length >= 1, h always >= numbers arr
// return integer -> only number


// binary search, two pointers
// initialize left, right pointers, result
// while left <= right
//      calculate middle value
//      initialize hours
//      loop through numbers in piles
//          find the minimum number of hours needed to finish all bananas at a rate of "middle" bananas/hour
//      if hours <= h, set result = middle, move right pointer closer (b/c we want to get hours to as close to h as possible)
//      else if hours > h, move left pointer closer (b/c Koko is eating bananas too slow)
// return result


var minEatingSpeed = function (piles, h) {
    let left = 1
    let right = Math.max(...piles)
    let result = Math.max(...piles)

    while (left <= right) {
        const middle = Math.floor((left + right) / 2)

        let hours = 0
        for (let bananas of piles) {
            hours += Math.ceil(bananas / middle)
        }

        if (hours <= h) {
            result = middle
            right = middle - 1
        }
        else if (hours > h) {
            left = middle + 1
        }
    }
    return result
};

// Time complexity: O(log(max(piles))*piles)
// Space complexity: O(1)