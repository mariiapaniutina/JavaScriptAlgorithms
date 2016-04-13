/*
Single Number III

Given an array of numbers nums, in which exactly two elements appear 
only once and all the other elements appear exactly twice. Find the two elements that appear only once.

For example:
Given nums = [1, 2, 1, 3, 2, 5], return [3, 5]. 
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    var map = {};
    var len = nums.length;
    for (var i=0; i<len; i++){
        var el = nums[i];
        if (map[el] === undefined){
            map[el] = 1;
        } else {
            delete map[el];
        }
    }
    
    
    return [+Object.keys(map)[0], +Object.keys(map)[1]];
};
