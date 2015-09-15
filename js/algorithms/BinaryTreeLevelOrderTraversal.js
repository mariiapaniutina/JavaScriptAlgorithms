/*
Binary Tree Level Order Traversal

Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree {3,9,20,#,#,15,7},

    3
   / \
  9  20
    /  \
   15   7

return its level order traversal as:

[
  [3],
  [9,20],
  [15,7]
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
var levelOrder = function(root) {
    var arr = [];
    
    var searchNode = function(node, level){
        
        if(node === null){
            return;
        } else {
            if(arr.length < level+1){
                arr[level] = [];
            }
            arr[level].push(node.val);
        }
        
        searchNode(node.left, level+1);
        searchNode(node.right, level+1);
    };
    
    searchNode(root, 0);
    return arr;
};
