/*
Find Largest Value in Each Tree Row

You need to find the largest value in each row of a binary tree.

Example:
Input: 

          1
         / \
        3   2
       / \   \  
      5   3   9 

Output: [1, 3, 9]
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
var largestValues = function(root) {
    
    if (!root){
        return [];
    }
    
    var max             = [];
    var MIN_INT         = -Math.abs(2147483648);
    var currmax         = MIN_INT;
    var mainQueue       = [root];
    var childrenQueue   = [];
    
    while(mainQueue.length !== 0){
        var curr = mainQueue.shift();
        
        if (curr.val > currmax){
            currmax = curr.val;
        }
        
        if (curr.left) {
            childrenQueue.push(curr.left);
        }
        
        if (curr.right) {
            childrenQueue.push(curr.right);
        }
        
        //level is finished
        if (mainQueue.length === 0){
            max.push(currmax);
            
            mainQueue       = mainQueue.concat(childrenQueue);
            childrenQueue   = [];
            currmax         = MIN_INT;
        }
    }
    
    return max;
};
