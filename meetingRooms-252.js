/**
 * @param {number[][]} intervals
 * @return {boolean}
 */


// sorting
// sort the intervals in the arr by starting time
// loop through the sorted arr starting at index 1
//      if the starting time at index i < ending time at index i-1, then we know the person cannot be in 2 meetings at once, return false
// return true


var canAttendMeetings = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < intervals[i - 1][1]) return false
    }
    return true
};

// Time complexity: O(nlogn)
// Space complexity: O(1)