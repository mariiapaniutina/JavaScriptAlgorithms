/*
Intersection of Two Arrays

Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:

    Each element in the result must be unique.
    The result can be in any order.

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var ob = {};
    var results = [];
    
    for (var i=0; i<nums1.length; i++){
        if (ob[nums1[i]] === undefined){
            ob[nums1[i]] = 0;
        }
    }
    
    for (var i=0; i<nums2.length; i++){
        if (ob[nums2[i]] === 0){
            ob[nums2[i]] = 1;
        }
    }
    
    for (var key in ob){
        if (ob[key] === 1){
            results.push(+key);
        }
    }
    
    return results;
}
