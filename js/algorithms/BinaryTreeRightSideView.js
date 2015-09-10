/* 
Binary Tree Right Side View

Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

For example:
Given the following binary tree,

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---

You should return [1, 3, 4]. 

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
 * @return {number[]}
 */
var rightSideView = function(root) {
    var arr = [];
    var result = [];
    
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
    
    for (var i=0; i<arr.length; i++){
        result[i] = arr[i][arr[i].length-1];
    }
    
    return result;
};

