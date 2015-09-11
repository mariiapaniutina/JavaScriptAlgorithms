/*
Sum Root to Leaf Numbers

Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

An example is the root-to-leaf path 1->2->3 which represents the number 123.

Find the total sum of all root-to-leaf numbers.

For example,

    1
   / \
  2   3

The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.

Return the sum = 12 + 13 = 25. 
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
var sumNumbers = function(root) {
    var arr = [];
    var stack = [];
  
      //create array of pathes
      function treeTraversal (root){
        if(root !== null){
          stack.push(root.val);
          
          if (root.right == null && root.left == null){
            //leaf, lets copy stack
            var stack_clone = stack.slice();
            arr.push(stack_clone);
          }
          
          if (root.left !== null){
            treeTraversal(root.left);
          }
          
          if (root.right !== null){
            treeTraversal(root.right);
          }
          
          stack.pop();
          
        }
      }
      
      //make array of sum
      function findSumInArr (arr){
        var sum = '';
        var arr_ret = [];
        for (var i=0; i<arr.length; i++){
          for (var j=0; j<arr[i].length; j++){
            sum+=arr[i][j];
          }
          arr_ret.push(sum);
          sum = '';
        }
        return arr_ret;
      }
      
      treeTraversal(root);
      var result = findSumInArr(arr);
      var results_sum = 0;
      
      //find if actual sum is present
      for (var i=0; i<result.length; i++){
          results_sum+= +result[i];
      }
      
      return results_sum;
};
