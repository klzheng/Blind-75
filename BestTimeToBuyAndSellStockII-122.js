/**
 * @param {number[]} prices
 * @return {number}
 */


// fn -> takes in prices arr and returns the max profit possible
// prices arr -> only numbers, length >= 1
// return integer -> max profit, number


// [7,1,5,3,6,4] -> 7
// [1,2,3,4,5] -> 4
// [7,6,4,3,1] -> 0


// initialize max profit
// loop through prices arr
//      check if next num > curr num
//      if true, add the difference to max profit
// return max profit


var maxProfit = function(prices) {
    
    let maxProfit = 0
    
    for (let i = 0; i < prices.length; i++) {
        if (prices[i+1] > prices[i]) {
            maxProfit += (prices[i+1] - prices[i])
        }
    }
    
    return maxProfit
};

// Time complexity: O(N)
// Space complexity: O(1)