/**
 * @param {number[][]} matrix
 * @return {number[]}
 */


// 4 pointers
// initialize results arr, left, right, top, bottom pointers
// while (left < right && top < bottom) 
//      loop from left to right and add items to results arr
//      increment top by 1 (cleared row)
//      loop from top to bottom, add items to results
//      decrement right by 1 (cleared right col)
//      loop from right to left (decreasing), add items to results
//      decrement bottom by 1 (cleared bottom row)
//      loop from bottom to top (increasing), add items to results
//      increment bottom by 1 (cleared left col)
// return result


var spiralOrder = function (matrix) {
    let result = []
    let left = 0
    let right = matrix[0].length
    let top = 0
    let bottom = matrix.length

    while (left < right && top < bottom) {
        for (let i = left; i < right; i++) {
            result.push(matrix[top][i])
        }
        top += 1

        for (let i = top; i < bottom; i++) {
            result.push(matrix[i][right - 1])
        }
        right -= 1

        if (!(left < right && top < bottom)) break

        for (let i = right - 1; i > left - 1; i--) {
            result.push(matrix[bottom - 1][i])
        }
        bottom -= 1

        for (let i = bottom - 1; i > top - 1; i--) {
            result.push(matrix[i][left])
        }
        left += 1
    }
    return result
};

// Time complexity: O(m*n) - where m is the # of rows, n is # of cols
// Space complexity: O(1)



