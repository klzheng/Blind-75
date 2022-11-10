/**
 * @param {string[]} strs
 * @return {string[][]}
 */


// initialize empty hashmap
// create new strs array with sorted words
// loop through sorted words array
//      check if hashmap has sorted word, if it does, push word to value array, if not, create new key-value pair
// return hashmap values



var groupAnagrams = function(strs) {
    
    const anagramGroups = new Map()
    const sortedWords = strs.map(item => item.split("").sort().join(""))
    
    for (let i = 0; i < sortedWords.length; i++) {
        if (anagramGroups.has(sortedWords[i])) {
            const wordGroup = anagramGroups.get(sortedWords[i])
            wordGroup.push(strs[i])
            anagramGroups.set(sortedWords[i], wordGroup)
        }
        else anagramGroups.set(sortedWords[i], [strs[i]])
    }
    
    return [...anagramGroups.values()]
};

// Time complexity: O(n*klog(k)) [where n is the number of words in the given array, k is the length of the word that is being sorted ]
// Space complexity: O(n)