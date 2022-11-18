// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Example 1:

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.
// Example 2:

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
// Example 3:

// Input: root = [2,1], p = 2, q = 1
// Output: 2

// Constraints:

// The number of nodes in the tree is in the range [2, 105].
// -109 <= Node.val <= 109
// All Node.val are unique.
// p != q
// p and q will exist in the BST.

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */

// /**
//  * @param {TreeNode} root
//  * @param {TreeNode} p
//  * @param {TreeNode} q
//  * @return {TreeNode}
//  */

//PREP
//P: root is a treenode object with methods for left and right children. p and q are treenode objects that are supposed to be children to the LCA.
//R: return a treenode object that is the parent node of p and q, where p or q can be a child of itself. we also know that in order for p and q to be children, one has to be lower than the other. additionally, if p or q is a child of the other, the parent node is greater than if it is a left child and less than if it is a right child.
//E: in a binary search tree, if we choose two nodes that are children of the same node, then that node is the LCA. If p or q is a child of the other, then the other node is the LCA.
//P: we start from the top node. we check if both p.val and q.val surrounds root.val. if it satisfies this condition, then we have found the LCA and return root. if not, we check if p.val and q.val is in either the left or right side by comparing the values to the parent val. we then recursively call itself with the right or left as the new parent.
var lowestCommonAncestor = function (root, p, q) {
  let parent = root.val;
  let pVal = p.val;
  let qVal = q.val;

  if (pVal > parent && qVal > parent) {
    return lowestCommonAncestor(root.right, p, q);
  } else if (pVal < parent && qVal < parent) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    return root;
  }
};
