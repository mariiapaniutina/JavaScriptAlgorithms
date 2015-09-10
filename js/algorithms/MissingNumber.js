/*
 * Missing number
 *  Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
 *  For example,
 *  Given nums = [0, 1, 3] return 2. 
 */

var missingNumber = function(nums) {
  //the sum of all elements, included missed one  
  var sum1 = 0;
  
  //the sum of all elements, excluded missed one
  var sum2 = 0;
  
  for (var i=0; i<nums.length+1; i++){
    sum1 += i;
  }
  
  for (var j=0; j<nums.length; j++){
    sum2 += nums[j];
  }
  
  return sum1 - sum2; 
};

