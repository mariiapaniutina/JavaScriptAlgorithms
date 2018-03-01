/*
Given a binary tree, find the leftmost value in the last row of the tree.

Example 1:
Input:
    2
   / \
  1   3
Output:
1

Example 2: 
Input:
        1
       / \
      2   3
     /   / \
    4   5   6
       /
      7
Output:
7


Note: You may assume the tree (i.e., the given root node) is not NULL.
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
var findBottomLeftValue = function(root) {
    //current level with tree nodes
    var currQ = [root];
    
    //next level with tree nodes
    var nextQ = [];
    
    //current level with tree values
    var currQVals = [];
    
    //current left most tree row value
    var currLeftVal = root.val;
    
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
        //grabbing current most left value
        //replacing current level nodes array with next level nodes array
        if (currQ.length === 0){
            currLeftVal = currQVals[0];
            currQVals = [];
            
            currQ = nextQ.slice();
            nextQ = [];
        }
    }
    
    return currLeftVal;
};
