/*
Single Number II

Given an array of integers, every element appears 
three times except for one. Find that single one.

Note:
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var map = {};
    var len = nums.length;
    
    for (var i=0; i<len; i++){
        var el = nums[i];
        if (map[el] === undefined){
            map[el] = 1;
        } else {
            map[el] +=1;
            if (map[el] == 3){
                delete map[el];
            }
        }
    }
    
    return +Object.keys(map)[0];
};
