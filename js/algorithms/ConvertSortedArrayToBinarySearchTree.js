/*
Convert Sorted Array to Binary Search Tree
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    
   function creatingBSTfromSortedArray (arr, start, end){
       var mid = Math.floor((start+end)/2);
       if (start > end){
           return null;
       }
       var tree = new TreeNode(arr[mid]);
       tree.left = creatingBSTfromSortedArray(arr, start, mid-1);
       tree.right = creatingBSTfromSortedArray(arr, mid+1, end);
       return tree;
   }
  return creatingBSTfromSortedArray(nums, 0, nums.length-1);
   
};
