/*
Intersection of Two Arrays II
Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].
Note:
    Each element in the result should appear as many times as it shows in both arrays.
    The result can be in any order.

Follow up:
    What if the given array is already sorted? How would you optimize your algorithm?
    What if nums1's size is small compared to nums2's size? Which algorithm is better?
    What if elements of nums2 are stored on disk, and the memory 
    is limited such that you cannot load all elements into the memory at once?
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var map = {};
    var result = [];
    
    //storing nums1 as map
    for (var i=0; i<nums1.length; i++){
        if(map[nums1[i]] === undefined){
            map[nums1[i]] = 1;
        } else {
            map[nums1[i]] += 1;
        }
    }
    
    //checking for presense
    for (var j=0; j<nums2.length; j++){
        if(map[nums2[j]] !== undefined && map[nums2[j]] >= 1){
            result.push(nums2[j]);
            map[nums2[j]] -= 1;
        }
    }
    
    return result;
};
