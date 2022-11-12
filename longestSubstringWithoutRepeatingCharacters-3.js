/**
 * @param {string} s
 * @return {number}
 */


// fn -> takes in string and returns longest substring length (no repeating chars)
// string -> can contain spaces, special chars, numbers, length >= 0
// return number -> integer, value >= 0


// initialize hashset, pointers
// loop through string
//      while letter is in set,
//          delete left most items in set until letter no longer in set (increase left pointer on each delete)
//      otherwise, add string[right] item to set
//      keep track of hashset size
// return hashset size


var lengthOfLongestSubstring = function(s) {
    const set = new Set()
    let maxLength = 0
    let left = 0
    
    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left])
            left++
        }
        set.add(s[right])
        
        maxLength = Math.max(set.size, maxLength)
    }
    return maxLength
};

// Time complexity: O(N)
// Space complexity: O(N)
