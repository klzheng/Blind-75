/**
 * @param {number[]} cost
 * @return {number}
 */


// DP, bottom-up
// initialize downOne, downTwo that represent the min cost to reach 1 step, 2 steps below the current step
// the cost to get to index 0 or 1 is nothing initially, so we can set downOne, downTwo = 0
// loop starting from index 2, because we have to pay to get to this step, end the loop with an extra iteration to treat the top floor as the final step
//      let temp = downOne
//      set downOne to the minimum cost between taking 1 step and 2 steps
//      set downTwo to the previous value of downOne
// return downOne


var minCostClimbingStairs = function (cost) {
    let downOne = 0,
        downTwo = 0

    for (let i = 2; i < cost.length + 1; i++) {
        let temp = downOne
        downOne = Math.min(downOne + cost[i - 1], downTwo + cost[i - 2])
        downTwo = temp
    }
    return downOne
};

// Time complexity: O(N)
// Space complexity: O(1)