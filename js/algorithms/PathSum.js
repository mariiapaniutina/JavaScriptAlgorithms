/*
Path Sum

 Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.
For example:
Given the below binary tree and sum = 22,

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1

return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
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
    var sum = 0;
    var arr_ret = [];
    for (var i=0; i<arr.length; i++){
      for (var j=0; j<arr[i].length; j++){
        sum+=arr[i][j];
      }
      arr_ret.push(sum);
      sum = 0;
    }
    return arr_ret;
  }
  
  treeTraversal(root);
  var result = findSumInArr(arr);
  
  //find if actual sum is present
  for (var i=0; i<result.length; i++){
    if(result[i] == sum){
      return true;
    }
  }
  
  return false;
};
