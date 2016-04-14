/*
Majority Element

Given an array of size n, find the majority element. 
The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var map = {};
    var len = nums.length;
    var majorCount = Math.ceil(len/2);
    
    for (var i=0; i<len; i++){
        var el = nums[i];
        if (map[el] === undefined){
            map[el] = 1;
        } else {
            map[el] += 1;
        }
      
        if(map[el] >= majorCount){
          return el;
        }
    }
};
