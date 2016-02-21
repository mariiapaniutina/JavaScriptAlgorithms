/*
Binary Tree Level Order Traversal II

Given a binary tree, return the bottom-up level order traversal of its nodes' values. 
(ie, from left to right, level by level from leaf to root).

For example:
Given binary tree {3,9,20,#,#,15,7},

    3
   / \
  9  20
    /  \
   15   7

return its bottom-up level order traversal as:

[
  [15,7],
  [9,20],
  [3]
]

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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    var arr = [];
    
    var findNode = function(node, lvl){
        if(node == null){
            return;
        } else {
            if(arr.length < lvl+1){
                arr[lvl] = [];
            }
            arr[lvl].push(node.val);
            
            findNode(node.left, lvl+1);
            findNode(node.right, lvl+1);
        }
    }
    
    findNode(root, 0);
    
    return arr.reverse();
};
