/**
Two Sum
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
The return format is zero-based indices.
**/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {};
    var len = nums.length;
  
    for (var i=0; i<len; i++){
      
        var el = nums[i];
        var diff = target - el;
        
        if((map[diff] !== undefined) && (i !== map[diff].position)){
            var posX = map[diff].position;
            if(i > posX){
                return [posX, i]
            } else {
                return [i, posX];
            }
        }
      
        map[el] = {value: diff, position: i};
      
    }
};
