/**
 * @param {character[][]} board
 * @return {boolean}
 */



// fn -> takes in sudoku (9*9 array) and returns whether or not sudoku is valid
// sudoku -> max size of 9*9, each value inside array can only be from 1-9 or "."
// return boolean -> true/false


// loop through rows of sudoku
//      initialize row, col, square hashsets
//      loop through cols of sudoku
//          initialize row_item, col_item, square_item
//          set - row_item = [r][c],
//                col_item = [c][r], 
//                square_item = [3*Math.floor(r/3)+Math.floor(c/3)][3*(r%3)+(c%3)]
//          if row_item, col_item, square_item !== ".", check if each item are in their respective parent hashsets
//          if true, return false - otherwise, add item to parent's hashset
// return true 



var isValidSudoku = function (board) {


    for (let r = 0; r < 9; r++) {
        const row = new Set(),
            col = new Set(),
            square = new Set()

        for (let c = 0; c < 9; c++) {
            const row_item = board[r][c]
            const col_item = board[c][r]
            const square_item = board[3 * Math.floor(r / 3) + Math.floor(c / 3)][3 * (r % 3) + (c % 3)]

            if (row_item !== ".") {
                if (row.has(row_item)) return false
                row.add(row_item)
            }

            if (col_item !== ".") {
                if (col.has(col_item)) return false
                col.add(col_item)
            }

            if (square_item !== ".") {
                if (square.has(square_item)) return false
                square.add(square_item)
            }
        }
    }
    return true
};

// Time complexity: O(9*9)
// Space complexity: O(9*9)

