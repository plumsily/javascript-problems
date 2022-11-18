// Given the root of a binary tree, invert the tree, and return its root.

// Example 1:

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
// Example 2:

// Input: root = [2,1,3]
// Output: [2,3,1]
// Example 3:

// Input: root = []
// Output: []

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {TreeNode}
//  */

//Parameters -> root is a TreeNode object. BST is where every left child is smaller than parent, and every right child is greater than parent.
//Return -> a root in which its tree is inverted
//Examples -> root = [4,2,7,1,3,6,9], output = [4,7,2,9,6,3,1]
//Pseudocode -> call invertTree with reverse parameters for left and right. Recursively call.

var invertTree = function (root) {
  if (root != null) {
    let right = invertTree(root.right);
    let left = invertTree(root.left);
    root.left = right;
    root.right = left;
  }
  return root;
};
