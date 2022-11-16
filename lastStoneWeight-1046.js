/**
 * @param {number[]} stones
 * @return {number}
 */


// Max heap problem, but b/c javascript doesn't have built in heaps, we will use sorting
// while (stones.length > 1)
//      sort the stones
//      .pop() the last 2 values from stones
//      if one of the values < the other value, stones.push(y-x)
// return stones arr


var lastStoneWeight = function (stones) {
    while (stones.length > 1) {
        stones = stones.sort((a, b) => a - b)
        let y = stones.pop()
        let x = stones.pop()
        if (x < y) stones.push(y - x)
    }
    return stones
};

// Time complexity: O(N^2)
// Space complexity: O(1)