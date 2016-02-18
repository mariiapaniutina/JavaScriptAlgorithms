/*
Search for a Range
Given a sorted array of integers, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).
If the target is not found in the array, return [-1, -1].

For example,
Given [5, 7, 7, 8, 8, 10] and target value 8,
return [3, 4].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  var start = null;
  var end = null;
  
  for (var i=0; i<nums.length; i++){
    if (nums[i]==target){
      if(start == null){
        start = i;
      }
      end = i;
    }
    
  }
  
  if(start !== null && end !== null){
    return [start, end];
  } else {
    return [-1, -1];
  }
  
};
