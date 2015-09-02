/*
Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v 
and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

        _______6______
       /              \
    ___2__          ___8__
   /      \        /      \
   0      _4       7       9
         /  \
         3   5

For example, the lowest common ancestor (LCA) of nodes 2 and 8 is 6. Another example is LCA of nodes 2 and 4 is 2, 
since a node can be a descendant of itself according to the LCA definition.
 */

var lowestCommonAncestor = function(root, p, q) {
    var arr = [];
    var stack = [];
    
    function pathToEl (root, el){
        if (root){
            stack.push(root.val);
            if(root == el){
                 var stack_clone = stack.slice();
                 arr.push(stack_clone);
            }
            pathToEl(root.left, el);
            pathToEl(root.right, el);
            
            stack.pop();
        }
    }
    
    pathToEl(root, p);
    pathToEl(root, q);
    
    //find lowest commont root
    var maxLen = Math.max(arr[0].length, arr[1].length);
    for (var i=0; i<maxLen; i++){
      if (arr[0][i] !== arr[1][i]){
        return arr[0][i-1];
      }
    }
    return false;
};