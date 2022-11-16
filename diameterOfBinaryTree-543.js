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


// dfs recursive
// initialize diameter
// call dfs function
// dfs function
//      if node is not valid return 0
//      call the dfs fn on the left, right nodes and store results in left, right variables
//      recalculate the diameter by finding the max value between the previous diameter and (left + right)
//      return the maximum length between the left and right branches, and add 1 because there is an extra edge between the current node and its parent
// return diameter


var diameterOfBinaryTree = function (root) {
    let diameter = 0;

    dfs(root);

    function dfs(node) {
        if (!node) return 0;

        const left = dfs(node.left);
        const right = dfs(node.right);

        diameter = Math.max(diameter, left + right);

        return Math.max(left, right) + 1
    }

    return diameter;
};

// Time complexity: O(N)
// Space complexity: O(N)












