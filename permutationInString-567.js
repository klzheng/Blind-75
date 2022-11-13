/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */


// fn -> takes in 2 strings, and returns true if string2 contains a permutation of string1 (but not actually string1)
// string1, string2 -> lowercase letters only, length >= 1
// return boolean -> true/false


// initiailize hashmap, left, right pointers, number of missing matches between s1/s2
// loop through s1 and add each letter to hashmap with frequencies
// while right pointer < length of s2
//      check if hashmap has the letter (map.get() > 0), decrement missingMatches b/c we know that the letter is needed in s1
//      decrement the frequency of the letter in map
//      
//      return true if missingMatches === 0, b/c we know that the substring in sliding window is a permutation of s1
//      
//      if the length of the substring === s1.length, we know our substring is getting too large, need to increment left pointer
//          if the left letter in map >= 0, then we increase missingMatches by 1 b/c we know that we are removing a required char
//          increment the frequency of the left letter in map by 1
//          increment left pointer by 1
//      increment right pointer by 1
// return false



var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) return false

    const s1Count = new Map()

    for (let i = 0; i < s1.length; i++) {
        s1Count.set(s1[i], (s1Count.get(s1[i]) || 0) + 1)
    }

    let left = 0,
        right = 0,
        missingMatches = s1.length

    while (right < s2.length) {
        if (s1Count.get(s2[right]) > 0) missingMatches--
        s1Count.set(s2[right], s1Count.get(s2[right]) - 1)

        if (missingMatches === 0) return true

        if (right - left + 1 === s1.length) {
            if (s1Count.get(s2[left]) >= 0) missingMatches++
            s1Count.set(s2[left], s1Count.get(s2[left]) + 1)
            left++
        }
        right++
    }
    return false
}

// Time complexity: O(N)
// Space complexity: O(N)