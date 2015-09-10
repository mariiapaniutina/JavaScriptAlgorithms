
/* 
Single Number
Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice.
Find the two elements that appear only once.
For example:
Given nums = [1, 2, 1, 3, 2, 5], return [3, 5]
*/

var singleNumber = function(nums) {
  var obj = {};
  var result = [];
  
  for (var i=0; i<nums.length; i++){
    if (obj[nums[i]] == undefined){
      obj[nums[i]] = nums[i];
    } else {
      delete obj[nums[i]];
    }
    
  }
  
  for (var p in obj){
    result.push(obj[p])
  }
  
  return result;
};
