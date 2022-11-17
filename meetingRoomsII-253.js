/**
 * @param {number[][]} intervals
 * @return {number}
 */

// Two Pointers
// initialize starting array, ending array that will contain all the starting and ending times for each meeting
// loop through the intervals and add the starting/ending times to their arrays
// sort the starting and ending arrays
// 
// initialize the starting, ending pointers, as well as the counter, and maxCount variables
// while starting < start.length
//      if the starting value < ending value, increase count by 1, move starting pointer right, set maxCount
//      else if the starting value > ending value, decrease count by 1, move ending pointer right
// return maxCount


var minMeetingRooms = function (intervals) {

    let start = []
    let end = []

    for (let i = 0; i < intervals.length; i++) {
        start.push(intervals[i][0])
        end.push(intervals[i][1])
    }

    start.sort((a, b) => a - b)
    end.sort((a, b) => a - b)

    let starting = 0
    let ending = 0
    let count = 0
    let maxCount = 0

    while (starting < start.length) {
        if (start[starting] < end[ending]) {
            starting++
            count++
            maxCount = Math.max(maxCount, count)
        } else {
            ending++
            count--
        }
    }
    return maxCount
};

// Time complexity: O(nlogn)
// Space complexity: O(n)