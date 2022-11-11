/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */


// fn -> rotates a 2D array/matrix 90 degrees clockwise
// 2D matrix -> length >= 1, length <= 20, numbers only, positive/negative
// return rotated 2D matrix


// loop through the rows
//      loop through cols starting at row
//          swap the element values
// loop through the rows of matrix
//      reverse each row
// return matrix


var rotate = function (matrix) {

    for (let row = 0; row < matrix.length; row++) {
        for (let col = row; col < matrix[row].length; col++) {
            let temp = matrix[row][col]
            matrix[row][col] = matrix[col][row]
            matrix[col][row] = temp
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        matrix[row] = matrix[row].reverse()
    }

    return matrix
};

// Time complexity: O(n^2)
// Space complexity: O(1)

