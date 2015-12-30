/*
Find the Duplicate Number

Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), 
prove that at least one duplicate number must exist. 
Assume that there is only one duplicate number, find the duplicate one. 
*/

/**
 * @param {number[]} nums
 * @return {number}
*/
var findDuplicate = function(nums) {
    var ob = {};
    
    for (var i=0; i<nums.length; i++){
        if(ob[nums[i]] == undefined){
            ob[nums[i]] = 1;
        } else {
            ob[nums[i]] +=1;
        }
    }
    
    for (var prop in ob){
      if (ob[prop] > 1){
        return +prop;
      }
    }
};
