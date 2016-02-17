/*
Symmetric Tree My Submissions Question

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
For example, this binary tree is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following is not:
    1
   / \
  2   2
   \   \
   3    3
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
var isSymmetric = function(root) {
    var symmetricHelper = function(root1, root2){
        if(root1 == null && root2 == null) {return true;}
        if(root1 == null || root2 == null) {return false;}
        if(root1.val !== root2.val) {return false;}
        
        return symmetricHelper(root1.left, root2.right) && symmetricHelper(root1.right, root2.left);
    };
    
    if (!root){
        return true;
    }
    
    return symmetricHelper(root.left, root.right);
};
