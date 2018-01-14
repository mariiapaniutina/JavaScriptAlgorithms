/*
Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]

Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
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
var averageOfLevels = function(root) {
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
        //taking average sum of current level values and pushing to `result` array
        //replacing current level nodes array with next level nodes array
        if (currQ.length === 0){
            var everageVals = currQVals.reduce(function(a, b){return a + b}) / currQVals.length;
            result.push(everageVals);
            currQVals = [];
            
            currQ = nextQ.slice();
            nextQ = [];
        }
    }
    
    return result;
};
