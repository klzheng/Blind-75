// two pointer
// initialize left, right pointers - left = 0, right = 1
// while right pointer < prices.length
//      check if prices[right] - prices[left] > 0, if true set max profit, right++
//      if false, set left pointer to right pointer, right++
// return max profit


var maxProfit = function (prices) {

    let left = 0
    let right = 1
    let max = 0

    while (right < prices.length) {

        if (prices[right] - prices[left] > 0) {
            max = Math.max(max, prices[right] - prices[left])
        } else {
            left = right
        }
        right++
    }

    return max
}

// Time complexity: O(N)
// Space complexity: O(1)