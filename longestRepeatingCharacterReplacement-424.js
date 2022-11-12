/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */


// fn -> takes in string, and an integer k - return the length of the longest substring that contains the same letter
// string, k -> only uppercase english letters, no special chars, length >= 1, length of k <= length string, but >= 0
// return longest substring -> number


// "ABAB", 2 -> 4
// "AABABBA", 1 -> 4


// two pointers, with hashmap
// initialize left, right pointers, maxLetterFrequency, hashmap
// while right < length of string
//      add string[right] to hashmap
//      check if length of substring > maxLetterFrequency + k, if true, decrement string[left] by 1, left++
//      right++
// return length of substring (right-left)


var characterReplacement = function (s, k) {
    let left = 0
    let right = 0
    let maxCount = 0
    let substring = new Map()

    while (right < s.length) {
        const length = right - left + 1

        substring.set(s[right], (substring.get(s[right]) || 0) + 1)

        if (substring.get(s[right]) > maxCount) maxCount = substring.get(s[right])

        if ((length - maxCount) > k) {
            substring.set(s[left], substring.get(s[left]) - 1)
            left++
        }
        right++
    }

    return right - left
};

// Time complexity: O(N)
// Space complexity: O(N)