/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */


// sort array items by starting value
// initialize results arr with 1st value in intervals
// loop through intervals (starting at index 1)
//      if the starting value of the interval <= ending value of the last item in the results
//          set the ending value in the last item of the results array to the max(intervals[i][1], ending value of last item in results)
//      else, add the interval to results
// return results


var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    let results = [intervals[0]]

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= results[results.length - 1][1]) {
            results[results.length - 1][1] = Math.max(intervals[i][1], results[results.length - 1][1])
        } else {
            results.push(intervals[i])
        }
    }
    return results
};

// Time complexity: O(nlogn)
// Space complexity: O(N)