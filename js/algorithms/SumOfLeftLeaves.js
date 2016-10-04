/*
Sum of Left Leaves

Find the sum of all left leaves in a given binary tree.

Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    var sum = 0;
    var btTraversal = function(root){
        if (root){
            if (root.left && !root.left.left && !root.left.right){
                sum += root.left.val;
            }
            btTraversal(root.left);
            btTraversal(root.right);
        } else {
            return;
        }
    };
    
    btTraversal(root);
    
    return sum;
};
