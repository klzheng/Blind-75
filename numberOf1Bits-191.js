/**
 * @param {number} n - a positive integer
 * @return {number}
 */


// Bit shift
// initialize counter
// while (n !== 0)
//      n % 2 will always tell us if the last digit is a 1 or 0, because any number that ends with 1 will return 1, and any number that ends with         0 will return 0
//      n = n >>> 1, shift the bits to the right by 1 place
// return count


var hammingWeight = function (n) {
    let count = 0

    while (n) {
        count += n % 2
        n = n >>> 1
    }
    return count
};

// Time complexity: O(1) - technically, O(32)
// Space complexity: O(1) 