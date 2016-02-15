/*
Validate Binary Search Tree

Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

  - The left subtree of a node contains only nodes with keys less than the node's key.
  - The right subtree of a node contains only nodes with keys greater than the node's key.
  - Both the left and right subtrees must also be binary search trees.

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
 * @return {boolean}
 */
var isValidBST = function(root) {
    var arr = [];
    
    var runBST = function(node){
        if(node == null){
            return;
        } else {
            runBST(node.left);
            arr.push(node.val);
            runBST(node.right);
        }
    }
    runBST(root);
    
    for (var i=0; i<arr.length; i++){
        if(arr[i+1]<=arr[i]){
            return false;
        }
    }
    return true;
};
