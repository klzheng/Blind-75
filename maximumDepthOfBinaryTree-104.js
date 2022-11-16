/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */


// fn -> takes in a binary tree root and returns the max depth
// tree -> numbers only, binary, not sorted
// return depth -> number


// DFS recursion
// base case: if node is not valid, return 0
// calculate the left side of the tree node - call fn(root.left) + 1
// calculate the right side of the tree node - call fn(root.right) + 1
// return the Math.max(left, right)


var maxDepth = function (root) {
    if (!root) return 0

    let left = maxDepth(root.left) + 1
    let right = maxDepth(root.right) + 1

    return Math.max(left, right)
};

// Time complexity: O(N)
// Space complexity: O(N) - worst case: the tree is completely unbalanced, then recursion would occur N times (call stack would be O(N))


