/**
 * @param {number} n
 * @return {boolean}
 */


// hashset
// initialize hashset to keep track of past numbers
// initialize var to keep track of the sum of the digits
// while hashset does not have sum of digits
//      if sum of digits === 1, return true
//      add sum of digits to hashset
//      recalculate the sum of digits
// return false


var isHappy = function (n) {

    let sumOfNum = n
    const numbers = new Set()

    while (!numbers.has(sumOfNum)) {
        if (sumOfNum === 1) return true

        numbers.add(sumOfNum)
        sumOfNum = String(sumOfNum).split("").reduce((acc, curr) => curr ** 2 + acc, 0)
    }
    return false
};

// Time complexity: O(logN)
// Space complexity: O(N)
