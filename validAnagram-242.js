/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


// fn -> takes in 2 strings, and returns true/false if strings are anagrams
// 2 strings -> no nums, no special characters, only letters, only lowercase, length >= 1
// return boolean -> true/false



// "anagram", "nagaram" -> true
// "rat", "car" -> false


// ~~~~~~~~~~ BRUTE FORCE ~~~~~~~~~~~~
// O(n*logn)
// sort both strings alphabetically
// check if the strings are the same


var isAnagram = function(s, t) {
    s = s.split('').sort().join("") 
    t = t.split("").sort().join("")
    return s === t
};


// ~~~~~~~~~~~ OPTIMIZED ~~~~~~~~~~~~~~
// O(n)
// create a hashmap for each string
// loop through both strings and use hashmap to keep track of letter count
// compare the 2 hashmaps

var isAnagram = function(s, t) {
    
    if (s.length !== t.length) return false
    
    const stringS = {}
    const stringT = {}
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] in stringS) stringS[s[i]]++
        else stringS[s[i]] = 1
    }
    
    for (let j = 0; j < t.length; j++) {
        if (t[j] in stringT) stringT[t[j]]++
        else stringT[t[j]] = 1
    }
    
    for (letter in stringS) {
        if (stringS[letter] !== stringT[letter]) return false
    }
    return true
};