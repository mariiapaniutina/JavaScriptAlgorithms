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
    //array which contains levels of tree
    var result = [];
    
    if (!root) {
        return result;
    }
    
    //current level with tree nodes
    var currQ = [root];
    
    //next level with tree nodes
    var nextQ = [];
    
    //current level with tree values
    var currQVals = [];
    
    while (currQ.length > 0) {
        //grabing first element from queue
        var currEl = currQ.shift();
        //pushing its value to array with current level values
        currQVals.push(currEl.val);
        
        //if current element has left child -> push it to array, which contains next level elements
        if (currEl.left) {
            nextQ.push(currEl.left);
        }
        
        //if current element has right child -> push it to array, which contains next level elements
        if (currEl.right) {
            nextQ.push(currEl.right);
        }
        
        //when current level becomes empty
        //pushing all array with current level nodes values to `result` array
        //replacing current level nodes array with next level nodes array
        if (currQ.length === 0){
            result.push(currQVals);
            currQVals = [];
            
            currQ = nextQ.slice();
            nextQ = [];
        }
    }
    
    return result;
};
