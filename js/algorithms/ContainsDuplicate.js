/*
Contains Duplicate
Given an array of integers, find if the array contains any duplicates. 
Your function should return true if any value appears 
at least twice in the array, and it should return false if every element is distinct.
*/


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var map = {};
    var len = nums.length;
    
    for (var i=0; i<len; i++){
        if (map[nums[i]] == undefined) {
            map[nums[i]] = nums[i];
        }else {
            return true;
        }
    }
    return false;
};
