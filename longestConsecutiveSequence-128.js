/**
 * @param {number[]} nums
 * @return {number}
 */


// initialize hashset with nums arr
// initialize maxLength
// loop through set
//      for each element, check if element - 1 is in set
//      if exists, then we know that the element is not the start of sequence - move on
//      if it does not exist, then we know that it is the start of a sequence -> add num to result arr
//          while loop until sequence ends
//          i.e. continue until we find an element where element + 1 does not exist
//      if result length > maxLength, replace maxLength value
// return maxLength


var longestConsecutive = function (nums) {

    const set = new Set([...nums])
    let maxLength = 0

    for (let num of set) {
        const result = []

        if (!set.has(num - 1)) {
            let i = 1
            result.push(num)

            while (set.has(num + i)) {
                result.push(num + i)
                i++
            }
        }
        if (result.length > maxLength) maxLength = result.length
    }

    return maxLength
};

// Time complexity: O(N) - even though there is a while loop inside a for loop, the while loop only starts a number is found to be the start of the sequence. Therefore the max # of iterations is limited to N sized input
// Space complexity: O(N)