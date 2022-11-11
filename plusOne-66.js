/**
 * @param {number[]} digits
 * @return {number[]}
 */


// fn -> takes in arr of digits where each digit represents the digits in the number. Increment the smallest digit by 1 and return the new array of digits
// array -> digits, numbers only, the digit values are between 0 and 9, array length >= 1, no leading 0
// return array -> same rules as input array



// [1,2,3] -> [1,2,4]
// [4,3,2,1] -> [4,3,2,2]
// [9] -> [1,0]


// join elements in digits arr
// turn from string -> number (BigInt)
// add number by 1 (1n)
// split number into arr
// return arr


var plusOne = function (digits) {

    const joinedDigits = digits.join("")
    const incrementedNum = BigInt(joinedDigits) + 1n
    const newDigits = incrementedNum.toString().split("")
    return newDigits
};

// Time complexity: O(N)
// Space complexity: O(1)