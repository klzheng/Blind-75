/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */


// fn -> search a 2D matrix for a target value, and return true/false
// 2D matrix, target -> each row is sorted from left to right, each row starts with a larger number than the last element in the previous row, numbers only, rows >= 1
// return boolean -> true/false


var searchMatrix = function(matrix, target) {
    let combined = []
    
    for (i = 0; i < matrix.length; i++) {
        combined = combined.concat(matrix[i])
    }
    
    let left = 0
    let right = combined.length - 1    
    
    while (left <= right) {
        const middle = Math.floor((right + left) / 2)
        if (combined[middle] > target) {
            right = middle - 1
        } else if (combined[middle] < target) {
            left = middle + 1
        } else return true
    }
    return false
};

// Time complexity: O(log(m*n))
// Space complexity: O(m)
