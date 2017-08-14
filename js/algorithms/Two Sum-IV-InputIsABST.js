/*
Given a Binary Search Tree and a target number, return true if there exist two elements in 
the BST such that their sum is equal to the given target.

Example 1:
```
Input: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 9

Output: True
```

Example 2:
```
Input: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 28

Output: False
```
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    
    var map = {};
    
    var queue = [root];
    
    while (queue.length !== 0){
        //grabbing current element from queue
        var curr = queue.shift();
        
        //push all kids into queue
        if (curr.left) {
            queue.push(curr.left);
        }
        
        if (curr.right) {
            queue.push(curr.right);
        }
        
        //checking for difference and presenting in map
        var diff = k - curr.val;
        
        if (typeof map[diff] !== 'undefined') {
            return true;
        } else {
            map[curr.val] = diff;
        }
    }
    
    return false;
};
