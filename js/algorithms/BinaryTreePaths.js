/*
Binary Tree Paths 
Given a binary tree, return all root-to-leaf paths.

For example, given the following binary tree:

   1
 /   \
2     3
 \
  5
All root-to-leaf paths are:

["1->2->5", "1->3"]
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  
  if (root){
    var arr = [];
    var stack = [];
    var result = [];

    var traverseTreePaths = function(root){
      if (root){
        stack.push(root.val);

        if (root.left == null && root.right == null){
          var stack_copy = stack.slice();
          arr.push(stack_copy);
        }

        if (root.left){
          traverseTreePaths(root.left);
        }
        if (root.right){
          traverseTreePaths(root.right);
        }

        stack.pop();
      }

    };

    var convertArrToStr = function(arr){
      var str = '';
      var arrow = '->';
      for (var i=0; i<arr.length; i++){
        if(i !== arr.length-1){
          str+=arr[i] + arrow;
        } else {
          str+=arr[i];
        }
      }
      return str;
    }

    traverseTreePaths(root);
    
    //console.log('arr', arr);
    for (var i=0; i<arr.length; i++){
      //we do not need just root element
      if (arr.length == 1){
        var tmp = convertArrToStr(arr[i]);
        result.push(tmp);
      }else if (arr[i].length > 1){
        var tmp = convertArrToStr(arr[i]);
        result.push(tmp);
      }
      
    }

    return result;
  } else {
    return [];
  }
  
};
