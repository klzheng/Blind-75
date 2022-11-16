/**
 * @param {character[][]} grid
 * @return {number}
 */


// DFS, recursive
// initialize count for number of islands
// loop through the rows
//      loop through the cols
//          check if item === "1" 
//              if true, count++
//              call dfs function
// return count
// 
// dfs function(row, col, grid)
// if row, col are out of grid OR if element === "0", return
// set current element = "0"
//      call dfs function to the top (dfs(row - 1, col, grid))
//      call dfs function to the bottom (dfs(row + 1, col, grid))
//      call dfs function to the right (dfs(row, col + 1, grid))
//      call dfs function to the left (dfs(row, col - 1, grid))


const numIslands = (grid) => {
    let count = 0

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] == '1') {
                count++
                explore(row, col, grid)
            }
        }
    }
    return count
}


function explore(row, col, grid) {
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[row].length || grid[row][col] === '0') {
        return
    }
    grid[row][col] = '0'

    explore(row - 1, col, grid)
    explore(row + 1, col, grid)
    explore(row, col + 1, grid)
    explore(row, col - 1, grid)
}

// Time complexity: O(M*N) [M = rows, N = cols]
// Space complexity: O(M*N) [M = rows, N = cols]