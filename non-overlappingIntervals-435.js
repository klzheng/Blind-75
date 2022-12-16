/**
 * @param {number[][]} intervals
 * @return {number}
 */

// Greedy Algorithm
// the trick to these interval problems is that we only care about the interval's ending values to be the smallest (earliest)

// sort intervals in arr by their ending values
// initialize the starting and ending values
// check if next interval has a starting value > previous ending value
//      if true, increase counter
//      otherwise, we know that the interval is non-overlapping -> set prev start, end values to curr values
// return counter

var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a[1] - b[1]);

    let [start, end] = intervals[0];
    let removeCount = 0;

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < end) {
            removeCount++;
        } else {
            [start, end] = intervals[i];
        }
    }
    return removeCount;
};
