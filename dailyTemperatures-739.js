/**
 * @param {number[]} temperatures
 * @return {number[]}
 */


// fn -> takes in an array of temperatures, and returns an array of integers such that each element represents the number of days until a higher temperature
// temperatures array -> numbers only, temp >= 30, temp <= 100, length >= 1
// return array -> numbers onlys, same length as temperatures arr


// [73,74,75,71,69,72,76,73] -> [1,1,4,2,1,1,0,0]
// [30,40,50,60] -> [1,1,1,0]
// [30,60,90] -> [1,1,0]


// ~~~~~~~~~~~~~~~ BRUTE FORCE ~~~~~~~~~~~~~~~~~
// Time complexity: O(N^2)
// Space complexity: O(N^2)

var dailyTemperatures = function (temperatures) {
    const results = Array(temperatures.length).fill(0)

    for (let i = 0; i < temperatures.length; i++) {
        for (let j = i + 1; j < temperatures.length; j++) {
            if (temperatures[j] > temperatures[i]) {
                results[i] = j - i
                break
            }
        }
    }
    return results
};





// ~~~~~~~~~~~~~~~~ OPTIMAL ~~~~~~~~~~~~~~~~~~
// initializing stack of indices
// initializing results array with values of 0 (default value)
// loop through temperatures arr
//      while indices stack not empty AND temperature at i > temperature at top-most element in stack 
//          .pop() top-most element in stack
//          set results[popped element] = i - popped element
//      stack.push(i)
// return results


var dailyTemperatures = function (temperatures) {
    const indices = []
    const results = Array(temperatures.length).fill(0)

    for (let i = 0; i < temperatures.length; i++) {
        while (indices.length !== 0 && temperatures[i] > temperatures[indices[indices.length - 1]]) {
            let temp = indices.pop()
            results[temp] = i - temp
        }
        indices.push(i)
    }
    return results
}

// Time complexity: O(N)
// Space complexity: O(N)