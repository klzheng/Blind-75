/**
 * @param {string} s
 * @return {string}
 */

// 
// initialize result as empty string
// loop through string
// 
//      ~~~ check odd length palindrome ~~~
//      initialize left, right pointers - left = i, right = i
//      while left and right pointers are within the string, AND s[left] === s[right]
//          we know that the substring is a palindrome - if ((right - left + 1) > result.length)
//              result = s.slice(left, right + 1)
//          move pointers outwards, left moves down, right moves up
// 
//      ~~~ check even length ~~~
//      initialize left, right pointers with small adjustment - left = i, right = i + 1
//      while loop (same as above)
//          if (right - left + 1) > result.length
//              result = s.slice(left, right + 1)
//          left -= 1
//          right += 1
// return result


var longestPalindrome = function (s) {
    let result = ""

    for (let i = 0; i < s.length; i++) {
        let left = i
        let right = i
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if ((right - left + 1) > result.length) {
                result = s.slice(left, right + 1)
            }
            left -= 1
            right += 1
        }

        left = i
        right = i + 1
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if ((right - left + 1) > result.length) {
                result = s.slice(left, right + 1)
            }
            left -= 1
            right += 1
        }
    }
    return result
};

// Time complexity: O(N^2)
// Space complexity: O(1)