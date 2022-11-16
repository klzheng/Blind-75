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
 * @return {TreeNode}
 */


// fn -> inverts the binary tree and returns its root
// root -> binary tree, numbers only, values can be negative/positive
// return root


// recursive 
// base case: if root is not valid, return null
// swap the left and right nodes (let temp = root.left, root.left = root.right, root.right = temp)
// call the fn on the left node
// call the fn on the right node
// return root


var invertTree = function (root) {
    if (!root) return null

    let temp = root.left
    root.left = root.right
    root.right = temp

    invertTree(root.left)
    invertTree(root.right)

    return root
};

// Time complexity: O(N)
// Space complexity: O(N)